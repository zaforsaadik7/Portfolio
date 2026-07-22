# Dynamic CMS Portfolio Website Implementation Plan

Build a dynamic, data-driven Portfolio Website based on the design in [Portfolio.png](file:///f:/CV/Portfolio.png) with a built-in Content Management System (CMS), Firebase/Supabase Database integration, Email/Password Admin Authentication, real-time CRUD operations, and 100% compatibility for deployment on **GitHub Pages**.

---

## 🏗️ Architecture & Deployment Strategy

To achieve **full database functionality + admin login + file uploads** while keeping the site **100% hostable on free GitHub Pages** (which only serves static files), we will use a serverless client-side architecture:

1. **Frontend**: Vite + React / Modern JavaScript with modular, sleek CSS matching the original UI aesthetic (glassmorphism cards, clean typography, responsive 2-column layout).
2. **Authentication**: Firebase Auth (or Supabase Auth) for secure Email/Password admin login.
3. **Database**: Firestore / Supabase Database to store and query all 13 section data dynamically in real time.
4. **File Storage**: Firebase Storage / Supabase Storage (or base64 fallback) to upload and serve Profile Photos, Cover Photos, Project Icons, and CV PDFs.
5. **Deployment**: GitHub Pages (via `gh-pages` automated script or GitHub Actions).

---

## 🔍 Section Schema Review & Recommended Missing Fields

Below is the complete breakdown of all 13 sections requested, along with **recommended extra fields** (highlighted in **bold**) to make the portfolio richer and more complete.

> [!IMPORTANT]
> **User Review Required**: Please check the additional fields suggested below for each section and confirm if you would like to include them.

---

### Section Breakdown & Schema Fields

1. **Cover Photo**
   - Upload Image file
   - **Recommended Additional Fields**: Image Alt Text, Default Cover fallback URL.

2. **Profile Photo**
   - Upload Image file
   - **Recommended Additional Fields**: Image Alt Text, Avatar shape/border styling toggle.

3. **Bio (Hero Header)**
   - Short Bio text
   - **Recommended Additional Fields**: 
     - Full Name (e.g., *Md. Emam Zafor Saadik*)
     - Primary Designation / Title (e.g., *AI Engineer & ML Researcher*)
     - Primary Location badge (e.g., *Dhaka, Bangladesh*)
     - Primary Phone badge
     - Availability Status pill (e.g., *"Available for opportunities"*)

4. **Social Media** (Replaces Contact/Message section from original UI header)
   - Social link URL
   - Add / Modify / Remove options
   - **Recommended Additional Fields**: 
     - Platform Name / Icon type (LinkedIn, GitHub, Google Scholar, Kaggle, X/Twitter, ResearchGate, etc.)
     - Custom Display Label

5. **About**
   - About paragraph / text content update
   - **Recommended Additional Fields**: Support for markdown/formatting (bold, bullet points, line breaks).

6. **Experience**
   - Position / Title
   - Company / Institute Name
   - Start Date & End Date
   - Description
   - Related Links
   - Add / Modify / Remove options
   - **Recommended Additional Fields**: 
     - *"Currently Working Here"* toggle (automatically displays *"Present"* as end date)
     - Company Logo / Icon upload

7. **Research Focus**
   - Research Title
   - Description
   - Status (e.g., *Published*, *Under Review*, *Preprint*, *In Progress*)
   - Related Link
   - Keywords / Tags
   - Add / Modify / Remove options
   - **Recommended Additional Fields**: 
     - Publication Venue / Conference / Journal (e.g. *IEEE*, *NeurIPS*, *arXiv*)
     - Publication Year / Date

8. **Engineering Projects**
   - Project Title
   - Upload Icon for the project
   - Description of the project
   - Related Link (Conditional clickability: title is clickable only if link exists)
   - Add / Modify / Remove options
   - **Recommended Additional Fields**: 
     - Secondary Link (e.g., separation between *GitHub Repository Link* and *Live Demo Link*)
     - Tech Stack Tags (e.g., *FastAPI, React, PyTorch*)

9. **Education**
   - Degree Name (e.g., *B.Sc. in Computer Science & Engineering*)
   - Institute Name (e.g., *BUBT*)
   - Result / Grade / CGPA (e.g., *CGPA: 3.85*)
   - Start Date & End Date
   - Add / Modify / Remove options
   - **Recommended Additional Fields**: 
     - Department / Major
     - Key Highlights / Honors (e.g. *Dean's Honor List*)

10. **Technical Skill Stack**
    - Skill Title / Name
    - Keywords / Skill pills
    - Add / Modify / Remove options
    - **Recommended Additional Fields**: 
      - Skill Category (e.g., *Languages*, *Machine Learning & AI*, *Data Science Tools*, *Backend & Cloud* as seen in your UI mockup) for structured grouping.

11. **Research Interests**
    - Interested Sectors / Topics (e.g., *NLP*, *Computer Vision*, *Generative AI*, *RAG*)
    - Add / Modify / Remove options
    - **Recommended Additional Fields**: Re-ordering priority / drag-and-drop index.

12. **Contact Details**
    - Email Address
    - Phone Number
    - Location (supports adding multiple contact entries)
    - Add / Modify / Remove options
    - **Recommended Additional Fields**: 
      - Expected Response Time note (e.g., *"Response time: ~24 hours"*)

13. **Download CV**
    - File upload (PDF format)
    - Download link generation for public visitors
    - Add / Modify / Remove / Re-upload options
    - **Recommended Additional Fields**: 
      - Button Label text (e.g., *"Download CV"*), Last Updated date stamp.

---

## 🔐 Admin Authentication & Edit Mode Flow

1. **Public View**: Visitors see a clean, read-only version of the portfolio populated directly from the database. A discrete "Admin Login" link/icon appears in the header or footer.
2. **Login Modal**: Simple popup modal prompting for Admin Email & Password.
3. **Admin Edit View**:
   - Once authenticated, an "Admin Mode Active" banner appears at the top.
   - Every section item gains an edit hover state with an **Edit (✏️)** icon and **Delete (🗑️)** icon.
   - Top of each section features an **"+ Add New"** button.
   - Clicking any edit/add button opens an intuitive Modal Form pre-filled with existing data.
   - Uploading files (Photos/CV PDF) updates the cloud storage automatically.
   - Changes sync to the database instantly and reflect on the live page without requiring page reloads.

---

## 📋 Proposed Implementation Steps

### Phase 1: Foundation & Design System
- Setup Vite + React application in `f:\CV`.
- Build the responsive layout matching [Portfolio.png](file:///f:/CV/Portfolio.png) (Cover photo, overlap avatar, left 2/3 column, right 1/3 column, header, footer).
- Configure CSS tokens (font styles, colors, badges, pills, cards).

### Phase 2: Backend Integration & Database Schema
- Connect Firebase/Supabase project keys.
- Create database data fetching layer & seed default content matching the current design data.

### Phase 3: Admin Auth & CRUD Modals
- Build Admin Auth state listener & Login Modal.
- Build reusable CRUD Form Modals for all 13 sections with file upload handling.

### Phase 4: GitHub Pages Deployment setup
- Add `gh-pages` deployment pipeline.
- Verify production build & live database sync.

---

## 🧪 Verification Plan

### Automated Verification
- Verify build passes clean without syntax errors or missing dependencies (`npm run build`).

### Manual Verification
- Test public visitor view (read-only, downloadable CV, clickable project/research links).
- Test admin login with email/password.
- Test adding, editing, and deleting items across all 13 sections.
- Test image and PDF uploads.
- Test responsiveness across desktop and mobile screen sizes.
