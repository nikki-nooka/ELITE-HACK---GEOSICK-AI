# GeoSick: AI-Powered Environmental Health Intelligence

**Translating complex environmental data into clear, actionable health intelligence to empower communities and preempt public health threats.**

---

## 🌍 Idea Description

### What problem are you solving?
GeoSick addresses the critical gap between environmental factors and individual health. Many health issues are triggered or exacerbated by environmental hazards (pollution, stagnant water, UV radiation) that often go unnoticed. Additionally, healthcare accessibility remains a challenge for many, leading to delayed diagnoses and preventable complications.

### Who is the target audience?
Our platform is designed for health-conscious individuals, families, and communities, particularly those living in areas with high environmental variability or limited immediate access to medical professionals.

### Why does this problem matter?
Early detection of both environmental hazards and personal symptoms can significantly reduce the severity of illnesses, lower healthcare costs, and save lives. By preempting public health threats, we empower users to take proactive control of their well-being.

### What makes your solution unique?
GeoSick combines real-time environmental analysis with personal health tools:
*   **AI Area Scan:** Uses multimodal AI to identify health hazards from simple photos.
*   **Advanced Symptom Checker:** Powered by Gemini 3.1 Pro, providing detailed triage, potential conditions, and educational video links.
*   **Direct Integration:** Seamlessly bridges the gap between AI analysis and professional care through direct Google Form appointment scheduling and real-time hospital mapping.

---

## 🚀 Key Features

### 1. Interactive 3D Globe Explorer
*   **Visual Exploration:** A high-fidelity 3D globe (`react-globe.gl`) for global health monitoring.
*   **City Health Snapshots:** Real-time public health reports using Gemini Search Grounding.
*   **Location Analysis:** Localized hazard reports and biome visualizations using **Imagen 4.0**.

### 2. AI Analysis Suite
*   **📸 Area Scan (Image Analysis):** Identifies potential health hazards from user-uploaded photos.
*   **🩺 Symptom Checker:** Detailed analysis using **Gemini 3.1 Pro** with triage recommendations and educational resources.
*   **📜 Prescription Reader:** Extracts medicine data and precautions from prescription images.
*   **🧠 Mental Wellness Check-in:** Compassionate AI-driven mental health support.

### 3. Real-Time Health Intelligence
*   **HealthCast:** Daily location-based health forecasts (Air Quality, UV, Pollen).
*   **Live Health Alerts:** Aggregates global health threats via Google Search Grounding.
*   **Facility Finder:** Locates nearby medical facilities with real-time mapping.

### 4. Personal Health Utilities
*   **📅 Schedule Checkup:** Direct integration with official appointment forms via Google Forms.
*   **💧 Water Log:** Hydration tracking with browser notifications.
*   **Activity History:** Secure log of all AI analyses and health checks.

---

## 🛠 Technical Details

### Technologies Used
*   **Frontend:** React 19, TypeScript, Tailwind CSS, Framer Motion.
*   **Backend:** Express.js (Node.js) running in a full-stack environment.
*   **AI/ML:** 
    *   **Google Gemini API:** `gemini-3.1-pro-preview` (Advanced Reasoning), `gemini-flash-latest` (Multimodal).
    *   **Imagen 4.0:** High-quality image generation for biome visualization.
    *   **Search Grounding:** Real-time web data integration.
*   **Database:** **Supabase (PostgreSQL)** for secure user authentication and profile management.
*   **Visualization:** `react-globe.gl`, `three.js`, `recharts`.
*   **Third-party Integrations:** Google Forms (Appointments), Google Maps (Grounding).

---

## 🔗 Submission Links

*   **GitHub Repository:** [https://github.com/nikki-nooka/ELITE-HACK---GEOSICK-AI]([https://github.com/nookanikshith/geosick](https://github.com/nikki-nooka/ELITE-HACK---GEOSICK-AI)
*   **Live Demo / Deployed Link:** [https://ais-pre-anglbbbfgd3spbgxle2zjs-656041840677.asia-southeast1.run.app](https://ais-pre-anglbbbfgd3spbgxle2zjs-656041840677.asia-southeast1.run.app)
*   **Prototype / Figma / PPT Link:** [View Project Presentation](https://docs.google.com/presentation/d/your-link-here)

---

## 🎥 Demo & Pitch

*   **Demo Video (Walkthrough):** [Watch Demo](https://youtube.com/your-demo-link)
*   **Pitch Video (Impact & Vision):** [Watch Pitch](https://youtube.com/your-pitch-link)

---

## 📦 Installation & Setup

1.  **Clone & Install**
    ```bash
    git clone https://github.com/nookanikshith/geosick.git
    npm install
    ```

2.  **Environment Setup**
    Create a `.env` file:
    ```env
    GEMINI_API_KEY=your_key
    SUPABASE_URL=your_supabase_url
    SUPABASE_ANON_KEY=your_supabase_key
    ```

3.  **Run**
    ```bash
    npm run dev
    ```

---

## 🔐 Admin Access
*   **Email:** `nookanikshithllpsdsnr@gmail.com`
*   **Password:** `nooka@nikki123`

---

## ⚠️ Medical Disclaimer
GeoSick is an informational tool powered by AI and is **NOT** a substitute for professional medical advice. In case of emergency, contact local services immediately.

