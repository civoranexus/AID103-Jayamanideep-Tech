export const CROP_DISEASES = {
  'Late Blight': {
    crops: ['Potato', 'Tomato'],
    causativeAgent: 'Phytophthora infestans (Oomycete)',
    symptoms: ['Dark brown lesions on leaves', 'White fungal growth on leaf undersides', 'Rapid leaf death', 'Stem cankers', 'Tuber rot'],
    conditions: 'Cool, wet weather (15-20°C, high humidity)',
    spreadRisk: 'high' as const,
  },
  'Powdery Mildew': {
    crops: ['Wheat', 'Barley', 'Grape', 'Cucumber'],
    causativeAgent: 'Erysiphe graminis (Fungus)',
    symptoms: ['White powdery spots on leaves', 'Yellowing leaves', 'Stunted growth', 'Reduced yield'],
    conditions: 'Warm days, cool nights, moderate humidity',
    spreadRisk: 'medium' as const,
  },
  'Leaf Rust': {
    crops: ['Wheat', 'Barley', 'Oat'],
    causativeAgent: 'Puccinia triticina (Fungus)',
    symptoms: ['Orange-brown pustules on leaves', 'Yellowing between pustules', 'Premature leaf drop', 'Reduced grain quality'],
    conditions: 'Moderate temperatures (15-22°C), frequent dew',
    spreadRisk: 'high' as const,
  },
  'Bacterial Blight': {
    crops: ['Rice', 'Cotton'],
    causativeAgent: 'Xanthomonas oryzae (Bacteria)',
    symptoms: ['Water-soaked lesions on leaves', 'Yellow to white leaf edges', 'Wilting', 'Yield loss'],
    conditions: 'Warm, humid conditions with heavy rainfall',
    spreadRisk: 'high' as const,
  },
  'Anthracnose': {
    crops: ['Tomato', 'Pepper', 'Mango'],
    causativeAgent: 'Colletotrichum species (Fungus)',
    symptoms: ['Sunken dark lesions on fruits', 'Circular spots with concentric rings', 'Pink spore masses', 'Fruit rot'],
    conditions: 'Warm, humid weather with heavy rainfall',
    spreadRisk: 'medium' as const,
  },
  'Early Blight': {
    crops: ['Tomato', 'Potato'],
    causativeAgent: 'Alternaria solani (Fungus)',
    symptoms: ['Concentric ring patterns on older leaves', 'Brown spots with yellow halos', 'Defoliation', 'Reduced yield'],
    conditions: 'Warm temperatures (24-29°C), high humidity',
    spreadRisk: 'medium' as const,
  },
  'Downy Mildew': {
    crops: ['Grape', 'Cucumber', 'Lettuce'],
    causativeAgent: 'Plasmopara viticola (Oomycete)',
    symptoms: ['Yellow patches on upper leaf surface', 'Gray-white downy growth underneath', 'Leaf curling', 'Fruit damage'],
    conditions: 'Cool, wet conditions (10-15°C)',
    spreadRisk: 'high' as const,
  },
};

export const CROP_TYPES = ['Wheat', 'Rice', 'Potato', 'Tomato', 'Cotton', 'Barley', 'Oat', 'Grape', 'Cucumber', 'Pepper', 'Mango', 'Lettuce'];

export const SOIL_TYPES = ['Loamy', 'Clay', 'Sandy', 'Silty', 'Peaty', 'Chalky'];

export const GROWTH_STAGES = ['Seedling', 'Vegetative', 'Flowering', 'Fruiting', 'Maturity'];
