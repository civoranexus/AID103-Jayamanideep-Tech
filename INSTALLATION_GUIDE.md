# CropGuard AI - Complete Installation Guide

## 📋 Table of Contents
1. [System Requirements](#system-requirements)
2. [Pre-Installation Setup](#pre-installation-setup)
3. [Step-by-Step Installation](#step-by-step-installation)
4. [Running the Application](#running-the-application)
5. [Project File Structure](#project-file-structure)
6. [Troubleshooting](#troubleshooting)

---

## 🖥️ System Requirements

### Minimum Requirements
- **Operating System:** Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM:** 4GB minimum (8GB recommended)
- **Storage:** 500MB free space
- **Internet Connection:** Required for initial setup

### Required Software
- **Node.js:** Version 18.0 or higher
- **Package Manager:** npm (comes with Node.js), yarn, or bun
- **Code Editor:** VS Code (recommended), Sublime Text, or any text editor
- **Web Browser:** Chrome, Firefox, Edge, or Safari (latest version)

---

## 🔧 Pre-Installation Setup

### Step 1: Install Node.js

#### Windows
1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS version** (e.g., v20.x.x)
3. Run the installer (.msi file)
4. Follow installation wizard (click Next → Next → Install)
5. Verify installation:
   ```bash
   # Open Command Prompt (CMD) or PowerShell
   node --version
   npm --version
   ```

#### macOS
```bash
# Using Homebrew (recommended)
brew install node

# Or download from https://nodejs.org
# Verify installation
node --version
npm --version
```

#### Linux (Ubuntu/Debian)
```bash
# Update package list
sudo apt update

# Install Node.js (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 2: Install Git (Optional - for version control)

#### Windows
1. Download from [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Run installer and follow defaults
3. Verify: `git --version`

#### macOS
```bash
brew install git
git --version
```

#### Linux
```bash
sudo apt install git
git --version
```

### Step 3: Install VS Code (Recommended Editor)

1. Download from [https://code.visualstudio.com](https://code.visualstudio.com)
2. Install for your operating system
3. **Recommended Extensions** (Install from VS Code Extensions):
   - **ES7+ React/Redux/React-Native snippets** (by dsznajder)
   - **Tailwind CSS IntelliSense** (by Tailwind Labs)
   - **ESLint** (by Microsoft)
   - **Prettier - Code formatter** (by Prettier)
   - **TypeScript Vue Plugin (Volar)** (by Vue)
   - **Auto Rename Tag** (by Jun Han)
   - **Path Intellisense** (by Christian Kohler)

---

## 📦 Step-by-Step Installation

### Step 1: Get the Project Files

#### Option A: Extract from ZIP (If you have the project as ZIP)
1. Extract the ZIP file to a folder (e.g., `C:\Projects\cropguard-ai` or `~/Projects/cropguard-ai`)
2. Open terminal/command prompt in that folder

#### Option B: Clone from Git (If using version control)
```bash
# Navigate to your projects directory
cd C:\Projects  # Windows
cd ~/Projects   # macOS/Linux

# Clone the repository (if hosted on GitHub)
git clone <repository-url> cropguard-ai
cd cropguard-ai
```

### Step 2: Open Project in VS Code
```bash
# From the project directory
code .
```

Or:
1. Open VS Code
2. File → Open Folder
3. Select the `cropguard-ai` folder

### Step 3: Install Project Dependencies

Open the **integrated terminal** in VS Code (View → Terminal or `` Ctrl+` ``) and run:

#### Using npm (Default - comes with Node.js)
```bash
npm install
```

#### Using yarn (Alternative - faster)
```bash
# First install yarn globally (one time)
npm install -g yarn

# Then install dependencies
yarn install
```

#### Using bun (Alternative - fastest)
```bash
# First install bun (one time)
npm install -g bun

# Then install dependencies
bun install
```

**This will install all required packages:**
- React & React DOM
- React Router
- TypeScript
- Tailwind CSS
- Vite (build tool)
- Zustand (state management)
- Lucide React (icons)
- Recharts (charts)
- shadcn/ui components
- And 20+ other dependencies

**Installation time:** 2-5 minutes depending on internet speed

### Step 4: Verify Installation

Check if all dependencies are installed:
```bash
npm list --depth=0
```

You should see a list of installed packages without errors.

---

## 🚀 Running the Application

### Start Development Server

#### Using npm
```bash
npm run dev
```

#### Using yarn
```bash
yarn dev
```

#### Using bun
```bash
bun dev
```

**Expected Output:**
```
VITE v5.x.x  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

### Access the Application

1. **Open your web browser**
2. **Navigate to:** [http://localhost:5173](http://localhost:5173)
3. **You should see the CropGuard AI home page!**

### Important Files to Know

| File | Purpose | When to Run |
|------|---------|-------------|
| `src/main.tsx` | **Entry point** - Application starts here | Automatically runs with `npm run dev` |
| `src/App.tsx` | Main app component with routing | Auto-loaded by main.tsx |
| `index.html` | Root HTML file | Auto-loaded |
| `package.json` | Dependencies and scripts | Modified by npm/yarn |
| `vite.config.ts` | Build configuration | Auto-used by Vite |

**You don't need to manually run any specific file - just use `npm run dev`!**

---

## 📁 Project File Structure

```
cropguard-ai/
│
├── 📂 public/                     # Static assets
│   ├── favicon.ico               # Website icon
│   └── og-image.png              # Social media preview image
│
├── 📂 src/                        # Source code (main development folder)
│   │
│   ├── 📄 main.tsx               # ⭐ Entry point - App starts here
│   ├── 📄 App.tsx                # Main app component with routing
│   ├── 📄 index.css              # Global styles and Tailwind config
│   │
│   ├── 📂 components/            # Reusable UI components
│   │   ├── 📂 ui/                # shadcn/ui components (button, card, etc.)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ... (20+ components)
│   │   │
│   │   ├── 📂 layout/            # Layout components
│   │   │   ├── Header.tsx        # Top navigation bar
│   │   │   └── Footer.tsx        # Bottom footer
│   │   │
│   │   └── 📂 features/          # Feature-specific components
│   │       ├── 📂 disease-detection/
│   │       │   ├── ImageUpload.tsx      # Crop image upload
│   │       │   ├── AnalysisResult.tsx   # Disease analysis display
│   │       │   └── TreatmentCard.tsx    # Treatment recommendations
│   │       │
│   │       ├── 📂 dashboard/
│   │       │   ├── StatsCard.tsx        # Statistics cards
│   │       │   ├── AlertCard.tsx        # Alert notifications
│   │       │   └── TrendChart.tsx       # Trend charts
│   │       │
│   │       └── 📂 farm-profile/
│   │           └── FarmForm.tsx         # Farm profile form with multiple crops
│   │
│   ├── 📂 pages/                 # Page components (routes)
│   │   ├── Home.tsx              # Landing page (/)
│   │   ├── ScanCrop.tsx          # Crop scanning page (/scan)
│   │   ├── Analysis.tsx          # Analysis results (/analysis/:id)
│   │   ├── Dashboard.tsx         # Farm health dashboard (/dashboard)
│   │   └── FarmProfile.tsx       # Farm profile setup (/profile)
│   │
│   ├── 📂 lib/                   # Utility functions and helpers
│   │   ├── utils.ts              # Common utilities
│   │   └── ai-mock.ts            # Mock AI engine (disease detection logic)
│   │
│   ├── 📂 stores/                # State management (Zustand)
│   │   └── farmStore.ts          # Farm profile and analysis data store
│   │
│   ├── 📂 types/                 # TypeScript type definitions
│   │   └── index.ts              # All interfaces (FarmProfile, CropInfo, etc.)
│   │
│   ├── 📂 constants/             # Application constants
│   │   └── diseases.ts           # Disease database, crop types, soil types
│   │
│   └── 📂 hooks/                 # Custom React hooks
│       └── use-toast.ts          # Toast notification hook
│
├── 📄 index.html                 # Root HTML file
├── 📄 package.json               # Dependencies and scripts
├── 📄 package-lock.json          # Locked dependency versions
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 tailwind.config.ts         # Tailwind CSS configuration
├── 📄 vite.config.ts             # Vite build tool configuration
├── 📄 eslint.config.js           # ESLint code quality rules
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 components.json            # shadcn/ui configuration
├── 📄 README.md                  # Project documentation
└── 📄 INSTALLATION_GUIDE.md      # This file
```

### Key Folders Explained

| Folder | Description | When to Edit |
|--------|-------------|--------------|
| `src/pages/` | **Main pages** - Each file is a route/page | Adding new pages |
| `src/components/` | **Reusable UI pieces** - Buttons, cards, forms | Creating new components |
| `src/lib/` | **Business logic** - AI engine, utilities | Changing app behavior |
| `src/stores/` | **App state** - Global data storage | Managing app data |
| `src/types/` | **TypeScript types** - Data structures | Defining new data models |
| `src/constants/` | **Fixed data** - Disease info, crop types | Adding disease/crop data |

---

## 🛠️ Available Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Check code quality
```

### VS Code Tasks
You can also run these from VS Code:
1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
2. Type "Tasks: Run Task"
3. Select "npm: dev"

---

## 🐛 Troubleshooting

### Issue 1: `npm install` fails
**Error:** `EACCES permission denied`

**Solution:**
```bash
# Windows: Run CMD/PowerShell as Administrator
# macOS/Linux:
sudo npm install -g npm@latest
```

### Issue 2: Port 5173 already in use
**Error:** `Port 5173 is in use`

**Solution:**
```bash
# Kill the process using port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Or use a different port:
npm run dev -- --port 3000
```

### Issue 3: `node` or `npm` not recognized
**Error:** `'node' is not recognized as an internal or external command`

**Solution:**
1. Restart your terminal/command prompt
2. Verify Node.js installation path is in system PATH
3. Reinstall Node.js

### Issue 4: White screen in browser
**Solution:**
1. Check browser console (F12) for errors
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try incognito/private mode
4. Restart dev server

### Issue 5: TypeScript errors
**Error:** `Cannot find module '@/components/...'`

**Solution:**
```bash
# Restart TypeScript server in VS Code
Ctrl+Shift+P → "TypeScript: Restart TS Server"

# Or rebuild
npm run build
```

### Issue 6: Tailwind styles not working
**Solution:**
1. Check if `index.css` imports are present in `main.tsx`
2. Restart dev server
3. Clear browser cache

### Get More Help
- **VS Code Issues:** Press `F1` → "Developer: Toggle Developer Tools"
- **Node.js Issues:** Run `npm doctor`
- **Check Logs:** Look at terminal output for detailed error messages

---

## 📱 Using the Application

### First-Time Setup Flow

1. **Open** [http://localhost:5173](http://localhost:5173)
2. **Click** "Set Up Farm Profile" or navigate to `/profile`
3. **Fill in** farm details:
   - Farmer name and farm name
   - Location (Village, District)
   - Total farm size
   - Soil type
4. **Add crops** (can add multiple):
   - Select crop type (Rice, Wheat, Cotton, etc.)
   - Enter field size for this crop
   - Set planting date
   - Add expected harvest date (optional)
   - Click "Add This Crop to Farm"
5. **Save** profile
6. **Navigate** to "Scan Crop"
7. **Select** which crop to scan
8. **Upload** crop image showing disease symptoms
9. **Click** "Analyze Disease"
10. **View** AI analysis and treatment recommendations

### Main Features

| Feature | Route | Purpose |
|---------|-------|---------|
| **Home** | `/` | Landing page with overview |
| **Scan Crop** | `/scan` | Upload image for disease detection |
| **Analysis** | `/analysis/:id` | View detailed disease analysis |
| **Dashboard** | `/dashboard` | Farm health overview & trends |
| **Farm Profile** | `/profile` | Manage farm and crop information |

---

## 🎓 Learning Resources

### For React Development
- [React Official Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### For This Project
- See `README.md` for project overview
- Check `src/types/index.ts` for data structures
- Review `src/lib/ai-mock.ts` for AI logic

---

## 📞 Support

**Company:** Civora Nexus Pvt. Ltd.  
**Location:** Sangamner, Maharashtra - 422605, India  
**Contact:** +91-7350 675192  
**Program:** CivoraX Internship Program  
**Project ID:** AID103

---

## ✅ Quick Start Checklist

- [ ] Node.js installed (v18+)
- [ ] VS Code installed with recommended extensions
- [ ] Project files extracted/cloned
- [ ] `npm install` completed successfully
- [ ] `npm run dev` running without errors
- [ ] Browser opened to http://localhost:5173
- [ ] Farm profile created
- [ ] Test crop scan completed

**You're ready to develop! 🚀**
