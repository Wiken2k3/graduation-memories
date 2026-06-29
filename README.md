# 🌸 Memory Wall

> A minimal, Apple-inspired graduation memory experience built with Next.js.

---

## ✨ Overview

**Memory Wall** is a digital scrapbook that preserves graduation memories through a clean, emotional, and editorial interface.

Each “friend” is represented as a Polaroid card — containing:
- Portrait image
- Personal message
- Photo gallery
- Lightbox experience

This project focuses on **emotion over complexity**, inspired by Apple’s design language.

---

## 🧠 Concept

Instead of building a traditional gallery website, Memory Wall is designed as:

> A place where memories feel like physical objects.

Each interaction mimics:
- flipping through a photo album
- reading a handwritten letter
- opening a memory drawer

---

## 🧱 Features

### 🖼 Memory Wall
- Polaroid-style card grid
- Smooth hover interactions
- Live search filtering
- Result counter (X / Y)

### 🔍 Search Experience
- Instant filtering by name
- Clean minimalist input
- Soft focus interaction

### 👤 Friend Detail Page
Each friend page includes:
- Hero section (portrait + name highlight)
- Personal message (letter-style layout)
- Photo gallery (editorial grid)

### 🖼 Lightbox Gallery
- Fullscreen image viewer
- Keyboard navigation (← → ESC)
- Click outside to close
- Image download support
- Counter (01 / 12 style)

---

## 🎨 Design System

Inspired by Apple editorial / iOS Photos:

### Colors
- Background: `#F5F1E6`
- Surface: `#FFFDF8`
- Primary: `#7298C7`
- Accent: `#F3D98F`
- Border: `#ECE6DA`

### Design Principles
- Soft shadows instead of harsh borders
- Large whitespace (breathing space)
- Minimal UI noise
- Subtle hover motion
- Typography-first layout

---

## ⚙️ Tech Stack

- ⚡ Next.js (App Router)
- ⚛️ React + TypeScript
- 🎨 Tailwind CSS
- 🖼 Next/Image Optimization

---

## 📁 Project Structure
app/
features/
components/
data/
public/


### Key modules:
- `features/landing` → Home page (Hero, Memory Wall)
- `features/friend` → Friend detail page system
- `hooks/useLightbox` → gallery interaction logic
- `data/friends.ts` → mock data source

---

## 💡 Philosophy

> “A website doesn’t always need to be complex — sometimes it just needs to feel alive.”

This project prioritizes:
- Emotion
- Spacing
- Memory storytelling
- Gentle interaction

---

## 🖼 Preview

> Add screenshots here

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```
Open:
```
http://localhost:3000
```
## 📌 Future Improvements
Swipe gesture (mobile gallery)
Page transition animations
Background ambient music
Parallax scrolling hero
Personalized friend pages (AI-generated messages)
🧑‍💻 Author

Built with care as a graduation memory project.
