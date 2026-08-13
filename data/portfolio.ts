export type PortfolioItem = {
  title: string;
  category: "Teardown" | "Case Study" | "PRD / Research" | "In Progress";
  driveUrl: string;
  note?: string;
};

export const portfolioItems: PortfolioItem[] = [
  { title: "TAL / Grapevine", category: "Teardown", driveUrl: "", note: "Notes on trust, memory, and language consistency in an AI talent agent." },
  { title: "BlinkMoney", category: "Teardown", driveUrl: "", note: "A teardown covering UX, compliance, and conversion." },
  { title: "Vocallabs", category: "Teardown", driveUrl: "", note: "A look at conversation quality and reliability in a voice product." },
  { title: "Flipkart", category: "Case Study", driveUrl: "" },
  { title: "LinkedIn", category: "Case Study", driveUrl: "" },
  { title: "Apple", category: "Case Study", driveUrl: "" },
  { title: "Yatra", category: "Case Study", driveUrl: "" },
  { title: "Pixxel", category: "Case Study", driveUrl: "", note: "A healthcare and space-tech case study." },
  { title: "TwinMind", category: "Teardown", driveUrl: "" },
  { title: "MPassport Seva", category: "Case Study", driveUrl: "" },
  { title: "Josh Talks", category: "Case Study", driveUrl: "" },
  { title: "Newton School", category: "Case Study", driveUrl: "" },
  { title: "CorpHire build docs", category: "In Progress", driveUrl: "", note: "The PRD, design system, and stack behind CorpHire. The Work panel has the case study." },
];
