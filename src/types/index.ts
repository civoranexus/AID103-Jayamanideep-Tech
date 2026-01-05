export interface CropInfo {
  id: string;
  cropType: string;
  plantingDate: string;
  fieldSize: number; // in acres
  growthStage?: string;
  expectedHarvestDate?: string;
}

export interface FarmProfile {
  id: string;
  farmerName: string;
  farmName: string;
  location: string;
  farmSize: number; // total farm size in acres
  soilType: string;
  crops: CropInfo[]; // multiple crops
}

export interface DiseaseAnalysis {
  id: string;
  timestamp: string;
  imageUrl: string;
  diseaseName: string;
  confidence: number; // 0-100
  severity: 'low' | 'medium' | 'high' | 'critical';
  affectedArea: number; // percentage
  cropType: string;
  growthStage: string;
  environmentalFactors: {
    temperature: number;
    humidity: number;
    rainfall: string;
  };
  symptoms: string[];
  causativeAgent: string;
  spreadRisk: 'low' | 'medium' | 'high';
}

export interface Treatment {
  id: string;
  type: 'chemical' | 'organic' | 'cultural' | 'preventive';
  name: string;
  description: string;
  application: string;
  dosage: string;
  timing: string;
  precautions: string[];
  effectiveness: number; // 0-100
  cost: 'low' | 'medium' | 'high';
}

export interface Alert {
  id: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  location: string;
  diseaseType: string;
  affectedCrops: string[];
  actionRequired: string;
  status: 'active' | 'resolved' | 'monitoring';
}

export interface TrendData {
  date: string;
  detections: number;
  severityCritical: number;
  severityHigh: number;
  severityMedium: number;
  severityLow: number;
}
