// Groups are the rows on the key board, in display order.
const GROUPS = [
  { id: "shared", name: "Shared" },
  { id: "play", name: "Play" },
  { id: "tools", name: "Tools" },
  { id: "work", name: "Work" },
];

const APPS = [
  {
    name: "Japan Trip Planner",
    url: "https://japan-trip-planner-2026.web.app",
    description: "Trip planning for Sept 15–Oct 3, 2026, shared with my travel partner.",
    icon: "🗾",
    group: "shared",
  },
  {
    name: "Touch Type Trainer",
    url: "https://touch-type-trainer.web.app",
    description: "Progressive touch-typing lessons with finger-position coaching.",
    icon: "⌨️",
    group: "tools",
  },
  {
    name: "Protagonist Method",
    url: "https://therealmenace10040.github.io/protagonist-method-app/",
    description: "A 90-day personal-development tracker.",
    icon: "🎯",
    group: "tools",
  },
  {
    name: "Capybara Todo",
    url: "https://to-do-list-d6b2c.web.app",
    description: "Shared to-do list with Ramila.",
    icon: "🦫",
    group: "shared",
  },
  {
    name: "Literary Lumineers",
    url: "https://literary-lumineers.web.app",
    description: "Shared book ratings with Isabelle.",
    icon: "📚",
    group: "shared",
  },
  {
    name: "Job Thirsty",
    url: "https://job-streak-app.web.app",
    description: "Shared daily job-application check-in with Michelle.",
    icon: "🔥",
    group: "shared",
  },
  {
    name: "Resume Tailor",
    url: "https://resume-tailor-swart.vercel.app",
    description: "Tailors your resume to a job posting using AI, generates a PDF.",
    icon: "📄",
    group: "tools",
  },
  {
    name: "Dennis Nguyen",
    url: "https://therealmenace10040.github.io/dennis-nguyen-site/",
    description: "Personal portfolio site — developer, data analyst, microbiologist.",
    icon: "🧬",
    group: "work",
  },
  {
    name: "MicroBio Valve Hub",
    url: "https://therealmenace10040.github.io/microbio-valve-hub/",
    description: "Research reader for microbiology in heart-valve medical devices — search, filter, and save papers.",
    icon: "🫀",
    group: "work",
  },
  {
    name: "Trivia Rush",
    url: "https://therealmenace10040.github.io/trivia-rush/",
    description: "Mobile trivia game — 10 categories, live Open Trivia DB questions, streak combo scoring.",
    icon: "❓",
    group: "play",
  },
  {
    name: "Tome & Table",
    url: "https://therealmenace10040.github.io/dnd-character-tracker/",
    description: "D&D 5e character creator and tracker — build a character, then manage HP, spells, and inventory.",
    icon: "🎲",
    group: "play",
  },
  {
    name: "DexVR",
    url: "https://dexvr-app.web.app",
    description: "VR games trends dashboard — live player counts, aggregated news, and mod tracking.",
    icon: "🥽",
    group: "play",
  },
  {
    name: "Deadlock Improvement Tracker",
    url: "https://deadlock-improvement-tracker.vercel.app",
    description: "Tracks tips, mastery progress, and post-game notes for Deadlock.",
    icon: "🎮",
    group: "play",
  },
  {
    name: "California AV Collision Dataset",
    url: "https://therealmenace10040.github.io/av-collision-dataset/",
    description: "Every California robotaxi crash report (DMV + NHTSA) in one searchable dataset.",
    icon: "🚗",
    group: "work",
  },
];

const escape = (s) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// Hook numbers are row then position (Play's second key is 22), so adding
// an app to the end of a row never renumbers the others.
function renderApps() {
  const board = document.getElementById("app-grid");
  const known = new Set(GROUPS.map((g) => g.id));
  const rows = GROUPS.map((g) => ({ ...g, apps: APPS.filter((a) => a.group === g.id) }));
  const strays = APPS.filter((a) => !known.has(a.group));
  if (strays.length) rows.push({ id: "other", name: "Other", apps: strays });

  board.innerHTML = rows
    .filter((row) => row.apps.length)
    .map(
      (row, r) => `
    <section class="row row--${row.id}" id="${row.id}" aria-labelledby="${row.id}-h">
      <h2 id="${row.id}-h">${row.name}</h2>
      <ul class="hooks">
        ${row.apps
          .map((app, i) => {
            const num = `${r + 1}${i + 1}`;
            return `<li><a class="fob" data-key="${num}" href="${escape(app.url)}" target="_blank" rel="noopener noreferrer">
            <span class="fob-num" aria-hidden="true">${num}</span>
            <span class="fob-name">${escape(app.name)}</span>
            <span class="fob-desc">${escape(app.description)}</span>
          </a></li>`;
          })
          .join("")}
      </ul>
    </section>`
    )
    .join("");

  document.getElementById("index").innerHTML = rows
    .filter((row) => row.apps.length)
    .map((row) => `<a class="tab tab--${row.id}" href="#${row.id}">${row.name}</a>`)
    .join("");
  document.getElementById("count").textContent = `${APPS.length} keys`;
}

// Restart the swing even if the fob is mid-swing.
function swing(fob) {
  fob.classList.remove("is-swinging");
  void fob.offsetWidth;
  fob.classList.add("is-swinging");
}

document.addEventListener("pointerdown", (e) => {
  const fob = e.target.closest(".fob");
  if (fob) swing(fob);
});
document.addEventListener("animationend", (e) => e.target.classList.remove("is-swinging"));

// Desktop: type a fob's two-digit number to open it.
function listenForKeys() {
  let typed = "";
  let timer;
  const arm = () =>
    document.querySelectorAll(".fob").forEach((f) => {
      f.classList.toggle("is-armed", typed !== "" && f.dataset.key.startsWith(typed));
    });
  const reset = () => {
    typed = "";
    arm();
  };

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === "Escape") return reset();
    if (!/^[0-9]$/.test(e.key)) return;
    typed += e.key;
    clearTimeout(timer);
    const fob = document.querySelector(`.fob[data-key="${typed}"]`);
    if (fob && typed.length === 2) {
      swing(fob);
      window.open(fob.href, "_blank", "noopener");
      return reset();
    }
    if (typed.length >= 2 || !document.querySelector(`.fob[data-key^="${typed}"]`)) return reset();
    arm();
    timer = setTimeout(reset, 1500);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderApps();
  listenForKeys();
});
