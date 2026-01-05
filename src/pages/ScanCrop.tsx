import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFarmStore } from '@/stores/farmStore';
import ImageUpload from '@/components/features/disease-detection/ImageUpload';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { generateMockAnalysis, generateMockTreatments } from '@/lib/ai-mock';
import { AlertCircle, Sprout } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ScanCrop() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { farmProfile, addAnalysis } = useFarmStore();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedCropId, setSelectedCropId] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      toast({
        title: 'No image selected',
        description: 'Please upload a crop image first.',
        variant: 'destructive',
      });
      return;
    }

    if (farmProfile?.crops && farmProfile.crops.length > 0 && !selectedCropId) {
      toast({
        title: 'Select crop type',
        description: 'Please select which crop this image is for.',
        variant: 'destructive',
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Get selected crop type
    const selectedCrop = farmProfile?.crops.find(c => c.id === selectedCropId);
    const cropType = selectedCrop?.cropType;

    // Generate mock analysis
    const analysis = generateMockAnalysis(selectedImage, farmProfile, cropType);

    // Generate treatments
    const treatments = generateMockTreatments(analysis);

    // Store analysis
    addAnalysis(analysis);

    // Store treatments in session storage for the analysis page
    sessionStorage.setItem(`treatments-${analysis.id}`, JSON.stringify(treatments));

    toast({
      title: 'Analysis complete',
      description: `${analysis.diseaseName} detected with ${analysis.confidence.toFixed(1)}% confidence`,
    });

    setIsAnalyzing(false);

    // Navigate to analysis results
    navigate(`/analysis/${analysis.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-civora-blue mb-2">Crop Disease Detection</h1>
        <p className="text-muted-foreground">
          Upload a clear image of affected crop leaves or plants for AI-powered disease analysis
        </p>
      </div>

      {!farmProfile && (
        <Card className="border-l-4 border-l-status-warning bg-yellow-50">
          <CardContent className="flex items-start gap-3 pt-6">
            <AlertCircle className="h-5 w-5 text-status-warning flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-sm mb-1">Farm Profile Not Set</p>
              <p className="text-sm text-muted-foreground mb-3">
                Setting up your farm profile helps our AI provide more accurate and
                personalized disease detection and treatment recommendations.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/profile')}
                className="border-status-warning text-status-warning hover:bg-yellow-100"
              >
                Set Up Farm Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {farmProfile?.crops && farmProfile.crops.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Sprout className="h-5 w-5 text-civora-blue" />
              Select Crop for Analysis
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Choose which crop this image belongs to for accurate disease detection
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="cropSelect">Crop Type *</Label>
              <Select value={selectedCropId} onValueChange={setSelectedCropId}>
                <SelectTrigger id="cropSelect">
                  <SelectValue placeholder="Select a crop from your farm" />
                </SelectTrigger>
                <SelectContent>
                  {farmProfile.crops.map((crop) => (
                    <SelectItem key={crop.id} value={crop.id}>
                      <div className="flex flex-col">
                        <span className="font-medium">{crop.cropType}</span>
                        <span className="text-xs text-muted-foreground">
                          {crop.fieldSize} acres • Planted {new Date(crop.plantingDate).toLocaleDateString()}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {farmProfile && (
        <Card className="gradient-civora-subtle">
          <CardHeader>
            <CardTitle className="text-lg">Farm Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Farm Name</p>
                <p className="font-semibold text-civora-blue">{farmProfile.farmName}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Location</p>
                <p className="font-semibold">{farmProfile.location}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Total Farm Size</p>
                <p className="font-semibold">{farmProfile.farmSize} acres</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Soil Type</p>
                <p className="font-semibold">{farmProfile.soilType}</p>
              </div>
            </div>
            {farmProfile.crops.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-2">Active Crops ({farmProfile.crops.length})</p>
                <div className="flex flex-wrap gap-2">
                  {farmProfile.crops.map((crop) => (
                    <div key={crop.id} className="px-3 py-1 bg-white rounded-full text-sm font-medium">
                      {crop.cropType} ({crop.fieldSize}ac)
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <ImageUpload onImageSelect={handleImageSelect} isAnalyzing={isAnalyzing} />

      {selectedImage && (
        <div className="flex gap-3">
          <Button
            onClick={handleAnalyze}
            disabled={isAnalyzing || (farmProfile?.crops && farmProfile.crops.length > 0 && !selectedCropId)}
            className="flex-1"
            size="lg"
          >
            {isAnalyzing ? 'Analyzing...' : 'Analyze Disease'}
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setSelectedImage(null);
              setSelectedCropId('');
            }}
            disabled={isAnalyzing}
            size="lg"
          >
            Clear
          </Button>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tips for Best Results</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-civora-blue mt-1">•</span>
              <span>Capture images in good natural lighting (avoid harsh shadows)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-civora-blue mt-1">•</span>
              <span>Focus on affected leaves or plant parts showing clear symptoms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-civora-blue mt-1">•</span>
              <span>Include multiple symptoms if possible (spots, discoloration, wilting)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-civora-blue mt-1">•</span>
              <span>Avoid blurry or out-of-focus images for accurate AI analysis</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
