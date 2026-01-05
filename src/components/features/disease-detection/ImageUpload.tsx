import { useState, useCallback } from 'react';
import { Upload, Camera, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isAnalyzing?: boolean;
}

export default function ImageUpload({ onImageSelect, isAnalyzing }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback(
    (file: File) => {
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onImageSelect(file);
      }
    },
    [onImageSelect]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const clearImage = () => {
    setPreview(null);
  };

  return (
    <Card>
      <CardContent className="p-6">
        {!preview ? (
          <div
            className={cn(
              'border-2 border-dashed rounded-lg p-12 text-center transition-colors',
              isDragging
                ? 'border-civora-blue bg-blue-50'
                : 'border-gray-300 hover:border-civora-lightblue'
            )}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="gradient-civora h-16 w-16 rounded-full flex items-center justify-center">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Upload Crop Image</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop or click to select an image of affected crop leaves or plants
                </p>
              </div>
              <div className="flex gap-3">
                <label htmlFor="file-upload">
                  <Button type="button" className="cursor-pointer" onClick={() => document.getElementById('file-upload')?.click()}>
                    <Camera className="h-4 w-4 mr-2" />
                    Choose Image
                  </Button>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChange}
                  disabled={isAnalyzing}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: JPG, PNG, HEIC • Max size: 10MB
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            <img
              src={preview}
              alt="Crop preview"
              className="w-full h-auto rounded-lg max-h-96 object-contain"
            />
            {!isAnalyzing && (
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={clearImage}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="animate-scan-pulse mb-2">
                    <Camera className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="font-semibold">Analyzing crop health...</p>
                  <p className="text-sm text-gray-200">AI detection in progress</p>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
