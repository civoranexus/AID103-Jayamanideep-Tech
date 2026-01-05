<<<<<<< HEAD
# CropGuard AI - Disease Detection System

## Project Information
- **Project ID:** AID103
- **Project Name:** CropGuard AI – Disease Detection System
- **Project Domain:** Artificial Intelligence (AI Development)
- **Company:** Civora Nexus Pvt. Ltd.
- **Internship Program:** CivoraX Internship Program

## Project Overview

CropGuard AI is an intelligent crop disease detection platform that provides farmers with precise, data-driven insights for early identification and management of crop diseases. The system uses AI-powered analysis to help farmers make informed decisions about disease treatment, fungicide use, and preventative measures.

## Key Features

### 1. **AI-Powered Disease Detection**
- Advanced computer vision analysis for crop images
- 95%+ accuracy in disease identification
- Real-time severity assessment
- Confidence scoring for each diagnosis

### 2. **Personalized Treatment Recommendations**
- Context-aware treatment plans based on:
  - Disease type and severity
  - Crop type and growth stage
  - Environmental conditions
  - Farm location and soil type
- Multiple treatment options (Chemical, Organic, Cultural, Preventive)

### 3. **Farm Profile Management**
- Farmer registration and farm details
- Crop type and planting date tracking
- Location and soil type data
- Farm size management

### 4. **Disease Trend Monitoring**
- Historical analysis tracking
- Severity trend visualization
- Regional outbreak alerts
- Priority-based notifications

### 5. **Alert System**
- Critical disease outbreak notifications
- High-risk environmental condition warnings
- Real-time status updates
- Actionable recommendations

## Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Charts:** Recharts
- **State Management:** Zustand
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form with Zod validation

### AI/ML (Mock Implementation for V1.0)
- Intelligent mock AI engine simulating:
  - Disease pattern recognition
  - Contextual analysis based on farm data
  - Treatment recommendation generation
  - Environmental factor integration

## File Structure

```
cropguard-ai/
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── ui/                          # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Main navigation
│   │   │   └── Footer.tsx              # Footer with company info
│   │   └── features/
│   │       ├── disease-detection/
│   │       │   ├── ImageUpload.tsx     # Crop image upload
│   │       │   ├── AnalysisResult.tsx  # AI analysis display
│   │       │   └── TreatmentCard.tsx   # Treatment recommendations
│   │       ├── dashboard/
│   │       │   ├── StatsCard.tsx       # Health statistics
│   │       │   ├── AlertCard.tsx       # Alert notifications
│   │       │   └── TrendChart.tsx      # Trend visualization
│   │       └── farm-profile/
│   │           └── FarmForm.tsx        # Farm profile form
│   ├── pages/
│   │   ├── Home.tsx                    # Landing page
│   │   ├── ScanCrop.tsx                # Image upload & scan
│   │   ├── Analysis.tsx                # Detailed analysis results
│   │   ├── Dashboard.tsx               # Health overview
│   │   └── FarmProfile.tsx             # Profile management
│   ├── lib/
│   │   ├── utils.ts                    # Utility functions
│   │   └── ai-mock.ts                  # Mock AI engine
│   ├── stores/
│   │   └── farmStore.ts                # Zustand state management
│   ├── types/
│   │   └── index.ts                    # TypeScript interfaces
│   ├── constants/
│   │   └── diseases.ts                 # Disease database
│   ├── hooks/
│   │   └── use-toast.ts                # Toast notifications
│   ├── App.tsx                         # Main app component
│   ├── main.tsx                        # Entry point
│   └── index.css                       # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn or bun package manager

### Step 1: Install Dependencies

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using bun
bun install
```

### Step 2: Required Dependencies (Auto-installed)

The project includes these key dependencies:
- `react` & `react-dom` - Frontend framework
- `react-router-dom` - Routing
- `zustand` - State management
- `@tanstack/react-query` - Data fetching
- `tailwindcss` - Styling
- `lucide-react` - Icons
- `recharts` - Charts
- `zod` - Validation
- `clsx` & `tailwind-merge` - Utility functions

### Step 3: Run Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using bun
bun dev
```

The application will start at `http://localhost:5173`

### Step 4: Build for Production

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using bun
bun run build
```

### Step 5: Preview Production Build

```bash
# Using npm
npm run preview

# Using yarn
yarn preview

# Using bun
bun preview
```

## Usage Guide

### 1. **Setup Farm Profile**
- Navigate to "Farm Profile" from the header
- Fill in your farm details:
  - Farmer name and farm name
  - Location (Village/Town, District)
  - Current crop type
  - Planting date
  - Farm size (in acres)
  - Soil type
- Click "Save Profile & Continue to Scan"

### 2. **Scan Crop for Disease Detection**
- Go to "Scan Crop" page
- Upload a clear image of affected crop leaves or plants
- Tips for best results:
  - Use good natural lighting
  - Focus on affected parts showing symptoms
  - Avoid blurry images
  - Include multiple symptoms if possible
- Click "Analyze Disease"
- Wait for AI analysis (2-3 seconds)

### 3. **View Analysis Results**
- Review disease identification with confidence score
- Check severity level and affected area percentage
- Review identified symptoms
- Examine environmental conditions
- Explore personalized treatment recommendations

### 4. **Monitor Farm Health Dashboard**
- View total analyses and statistics
- Check active alerts and critical issues
- Monitor disease trend charts
- Review recent analyses history
- Track healthy vs. problematic scans

## Core Modules

### 1. **User & Farm Data Module**
- Farmer registration and profile management
- Farm details (crop type, location, planting date, size, soil)
- Profile data used for contextual AI analysis

### 2. **Visual Data Input Module**
- Drag-and-drop image upload
- Camera capture support
- Image preview with validation
- File type and size restrictions

### 3. **AI Detection & Analysis Engine**
- Disease pattern recognition
- Severity assessment (Critical, High, Medium, Low)
- Confidence scoring
- Symptom identification
- Environmental factor analysis
- Spread risk evaluation

### 4. **Treatment & Management Module**
- Chemical treatment recommendations
- Organic/biological alternatives
- Cultural control practices
- Preventive strategies
- Effectiveness ratings
- Cost considerations
- Safety precautions

### 5. **Alerts & Trend Analysis Module**
- Priority-based alerts (Critical, High, Medium, Low)
- Real-time outbreak notifications
- 30-day trend visualization
- Status tracking (Active, Monitoring, Resolved)
- Regional disease patterns

### 6. **Admin & Reference Data Module** (Framework in V1.0)
- Disease database management
- Treatment reference data
- Advisory rules and guidelines
- System usage monitoring

## Design Guidelines

### Color Palette (Civora Nexus Branding)
- **Primary Blue:** #003DA5 (Deep Blue)
- **Secondary Blue:** #00A3E0 (Light Blue)
- **Dark Blue:** #002366
- **Success Green:** #10B981
- **Warning Yellow:** #F59E0B
- **Critical Red:** #DC2626

### Typography
- **Headings:** Bold, 600-700 weight
- **Body Text:** Regular, 400 weight, 16px minimum
- **Line Height:** 1.6 for readability

### UI Principles
- Clean, simple, farmer-friendly interface
- Clear visual hierarchy
- Responsive design (mobile-first)
- Status-coded severity indicators
- Card-based layouts for data clarity
- Accessible color contrasts

## AI Features (V1.0 - Mock Implementation)

The current version uses intelligent mock AI that simulates:

1. **Contextual Disease Detection**
   - Analyzes crop type from farm profile
   - Considers planting date to determine growth stage
   - Selects relevant diseases for the crop type
   - Generates realistic confidence scores (85-98%)

2. **Environmental Factor Integration**
   - Simulates temperature, humidity, and rainfall data
   - Links environmental conditions to disease development
   - Adjusts severity based on spread risk and conditions

3. **Smart Treatment Generation**
   - Creates crop-specific treatment plans
   - Varies recommendations based on severity
   - Provides multiple treatment approaches
   - Includes effectiveness ratings and cost estimates

4. **Intelligent Decision Logic**
   - Links symptoms to causative agents
   - Considers growth stage for severity assessment
   - Generates actionable, explainable recommendations
   - Separates AI analysis from general information

## Future Enhancements (V2.0+)

- Real AI/ML model integration (CNN, R-CNN)
- Live camera feed integration
- Multi-language support for regional languages
- Weather API integration for real environmental data
- Historical learning from user interactions
- Community disease mapping
- Expert consultation feature
- Mobile app (iOS/Android)
- Offline mode support

## Development Notes

### V1.0 Implementation Status
✅ Farm profile management
✅ Image upload and preview
✅ Mock AI disease detection
✅ Analysis results display
✅ Treatment recommendations
✅ Dashboard with statistics
✅ Alert system
✅ Trend visualization
✅ Responsive design
✅ Civora Nexus branding
⏳ Admin module (basic framework)

### Known Limitations (V1.0)
- Mock AI (not real ML model)
- Local state management (no backend database)
- No user authentication
- Simulated environmental data
- Basic admin interface

## License & Credits

**Company:** Civora Nexus Pvt. Ltd.
**Tagline:** Connecting Citizens Through Intelligent Innovation
**Location:** Sangamner, Maharashtra - 422605, India
**Contact:** +91-7350 675192

---

*Developed under the CivoraX Internship Program*
*Project ID: AID103*
=======
# 🚀 CivoraX Internship Program 2025-26

<p align="center">
  <img src="https://internship.civoranexus.com/CivoraX.png" alt="CivoraX Logo" width="200"/>
</p>

<p align="center">
  <strong>Launch your tech career with real projects, expert mentorship, and industry-recognized certification</strong>
</p>



<p align="center">
  <img src="https://img.shields.io/badge/Duration-5%20Weeks-blue" alt="Duration"/>
  <img src="https://img.shields.io/badge/Start%20Date-Jan%205%2C%202026-green" alt="Start Date"/>
  <img src="https://img.shields.io/badge/End%20Date-Feb%208%2C%202026-orange" alt="End Date"/>
  <img src="https://img.shields.io/badge/Mode-Remote--First-purple" alt="Mode"/>
</p>

---

## 📊 Program Statistics

| Metric | Value |
|--------|-------|
| 🎓 Interns Trained | 300+ |
| 💼 Live Projects | 20 |
| ⏱️ Program Duration | 5 Weeks |

---


## 📅 Program Details

| Detail | Information |
|--------|-------------|
| **Duration** | 5-week intensive program |
| **Dates** | January 5 - February 8, 2026 |
| **Format** | Remote-first with live sessions and workshops |
| **Structure** | Real-time project work with weekly milestones |

---

## ✅ Eligibility Criteria

- ✔️ Students from **any year or degree program**
- ✔️ Recent graduates and **career switchers** welcome
- ✔️ **Basic programming knowledge** required
- ✔️ Strong **passion for technology** and learning

---

## 🛠️ Technologies You'll Master

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, Next.js |
| **Backend** | Node.js, Python |
| **Advanced** | AI & Machine Learning |
| **Infrastructure** | Cloud & DevOps |
| **Mobile** | Cross-platform Development |
| **Database** | SQL & NoSQL Systems |
| **APIs** | RESTful & GraphQL |
| **Workflow** | Agile & Git |

---

## 📋 Application Process

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   01. Register  │───▶│  02. Team       │───▶│  03. Receive    │
│   Online        │    │  Review         │    │  Confirmation   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

1. **📝 Register Online** - Complete your application form with details and preferences
2. **🔍 CivoraX Team Review** - Our team reviews your application and qualifications
3. **✉️ Eligibility Email** - Receive confirmation email if selected




## 📞 Contact Information

| Channel | Details |
|---------|---------|
| 📧 **Email** | [contact@civoranexus.com](mailto:contact@civoranexus.com) |
| 📱 **Phone** | [+91 7350675192](tel:+917350675192) |
| 📍 **Location** | 422605, Sangamner, Maharashtra, India |

### 🔗 Social Links

[![LinkedIn](https://img.shields.io/badge/LinkedIn-CivoraX-blue?style=flat&logo=linkedin)](https://www.linkedin.com/company/civoranexus)
[![Instagram](https://img.shields.io/badge/Instagram-CivoraX-E4405F?style=flat&logo=instagram)](https://www.instagram.com/civoranexus)
[![Twitter](https://img.shields.io/badge/Twitter-CivoraX-1DA1F2?style=flat&logo=twitter)](https://twitter.com/civoranexus)
[![YouTube](https://img.shields.io/badge/YouTube-CivoraX-FF0000?style=flat&logo=youtube)](https://www.youtube.com/@civoranexus)

---

## 🏢 About Civora Nexus

**Civora Nexus Pvt. Ltd.** is a technology company empowering communities through innovative civic and healthcare technology solutions.

### Company Services:
- 🔄 Digital Transformation for Businesses
- 🏘️ Smart Community & Enterprise Solutions
- 💡 Affordable Tech Solutions
- 📊 Data Analytics & Business Insights
- 🎓 Innovation & Skill Development
- 🤖 AI & Automation Solutions

---

## 📚 Quick Links

- 🌐 [Official Website](https://civoranexus.com/)
- 📋 [Internship Portal](https://civoranexus.com/internships)
- 🔐 [Certificate Verification](https://internship.civoranexus.com)
- 📄 [Privacy Policy](https://civoranexus.com/privacy-policy)
- 📜 [Terms of Service](https://civoranexus.com/terms-and-conditions)



<p align="center">
  <strong>© 2025 Civora Nexus Pvt. Ltd. All rights reserved.</strong>
</p>

<p align="center">
  Made with ❤️ by CivoraX Team
</p>


>>>>>>> 36b309e2277a845e55663c60d0a7158eb600bb93
