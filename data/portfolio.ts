export type PortfolioItem = {
  title: string;
  category: "Teardown" | "Case Study" | "Competitive Analysis" | "PRD / Research" | "In Progress";
  driveUrl: string;
  note?: string;
};

export const portfolioItems: PortfolioItem[] = [
  { title: "TAL / Grapevine", category: "Teardown", driveUrl: "https://docs.google.com/document/d/1lG7w6ZAGpl9lwH40UDyxhw3Fh0og5YCj/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true", note: "Notes on trust, memory, and language consistency in an AI talent agent." },
  { title: "BlinkMoney", category: "Teardown", driveUrl: "https://docs.google.com/document/d/1zJzS0G5vVO5jQOTY5Cqwdm0UR02jqIa5/edit?usp=sharing&ouid=105528318561955754122&rtpof=true&sd=true", note: "A teardown covering UX, compliance, and conversion." },
  { title: "Vocallabs", category: "Teardown", driveUrl: "https://docs.google.com/document/d/1Pon0OtH-EO1PFkILNV17U-Bqig27qEZK/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true", note: "A look at conversation quality and reliability in a voice product." },
  { title: "Flipkart", category: "Case Study", driveUrl: "https://docs.google.com/document/d/1IurAao6pYjY1UFHa09I7rsFO9P4rrpl6/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true" },
  { title: "LinkedIn", category: "Case Study", driveUrl: "https://drive.google.com/drive/folders/1FoKCieLOZYUqCYj7ZdcQNJsRMMMVDxnI?usp=drive_link" },
  { title: "Apple", category: "Case Study", driveUrl: "https://docs.google.com/document/d/16DC9gRCA1bS7_p9QNloH_nOfmG2azQ5l-89d2RIywzU/edit?usp=drive_link" },
  { title: "Yatra", category: "Case Study", driveUrl: "https://drive.google.com/drive/folders/1Afr9gvcUcc3kTM_XtmqhIV40mKgBAn2v?usp=sharing" },
  { title: "Pixxel", category: "Case Study", driveUrl: "https://drive.google.com/drive/folders/1i5Eoomn8xW0zNKewfFNeBSXaUDDIm13U?usp=sharing", note: "A healthcare and space-tech case study." },
  { title: "TwinMind", category: "Teardown", driveUrl: "https://drive.google.com/drive/folders/1I1oyouHFoRVhPw5iPa53HUf77kH5annP?usp=sharing" },
  { title: "MPassport Seva", category: "Case Study", driveUrl: "https://drive.google.com/file/d/1WP6CbNMvaSUPg1w7DPAyIdkS9Gmq5pb9/view?usp=sharing" },
  { title: "Josh Talks", category: "Case Study", driveUrl: "https://drive.google.com/drive/folders/1Qxt87CDQkMZnlHOPI5feqMlmKfi0kV3S?usp=sharing" },
  { title: "Newton School", category: "Competitive Analysis", driveUrl: "https://docs.google.com/document/d/1q5HhBxSla2xYUm1yaywdzAKoWNbMzQ0b/edit?usp=sharing&ouid=105528318561955754122&rtpof=true&sd=true" },
  { title: "CorpHire build docs", category: "In Progress", driveUrl: "https://drive.google.com/drive/folders/1kr91IG-EPZZ_C2y8NcKBfRn07P_suPdv?usp=sharing", note: "The PRD, design system, and stack behind CorpHire. The Work panel has the case study." },
];
