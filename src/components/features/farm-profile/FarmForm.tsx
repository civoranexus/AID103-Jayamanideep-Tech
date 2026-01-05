import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useFarmStore } from '@/stores/farmStore';
import { FarmProfile, CropInfo } from '@/types';
import { CROP_TYPES, SOIL_TYPES } from '@/constants/diseases';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Sprout } from 'lucide-react';

export default function FarmForm() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { farmProfile, setFarmProfile } = useFarmStore();

  const [formData, setFormData] = useState<Partial<FarmProfile>>(
    farmProfile || {
      farmerName: '',
      farmName: '',
      location: '',
      farmSize: 0,
      soilType: '',
      crops: [],
    }
  );

  const [currentCrop, setCurrentCrop] = useState<Partial<CropInfo>>({
    cropType: '',
    plantingDate: '',
    fieldSize: 0,
    expectedHarvestDate: '',
  });

  const addCrop = () => {
    if (!currentCrop.cropType || !currentCrop.plantingDate || !currentCrop.fieldSize) {
      toast({
        title: 'Incomplete crop information',
        description: 'Please fill in all crop details before adding.',
        variant: 'destructive',
      });
      return;
    }

    const newCrop: CropInfo = {
      id: `crop-${Date.now()}`,
      cropType: currentCrop.cropType!,
      plantingDate: currentCrop.plantingDate!,
      fieldSize: currentCrop.fieldSize!,
      expectedHarvestDate: currentCrop.expectedHarvestDate,
    };

    setFormData({
      ...formData,
      crops: [...(formData.crops || []), newCrop],
    });

    // Reset current crop form
    setCurrentCrop({
      cropType: '',
      plantingDate: '',
      fieldSize: 0,
      expectedHarvestDate: '',
    });

    toast({
      title: 'Crop added',
      description: `${newCrop.cropType} has been added to your farm profile.`,
    });
  };

  const removeCrop = (cropId: string) => {
    setFormData({
      ...formData,
      crops: formData.crops?.filter((crop) => crop.id !== cropId) || [],
    });

    toast({
      title: 'Crop removed',
      description: 'Crop has been removed from your farm profile.',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.crops || formData.crops.length === 0) {
      toast({
        title: 'No crops added',
        description: 'Please add at least one crop to your farm profile.',
        variant: 'destructive',
      });
      return;
    }
    
    const profile: FarmProfile = {
      id: farmProfile?.id || `farm-${Date.now()}`,
      farmerName: formData.farmerName!,
      farmName: formData.farmName!,
      location: formData.location!,
      farmSize: formData.farmSize!,
      soilType: formData.soilType!,
      crops: formData.crops!,
    };

    setFarmProfile(profile);
    
    toast({
      title: 'Farm profile saved',
      description: `Your farm information with ${profile.crops.length} crop(s) has been successfully updated.`,
    });

    navigate('/scan');
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-civora-blue">Farm Profile Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          This information helps our AI provide more accurate and contextual disease analysis
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="farmerName">Farmer Name *</Label>
              <Input
                id="farmerName"
                value={formData.farmerName}
                onChange={(e) => setFormData({ ...formData, farmerName: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="farmName">Farm Name *</Label>
              <Input
                id="farmName"
                value={formData.farmName}
                onChange={(e) => setFormData({ ...formData, farmName: e.target.value })}
                placeholder="Enter farm name"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location (Village/Town, District) *</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g., Sangamner, Ahmednagar"
              required
            />
          </div>

          {/* Crops Management Section */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-civora-blue flex items-center gap-2">
                  <Sprout className="h-5 w-5" />
                  Crop Information
                </h3>
                <p className="text-sm text-muted-foreground">Add all crops currently growing on your farm</p>
              </div>
              <div className="text-sm text-muted-foreground">
                {formData.crops?.length || 0} crop(s) added
              </div>
            </div>

            {/* Current Crops List */}
            {formData.crops && formData.crops.length > 0 && (
              <div className="space-y-2">
                <Label>Added Crops</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {formData.crops.map((crop) => (
                    <div
                      key={crop.id}
                      className="flex items-center justify-between p-3 border rounded-lg bg-gradient-civora-subtle"
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-civora-blue">{crop.cropType}</p>
                        <p className="text-xs text-muted-foreground">
                          {crop.fieldSize} acres • Planted: {new Date(crop.plantingDate).toLocaleDateString()}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCrop(crop.id)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add New Crop Form */}
            <Card className="border-2 border-dashed">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cropType">Crop Type *</Label>
                      <Select
                        value={currentCrop.cropType}
                        onValueChange={(value) => setCurrentCrop({ ...currentCrop, cropType: value })}
                      >
                        <SelectTrigger id="cropType">
                          <SelectValue placeholder="Select crop type" />
                        </SelectTrigger>
                        <SelectContent>
                          {CROP_TYPES.map((crop) => (
                            <SelectItem key={crop} value={crop}>
                              {crop}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cropFieldSize">Field Size (acres) *</Label>
                      <Input
                        id="cropFieldSize"
                        type="number"
                        step="0.1"
                        min="0"
                        value={currentCrop.fieldSize}
                        onChange={(e) => setCurrentCrop({ ...currentCrop, fieldSize: parseFloat(e.target.value) })}
                        placeholder="e.g., 2.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cropPlantingDate">Planting Date *</Label>
                      <Input
                        id="cropPlantingDate"
                        type="date"
                        value={currentCrop.plantingDate}
                        onChange={(e) => setCurrentCrop({ ...currentCrop, plantingDate: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="harvestDate">Expected Harvest Date (Optional)</Label>
                      <Input
                        id="harvestDate"
                        type="date"
                        value={currentCrop.expectedHarvestDate}
                        onChange={(e) => setCurrentCrop({ ...currentCrop, expectedHarvestDate: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={addCrop}
                    variant="outline"
                    className="w-full border-civora-blue text-civora-blue hover:bg-blue-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add This Crop to Farm
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="farmSize">Farm Size (in acres) *</Label>
              <Input
                id="farmSize"
                type="number"
                step="0.1"
                min="0"
                value={formData.farmSize}
                onChange={(e) => setFormData({ ...formData, farmSize: parseFloat(e.target.value) })}
                placeholder="e.g., 5.5"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="soilType">Soil Type *</Label>
              <Select
                value={formData.soilType}
                onValueChange={(value) => setFormData({ ...formData, soilType: value })}
                required
              >
                <SelectTrigger id="soilType">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent>
                  {SOIL_TYPES.map((soil) => (
                    <SelectItem key={soil} value={soil}>
                      {soil}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Save Profile & Continue to Scan
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
