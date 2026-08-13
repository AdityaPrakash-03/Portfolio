export type Certification = {
  title: string;
  issuer: string;
  issuedDate: string;
  tier: 1 | 2 | 3;
  credentialUrl: string;
  note?: string;
};

export const certifications: Certification[] = [
  { title: "Introduction to Model Context Protocol", issuer: "Anthropic", issuedDate: "Mar 2026", tier: 1, credentialUrl: "https://verify.skilljar.com/c/rddu74uapv7c", note: "Working with agents, tools, and context in practical AI workflows." },
  { title: "Product Management: Building a Product Strategy", issuer: "LinkedIn Learning", issuedDate: "Aug 2026", tier: 1, credentialUrl: "https://www.linkedin.com/learning/certificates/bb98044a580736ad610971cf2ddc173d43c4918b2292b67a41b495d841db15a3?trk=share_certificate" },
  { title: "Electronic Arts Product Management Job Simulation", issuer: "Forage", issuedDate: "Jan 2026", tier: 1, credentialUrl: "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_Wbqk2PxH654DbtaET_1768504964610_completion_certificate.pdf", note: "Practice with KPIs, metrics, and product decisions." },
  { title: "McKinsey.org Forward Program", issuer: "McKinsey & Company", issuedDate: "Dec 2025", tier: 1, credentialUrl: "https://www.credly.com/badges/1daa8cb5-db2a-4ca8-9777-bc0e6242126c/linked_in_profile", note: "Practice with structured problem solving and stakeholder communication." },
  { title: "Project Planning: Putting It All Together", issuer: "Google", issuedDate: "Aug 2025", tier: 2, credentialUrl: "https://www.coursera.org/account/accomplishments/verify/4HKCWD2FT843" },
  { title: "Project Initiation: Starting a Successful Project", issuer: "Google", issuedDate: "Aug 2025", tier: 2, credentialUrl: "https://www.coursera.org/account/accomplishments/verify/Y8YI79QWZNWA" },
  { title: "Project Management With Jira", issuer: "Reliance Foundation", issuedDate: "Jun 2025", tier: 2, credentialUrl: "https://rfskillingacademy.com/en/certificate/group/376/224679?check_logged_in=1" },
  { title: "Introduction to Large Language Models", issuer: "Google", issuedDate: "May 2024", tier: 3, credentialUrl: "https://www.skills.google/public_profiles/ea3d233a-6e3e-4125-941b-abb0b7f3d47f/badges/9231491?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  { title: "Introduction to Generative AI", issuer: "Google", issuedDate: "May 2024", tier: 3, credentialUrl: "https://www.skills.google/public_profiles/ea3d233a-6e3e-4125-941b-abb0b7f3d47f/badges/9192086?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  { title: "Introduction to Responsible AI", issuer: "Google", issuedDate: "May 2024", tier: 3, credentialUrl: "https://www.skills.google/public_profiles/ea3d233a-6e3e-4125-941b-abb0b7f3d47f/badges/9235500?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  { title: "Introduction to Image Generation", issuer: "Google", issuedDate: "May 2024", tier: 3, credentialUrl: "https://www.skills.google/public_profiles/ea3d233a-6e3e-4125-941b-abb0b7f3d47f/badges/9231840?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" },
  { title: "AWS Academy Graduate: Cloud Architecting", issuer: "Amazon Web Services", issuedDate: "Jul 2025", tier: 3, credentialUrl: "https://www.credly.com/badges/8b16d518-a0b7-4d38-a35d-18b5805e0dda/linked_in_profile" },
  { title: "Red Hat System Administration I", issuer: "Red Hat", issuedDate: "Jul 2025", tier: 3, credentialUrl: "https://www.credly.com/badges/cbf91e65-8827-43fc-a412-13598c27060f/linked_in_profile" },
];

export const featuredCertification = certifications[0];
