// Portfolio content lives in this file. Replace the clearly marked placeholders
// with final links, captions, and screenshots before publishing the submission.

const projects = [
  {
    title: "Bubble Blitz",
    description: "Browser hand-gesture game built with MediaPipe Tasks Vision, featuring gesture-matching bubbles, a lives system, a combo multiplier, and a golden round bonus.",
    tags: ["MediaPipe", "JavaScript", "Computer Vision"],
    screenshots: ["assets/images/bubble-blitz-1.png"],
    links: {
      liveDemo: "PASTE_GITHUB_PAGES_LINK_HERE",
      repo: "PASTE_GITHUB_REPO_LINK_HERE",
      video: ""
    }
  },
  {
    title: "AI Quotation System",
    description: "AI Quotation System started as a school capstone project that I built with my group. Adrenalin Group liked the project and offered me an internship so I could continue developing it for the company.",
    howItWorks: [
      "Enter OpenAI API key",
      "Connect Gmail (or use Secrets)",
      "Upload SOR JSON",
      "Click Check for New Emails",
      "Select an email, then Generate Quotation",
      "Review, then Approve and Send"
    ],
    howItWorksNote: "The whole workflow is controlled from the front end so Adrenalin's non-technical staff can operate it and adjust it at any time. It connects to each staff member's own work email, reads incoming enquiries, and scans attached documents and spreadsheets for request details. Staff must review every generated quotation thoroughly before approving it, and nothing is sent automatically. After approval, the quotation is emailed directly back to the client. This helps the company handle a high daily volume of enquiries more quickly.",
    tags: ["Streamlit", "OpenAI API", "Google Sheets API", "IMAP/SMTP"],
    screenshots: ["assets/images/quotation-system-1.png"],
    video: "assets/videos/quotation-system-demo.mp4",
    links: {
      liveDemo: "https://group2-quotatio.streamlit.app",
      repo: "PASTE_GITHUB_REPO_LINK_HERE",
      video: ""
    }
  }
  // Add more project objects here later using the same shape.
];

const experience = [
  {
    title: "Aerospace engineering internship at SAESL",
    caption: "PLACEHOLDER. Describe what I did day-to-day and what I learned.",
    image: "assets/images/saesl-placeholder.png",
    date: ""
  },
  {
    title: "NITEC in Aerospace Technology",
    caption: "Completed Jan 2023 – Dec 2024, before progressing to Higher Nitec in AI Applications.",
    image: "assets/images/nitec-cert-placeholder.png",
    date: "2024"
  },
  {
    title: "Event crew at First Wave",
    caption: "PLACEHOLDER. Describe the role; this also connects to my current internship building tools for live event booths.",
    image: "assets/images/firstwave-placeholder.png",
    date: ""
  }
  // Add courses, awards, or other experience entries here using the same shape.
];
