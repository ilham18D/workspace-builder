# 🧩 Workspace Builder – Challenge

## 📌 Overview

This project is an interactive **Workspace Builder web application** built as part of the challenge.

The goal is to provide a visual and engaging experience where users can design their ideal workspace setup by selecting desks, chairs, and accessories — and instantly see their configuration update in real time.

The application focuses on clean architecture, modular components, scalable state management, and responsive design.

---

## 🚀 Live Demo

🔗 **Live URL:**  
https://workspace-builder-rho.vercel.app

---

## 🛠 Tech Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Zustand (State Management)**
- **Vercel (Deployment)**

---

## 🎯 Features

- Select from multiple desk options
- Select from multiple chair options
- Add / remove accessories
- Real-time workspace preview updates
- Toggle behavior (click again to unselect)
- Dynamic summary panel with total price calculation
- Responsive 3-column layout:
  - Select Your Items
  - Design Your Workspace
  - Your Setup Summary
- Automatic deployment via GitHub + Vercel

---

## 🎨 Visual Implementation

This implementation uses **custom SVG-based dummy assets** to simulate furniture visuals for:

- Desks
- Chairs
- Accessories (monitor, lamp, plant, laptop, etc.)

These SVG components are dynamically layered inside a preview canvas to mimic a workspace layout.

The SVG approach was chosen to:

- Keep the project lightweight
- Avoid dependency on external image hosting
- Maintain full control over scaling and styling
- Focus on layout logic and state management

The architecture allows seamless replacement of SVG assets with real product images in future iterations.

---

## 🧠 State Management

Global state is handled using **Zustand** with the following structure:

{
desk: Product | null
chair: Product | null
accessories: Product[]
}

Behavior logic:

- Desk and Chair use toggle selection logic
- Accessories can be added or removed dynamically
- Clear Workspace resets the entire configuration

---

## 📂 Project Structure

app/
components/
store/
data/


The project follows a modular architecture separating:

- Routing & layout (App Router)
- UI components
- Global state management
- Data models

---
## ⚙️ Installation & Development

- Install dependencies:
 yarn install
- Run development server:
yarn dev
- Build for production:
yarn build
- Run production server locally:
yarn start
---

## 🔄 Deployment

This project is deployed using **Vercel**.

Every push to the `main` branch automatically triggers a new deployment.

---

# 🚀 Future Improvements

While the current implementation fulfills the challenge requirements, the following enhancements could elevate the experience:

### 1️⃣ Replace SVG with Real Product Assets
- Integrate real product images from monis.rent
- Use PNG transparent assets
- Improve visual realism

### 2️⃣ Drag & Drop Interaction
- Allow repositioning accessories
- Enhance configurator experience

### 3️⃣ 3D Workspace Experience
- Integrate WebGL / Three.js
- Create immersive workspace simulation

### 4️⃣ Save & Share Setup
- Persist configuration
- Generate shareable workspace links

### 5️⃣ Rental Duration & Dynamic Pricing
- Add rental period selector
- Calculate total pricing based on duration

### 6️⃣ Backend Integration
- Connect to real product inventory
- Implement checkout flow

---

## 📈 Architectural Vision

This project is structured as a scalable foundation for a future workspace configurator platform.  
The modular design makes it easy to:

- Expand product categories
- Replace mock data with real API integration
- Add authentication
- Implement payment processing

---
