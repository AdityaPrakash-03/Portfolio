export type PortfolioItem = {
  title: string;
  category: "Product Strategy" | "Product Note" | "Product Teardown" | "Product Exploration" | "Market Entry Analysis" | "Product Life Cycle Study" | "Product Design" | "Case Study" | "Product Audit" | "Competitive Analysis" | "Product Build";
  driveUrl: string;
  overview: string;
  readingOptions?: {
    label: string;
    description: string;
    url: string;
  }[];
};

export const portfolioItems: PortfolioItem[] = [
  { title: "Ola Family Mobility", category: "Product Strategy", driveUrl: "https://drive.google.com/file/d/1aELeLeQoAOe0Gy45mNsjkZ_O3tbiZ4p5/view?usp=sharing", overview: "A 2035 family mobility plan that replaces a parent’s daily coordination work with one shared account, trip agent, and confirmed child handoffs. It tests trust, route density, and unit economics before city-by-city scale." },
  { title: "LinkedIn Jobs", category: "Product Note", driveUrl: "https://drive.google.com/drive/folders/1FoKCieLOZYUqCYj7ZdcQNJsRMMMVDxnI?usp=drive_link", overview: "A post-application workspace that keeps the job description, resume, research, and interview notes together on the company page. It turns scattered preparation into one useful next-step view." },
  { title: "Flipkart Minutes", category: "Product Note", driveUrl: "https://docs.google.com/document/d/1IurAao6pYjY1UFHa09I7rsFO9P4rrpl6/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A late-night product observation: delivery can be closed without shutting down browsing, search, or cart building. The proposal keeps shopper intent alive for the next available delivery slot." },
  { title: "VectorShift", category: "Product Exploration", driveUrl: "https://prompt-to-product-vectorshift.vercel.app/", overview: "A prototype that starts with a user’s goal and turns it into a testable AI workflow. The flow makes the generated product easier to review, edit, and understand before it is used." },
  { title: "Visiblie", category: "Product Exploration", driveUrl: "https://visibliememo.vercel.app/", overview: "A recommendation layer that explains why an AI surfaced a competitor and what the user can do next. It makes an opaque result more useful for a marketer making a product decision." },
  { title: "Hair Healthcare", category: "Market Entry Analysis", driveUrl: "https://docs.google.com/presentation/d/1WcamHpg8gjGHaOtcxTzkHUYAdIC2dbNt/edit?usp=sharing&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A US hair-loss telehealth market-entry assessment that looks beyond acquisition to treatment adherence. It identifies the user, market conditions, and product levers needed to help patients stay on care long enough to see results." },
  { title: "TAL / Grapevine", category: "Product Teardown", driveUrl: "https://docs.google.com/document/d/1lG7w6ZAGpl9lwH40UDyxhw3Fh0og5YCj/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A teardown of an AI talent product through its conversation experience. It focuses on building trust with better memory, context, and more consistent responses." },
  { title: "BlinkMoney", category: "Product Teardown", driveUrl: "https://docs.google.com/document/d/1zJzS0G5vVO5jQOTY5Cqwdm0UR02jqIa5/edit?usp=sharing&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A first-time-user teardown of onboarding, profile management, SIP setup, and account flows. It proposes clearer recovery from errors and a cleaner split between profile edits and KYC." },
  { title: "Vocallabs", category: "Product Teardown", driveUrl: "https://docs.google.com/document/d/1Pon0OtH-EO1PFkILNV17U-Bqig27qEZK/edit?usp=drive_link&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A voice-AI teardown that examines call quality, reliability, and user feedback. The recommendations focus on making conversations more dependable and easier to improve over time." },
  { title: "Apple", category: "Product Life Cycle Study", driveUrl: "https://docs.google.com/document/d/16DC9gRCA1bS7_p9QNloH_nOfmG2azQ5l-89d2RIywzU/edit?usp=drive_link", overview: "A product life-cycle study of the iPhone from premium launch through global scale and ecosystem-led maturity. It shows how hardware, software, retail, and the App Store compounded the product’s advantage." },
  { title: "Yatra", category: "Product Design", driveUrl: "https://drive.google.com/drive/folders/1Afr9gvcUcc3kTM_XtmqhIV40mKgBAn2v?usp=sharing", overview: "An RFQ-to-booking workflow for teams that currently chase vendors and quotes manually. It covers request creation, vendor assignment, quote comparison, approval, and booking confirmation in one trackable flow." },
  { title: "Pixxel", category: "Case Study", driveUrl: "https://drive.google.com/drive/folders/1i5Eoomn8xW0zNKewfFNeBSXaUDDIm13U?usp=sharing", overview: "A product opportunity case study for using satellite data in a focused, practical product. It moves from market signal and user need to a product vision and execution plan." },
  { title: "TwinMind", category: "Product Audit", driveUrl: "https://drive.google.com/drive/folders/1I1oyouHFoRVhPw5iPa53HUf77kH5annP?usp=sharing", overview: "A CPO-style audit that reviews the product’s priorities, experience, and growth choices. It turns the assessment into a practical plan for what to fix, measure, and ship next." },
  { title: "MPassport Seva", category: "Case Study", driveUrl: "https://drive.google.com/file/d/1WP6CbNMvaSUPg1w7DPAyIdkS9Gmq5pb9/view?usp=sharing", overview: "A case study on reducing confusion in a high-stakes passport journey. It maps the user’s steps and improves the information, guidance, and completion experience around each one." },
  { title: "Josh Talks", category: "Product Design", driveUrl: "https://drive.google.com/drive/folders/1Qxt87CDQkMZnlHOPI5feqMlmKfi0kV3S?usp=sharing", overview: "Product work for India-focused AI data, from a multilingual image-collection platform to transcription quality detection and voice-AI evaluation. The work balances contributor usability, data quality, review operations, and scale." },
  { title: "Newton School", category: "Competitive Analysis", driveUrl: "https://docs.google.com/document/d/1q5HhBxSla2xYUm1yaywdzAKoWNbMzQ0b/edit?usp=sharing&ouid=105528318561955754122&rtpof=true&sd=true", overview: "A competitor analysis of modern tech-education models across curriculum, outcomes, pricing, and student value. It compares the market so product positioning can be based on more than feature lists." },
  {
    title: "CorpHire build docs",
    category: "Product Build",
    driveUrl: "https://drive.google.com/drive/folders/1kr91IG-EPZZ_C2y8NcKBfRn07P_suPdv?usp=sharing",
    overview: "The product story behind a reverse-hiring marketplace, plus the PRD, technical architecture, UI/UX specification, and build plan that shaped it.",
    readingOptions: [
      {
        label: "Product case study",
        description: "For PMs, recruiters, or anyone who wants to quickly understand the idea.",
        url: "https://drive.google.com/file/d/1egBKXY8nYymp4VLR8YKpr7QA75xYfUxr/view?usp=sharing",
      },
      {
        label: "Full product docs",
        description: "For technical readers and anyone who wants the deeper PRD, architecture, and UI/UX detail.",
        url: "https://drive.google.com/drive/folders/1kr91IG-EPZZ_C2y8NcKBfRn07P_suPdv?usp=sharing",
      },
    ],
  },
];
