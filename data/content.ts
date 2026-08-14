export const hero = {
  name: "Aditya Prakash",
  role: "Product Builder | AI, Product, and Tech",
  tagline: "I spot a problem, make a first version, and learn from what happens next.",
  proofPoints: ["CSE to Product", "CorpHire from scratch", "NoKasa launch", "Hands-on builder"],
  ctaPrimary: { label: "Explore my work", href: "#work" },
  ctaSecondary: { label: "Resume", href: "/resume.pdf" },
  exploreLabel: "Touch stuff. It actually does things. ↓",
};

export const about = {
  heading: "CSE by degree. Product by choice.",
  paragraphs: [
    "I enjoy taking an unclear problem, getting to the useful part of it, and making something people can actually try.",
    "I grew up in a military family and moved often. Getting used to new people, places, and incomplete information early on has helped me stay calm when a product problem is still taking shape.",
  ],
  links: {
    x: "https://x.com/Adi_03_02",
    linkedin: "https://www.linkedin.com/in/adityaprakash0302/",
    github: "https://github.com/AdityaPrakash-03",
    email: "prakashaditya061@gmail.com",
  },
};

export const toolbox = {
  categories: [
    { label: "Think", items: ["Product Strategy", "User Research", "PRDs", "Metrics", "Prioritization"] },
    { label: "Build", items: ["Claude", "Cursor", "Lovable", "Antigravity", "Flutter", "Python"] },
    { label: "Ship", items: ["Figma", "Jira", "Git", "REST APIs", "Supabase", "SQL"] },
  ],
  toolUsage: {
    Claude: "Used for CorpHire research, PRD drafts, and early prototypes.",
    Lovable: "Used to build the first CorpHire MVP.",
    Antigravity: "Used to keep CorpHire specs and task context in one place.",
    Figma: "Used to turn product ideas into clear UI at NoKasa.",
  } as Record<string, string>,
};

export const corphire = {
  title: "CorpHire",
  hook: "One profile instead of the same form over and over.",
  liveUrl: "https://corphire.lovable.app",
  loomUrl: "https://www.loom.com/share/0d48d52f2ecd42c9b6e45db75464fe8f",
  problem: {
    label: "Problem",
    text: "Job seekers keep entering the same details on different application portals. Recruiters face their own version of the problem. They search LinkedIn, message people one by one, check if they are interested, and send interview links separately. Both sides spend too much time doing repeat work.",
  },
  insight: {
    label: "Insight",
    text: "A candidate should not have to rebuild their profile for every role. If their information lives in one structured profile, recruiters can search for the right fit and contact them directly. One solid profile can save a lot of repeated forms.",
  },
  decision: {
    label: "Decision",
    text: "I built CorpHire as a reverse marketplace. Candidates make one listing. Recruiters can browse, filter, and unlock contact details without cold outreach or a separate scheduling loop.",
  },
  build: {
    label: "Build",
    text: "I wrote the PRD, set up the design system, and chose the stack before writing code. I built the MVP in under three days with Lovable, Claude, and Google Antigravity.",
    stack: ["Lovable", "Claude", "Google Antigravity"],
  },
  iterate: {
    label: "Iterate",
    text: "I watched people use the product and noted where they got stuck. Then I changed the flow based on what failed in the session, not only on what people said afterward.",
  },
};

export const experience = [
  {
    company: "NoKasa",
    role: "Software Development Intern",
    dates: "May 2025 to June 2025",
    summary: "Worked on features during launch week, with real users using the product from the start.",
    details: [
      "Worked with engineering and design to keep releases aligned with product goals across Agile sprints.",
      "Built Figma designs into UI and folded customer feedback into later iterations.",
      "Discussed scope, tradeoffs, and success measures for new feature modules.",
      "Investigated bugs quickly and helped ship fixes during a busy launch period.",
    ],
  },
];

export type ThinkScenario = {
  prompt: string;
  options: { label: string; isCorrect?: boolean }[];
  reveal: string;
};

export const thinkScenarios: ThinkScenario[] = [
  {
    prompt: "Users are leaving at an important step. What would you do first?",
    options: [
      { label: "Redesign the screen" },
      { label: "Add a feature to help" },
      { label: "Find the step where they leave and why", isCorrect: true },
    ],
    reveal: "I would start with the evidence. Before changing the UI, I would find the exact drop-off point and speak to users. A redesign without the cause is still just a guess.",
  },
  {
    prompt: "A founder wants a feature tomorrow, but you have limited data.",
    options: [
      { label: "Ship exactly what was asked" },
      { label: "Wait until there is more data" },
      { label: "Ship the smallest version that can test the idea", isCorrect: true },
    ],
    reveal: "I would cut it down to the smallest version that tests the actual assumption. That gets a real signal quickly without pretending the first version is final.",
  },
  {
    prompt: "Users like a feature, but it is creating more support tickets.",
    options: [
      { label: "Remove the feature" },
      { label: "Ignore the tickets because users like it" },
      { label: "Find the cause of the tickets and fix that", isCorrect: true },
    ],
    reveal: "A feature can be useful and still be confusing in one place. I would look at the tickets first. Often the problem is missing guidance or an edge case, not the feature itself.",
  },
];

export const finalCta = {
  heading: "Have a problem worth untangling?",
  text: "I like getting to the real issue, making a useful first version, and learning from it.",
  ctaLabel: "Let's talk",
  email: "prakashaditya061@gmail.com",
};
