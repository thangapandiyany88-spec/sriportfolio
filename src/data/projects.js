/**
 * SRIHARAN M. PORTFOLIO — PROJECT DATASET
 * 
 * Centralized repository of visual projects.
 * Powered by Sriharan M.'s unique production video files.
 */

export const PROJECTS = [
  {
    id: 1,
    title: "Sriharan's Practice Edit #1 — Cinematic Cut",
    category: "CINEMATIC",
    description: "Atmospheric narrative edit emphasizing speed ramping, precise color grading, and dynamic music synchronization.",
    thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/cinematic.mp4",
    software: ["DaVinci Resolve"],
    techniques: ["Colour Grading", "Speed Ramping", "Sound Design"],
    featured: true
  },
  {
    id: 2,
    title: "Creative Visual Cut — Category 1",
    category: "PROMOTIONAL",
    description: "Sleek promotional visual project featuring crisp close-ups, clean pacing, and color grading.",
    thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383592e?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/promotional.mp4",
    software: ["DaVinci Resolve", "CapCut"],
    techniques: ["Motion Graphics", "Color Grading", "Pacing"],
    featured: true
  },
  {
    id: 3,
    title: "Social Media Reel Cut — 0906",
    category: "REELS",
    description: "Fast-paced social media short-form video edit optimized for high engagement and smooth visual flow.",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/reels.mp4",
    software: ["CapCut"],
    techniques: ["Fast Cuts", "Beat Sync", "Speed Ramping"],
    featured: true
  },
  {
    id: 4,
    title: "Timeless Moments — Wedding Showcase",
    category: "WEDDING",
    description: "Emotional wedding highlight edit combining handheld camera work with warm color palettes and romantic pacing.",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/wedding-highlight.mp4",
    software: ["DaVinci Resolve"],
    techniques: ["Color Correction", "Storytelling", "Audio Mixing"],
    featured: true
  },
  {
    id: 5,
    title: "Cinematic Mood & Tone Study",
    category: "CINEMATIC",
    description: "Deep color contrast visual edit exploring creative camera angles and cinematic movement.",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/cinematicmood.mp4",
    software: ["DaVinci Resolve"],
    techniques: ["Cinematic Grading", "Speed Ramping", "Framing"],
    featured: false
  },
  {
    id: 6,
    title: "Dynamic Beat & Transition Cut",
    category: "REELS",
    description: "Rhythmic video cut synchronized to music with dynamic transitions and speed ramping.",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80",
    videoType: "local",
    videoUrl: "/videos/dynamicbeat.mp4",
    software: ["CapCut", "DaVinci Resolve"],
    techniques: ["Transitions", "Music Sync", "Export"],
    featured: false
  },
  {
    id: 7,
    title: "Full Master Vault — Google Drive Collection",
    category: "PHOTOGRAPHY",
    description: "Complete raw and finalized video & photo portfolio stored in Sriharan M.'s official Google Drive vault.",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    videoType: "drive",
    videoUrl: "https://drive.google.com/drive/folders/1PA1XJM46ZComYXFzsQFXhGbj3Yop8wIe",
    software: ["DaVinci Resolve", "CapCut", "Adobe Lightroom"],
    techniques: ["Mastering", "4K Rendering", "Photo Retouching"],
    featured: true
  }
];

export const CATEGORIES = [
  "ALL",
  "REELS",
  "CINEMATIC",
  "WEDDING",
  "PROMOTIONAL",
  "PHOTOGRAPHY"
];

export const SHOWREEL_CONFIG = {
  title: "SHOWREEL 2026",
  subtitle: "Urban Motion — A showcase of Sriharan M.'s fast-paced, high-octane editing and visual storytelling.",
  videoType: "local",
  videoUrl: "/videos/showreel.mp4",
  fallbackText: "SHOWREEL COMING SOON"
};
