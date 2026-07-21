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
