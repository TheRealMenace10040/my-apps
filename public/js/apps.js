const APPS = [
  {
    name: "Japan Trip Planner",
    url: "https://japan-trip-planner-2026.web.app",
    description: "Trip planning for Sept 15–Oct 3, 2026, shared with my travel partner.",
    icon: "🗾",
  },
  {
    name: "Touch Type Trainer",
    url: "https://touch-type-trainer.web.app",
    description: "Progressive touch-typing lessons with finger-position coaching.",
    icon: "⌨️",
  },
  {
    name: "Protagonist Method",
    url: "https://therealmenace10040.github.io/protagonist-method-app/",
    description: "A 90-day personal-development tracker.",
    icon: "🎯",
  },
  {
    name: "Capybara Todo",
    url: "https://to-do-list-d6b2c.web.app",
    description: "Shared to-do list with Ramila.",
    icon: "🦫",
  },
  {
    name: "Literary Lumineers",
    url: "https://literary-lumineers.web.app",
    description: "Shared book ratings with Isabelle.",
    icon: "📚",
  },
  {
    name: "Job Thirsty",
    url: "https://job-streak-app.web.app",
    description: "Shared daily job-application check-in with Michelle.",
    icon: "🔥",
  },
  {
    name: "Resume Tailor",
    url: "https://resume-tailor-swart.vercel.app",
    description: "Tailors your resume to a job posting using AI, generates a PDF.",
    icon: "📄",
  },
  {
    name: "Dennis Nguyen",
    url: "https://therealmenace10040.github.io/dennis-nguyen-site/",
    description: "Personal portfolio site — developer, data analyst, microbiologist.",
    icon: "🧬",
  },
  {
    name: "MicroBio Valve Hub",
    url: "https://therealmenace10040.github.io/microbio-valve-hub/",
    description: "Research reader for microbiology in heart-valve medical devices — search, filter, and save papers.",
    icon: "🫀",
  },
  {
    name: "Trivia Rush",
    url: "https://therealmenace10040.github.io/trivia-rush/",
    description: "Mobile trivia game — 10 categories, live Open Trivia DB questions, streak combo scoring.",
    icon: "❓",
  },
  {
    name: "Tome & Table",
    url: "https://therealmenace10040.github.io/dnd-character-tracker/",
    description: "D&D 5e character creator and tracker — build a character, then manage HP, spells, and inventory.",
    icon: "🎲",
  },
  {
    name: "DexVR",
    url: "https://dexvr-app.web.app",
    description: "VR games trends dashboard — live player counts, aggregated news, and mod tracking.",
    icon: "🥽",
  },
  {
    name: "Deadlock Improvement Tracker",
    url: "https://deadlock-improvement-tracker.vercel.app",
    description: "Tracks tips, mastery progress, and post-game notes for Deadlock.",
    icon: "🎮",
  },
];

function renderApps() {
  const grid = document.getElementById("app-grid");
  grid.innerHTML = APPS.map(
    (app) => `
    <a class="card" href="${app.url}" target="_blank" rel="noopener noreferrer">
      <span class="card-icon">${app.icon}</span>
      <h2 class="card-title">${app.name}</h2>
      <p class="card-desc">${app.description}</p>
    </a>
  `
  ).join("");
}

document.addEventListener("DOMContentLoaded", renderApps);
