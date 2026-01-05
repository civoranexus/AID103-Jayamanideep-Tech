import { DiseaseAnalysis, Treatment, FarmProfile } from '@/types';
import { CROP_DISEASES, CROP_TYPES } from '@/constants/diseases';

// Helper function to get random crop type
function getRandomCropType(): string {
  return CROP_TYPES[Math.floor(Math.random() * CROP_TYPES.length)];
}

// Generate mock AI analysis based on farm context
export function generateMockAnalysis(imageFile: File, farmProfile: FarmProfile | null, selectedCropType?: string): DiseaseAnalysis {
  // Use farm profile data for context
  const cropType = selectedCropType || farmProfile?.crops[0]?.cropType || getRandomCropType();
  
  // Calculate growth stage based on planting date
  const relevantCrop = selectedCropType 
    ? farmProfile?.crops.find(c => c.cropType === selectedCropType)
    : farmProfile?.crops[0];
  
  const plantingDate = relevantCrop?.plantingDate
    ? new Date(relevantCrop.plantingDate)
    : new Date(Date.now() - 60 * 24 * 60 * 60 * 1000); // 60 days ago
  // Get diseases for this crop type
  const relevantDiseases = Object.entries(CROP_DISEASES).filter(([_, disease]) =>
    disease.crops.includes(cropType)
  );

  // Select a random disease from relevant ones
  const [diseaseName, diseaseData] =
    relevantDiseases[Math.floor(Math.random() * relevantDiseases.length)] ||
    Object.entries(CROP_DISEASES)[0];

  const daysSincePlanting = Math.floor((Date.now() - plantingDate.getTime()) / (1000 * 60 * 60 * 24));
  let growthStage = 'Seedling';
  if (daysSincePlanting > 90) growthStage = 'Maturity';
  else if (daysSincePlanting > 60) growthStage = 'Fruiting';
  else if (daysSincePlanting > 30) growthStage = 'Flowering';
  else if (daysSincePlanting > 14) growthStage = 'Vegetative';

  // Generate contextual environmental factors
  const temperature = 15 + Math.random() * 15; // 15-30°C
  const humidity = 60 + Math.random() * 30; // 60-90%
  const rainfall = humidity > 80 ? 'Heavy' : humidity > 70 ? 'Moderate' : 'Light';

  // Determine severity based on environmental conditions and growth stage
  let severity: 'low' | 'medium' | 'high' | 'critical' = 'medium';
  if (diseaseData.spreadRisk === 'high' && humidity > 80) {
    severity = Math.random() > 0.5 ? 'critical' : 'high';
  } else if (diseaseData.spreadRisk === 'high') {
    severity = 'high';
  } else if (growthStage === 'Flowering' || growthStage === 'Fruiting') {
    severity = 'medium';
  } else {
    severity = Math.random() > 0.6 ? 'medium' : 'low';
  }

  const confidence = 85 + Math.random() * 13; // 85-98%
  const affectedArea = severity === 'critical' ? 40 + Math.random() * 30 : 
                      severity === 'high' ? 20 + Math.random() * 20 :
                      severity === 'medium' ? 10 + Math.random() * 15 :
                      5 + Math.random() * 10;

  const analysis: DiseaseAnalysis = {
    id: `analysis-${Date.now()}`,
    timestamp: new Date().toISOString(),
    imageUrl: URL.createObjectURL(imageFile),
    diseaseName,
    confidence: Math.round(confidence * 10) / 10,
    severity,
    affectedArea: Math.round(affectedArea * 10) / 10,
    cropType,
    growthStage,
    environmentalFactors: {
      temperature: Math.round(temperature * 10) / 10,
      humidity: Math.round(humidity * 10) / 10,
      rainfall,
    },
    symptoms: diseaseData.symptoms,
    causativeAgent: diseaseData.causativeAgent,
    spreadRisk: diseaseData.spreadRisk,
  };

  return analysis;
}

// Generate mock treatments based on analysis
export function generateMockTreatments(analysis: DiseaseAnalysis): Treatment[] {
  const treatments: Treatment[] = [];

  // Chemical treatment based on disease severity
  if (analysis.severity === 'critical' || analysis.severity === 'high') {
    treatments.push({
      id: `treatment-${Date.now()}-1`,
      type: 'chemical',
      name: `Fungicide Application for ${analysis.diseaseName}`,
      description: `Immediate application of systemic fungicide to control ${analysis.diseaseName} spread`,
      application: 'Foliar spray covering all affected plants and 5-meter buffer zone',
      dosage: analysis.severity === 'critical' ? '2.5 ml per liter of water' : '2.0 ml per liter of water',
      timing: 'Apply early morning or late evening. Repeat after 7-10 days if symptoms persist',
      precautions: [
        'Wear protective equipment (gloves, mask)',
        'Do not apply during windy conditions',
        'Maintain 14-day harvest interval',
        'Store pesticides away from children and animals',
      ],
      effectiveness: 85 + Math.random() * 10,
      cost: analysis.severity === 'critical' ? 'high' : 'medium',
    });
  }

  // Organic treatment option
  treatments.push({
    id: `treatment-${Date.now()}-2`,
    type: 'organic',
    name: 'Neem Oil & Copper-based Treatment',
    description: 'Organic disease management using natural fungicidal properties',
    application: 'Mix neem oil (5ml/L) with liquid copper fungicide, spray thoroughly on leaves',
    dosage: '5 ml neem oil + 2g copper sulfate per liter',
    timing: 'Weekly application until symptoms reduce. Apply in cooler hours',
    precautions: [
      'Test on small area first to check plant tolerance',
      'Avoid during flowering to protect pollinators',
      'Can be used up to harvest day',
    ],
    effectiveness: 70 + Math.random() * 15,
    cost: 'low',
  });

  // Cultural/preventive practices
  treatments.push({
    id: `treatment-${Date.now()}-3`,
    type: 'cultural',
    name: 'Cultural Control & Field Management',
    description: 'Agronomic practices to prevent disease spread and reduce infection pressure',
    application: 'Implement improved field hygiene and crop management practices',
    dosage: 'N/A - Management practice',
    timing: 'Immediate implementation and continued throughout season',
    precautions: [
      'Remove and destroy infected plant debris',
      'Improve field drainage to reduce moisture',
      'Increase plant spacing for better air circulation',
      'Avoid overhead irrigation - use drip system',
      'Sanitize tools between plants',
    ],
    effectiveness: 60 + Math.random() * 20,
    cost: 'low',
  });

  // Add preventive rotation strategy for future seasons
  if (analysis.severity === 'high' || analysis.severity === 'critical') {
    treatments.push({
      id: `treatment-${Date.now()}-4`,
      type: 'preventive',
      name: 'Crop Rotation & Resistant Varieties',
      description: 'Long-term prevention strategy for future growing seasons',
      application: 'Plan crop rotation and select disease-resistant varieties for next planting',
      dosage: 'N/A - Planning strategy',
      timing: 'Implement in next growing season',
      precautions: [
        `Avoid planting ${analysis.cropType} in this field for 2-3 seasons`,
        'Rotate with non-host crops (legumes or cereals)',
        'Select certified disease-resistant seeds',
        'Soil treatment before next planting',
      ],
      effectiveness: 80 + Math.random() * 15,
      cost: 'medium',
    });
  }

  return treatments;
}
