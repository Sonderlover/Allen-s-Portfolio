// Portfolio content lives in this file. Replace the clearly marked placeholders
// with final links, captions, and screenshots before publishing the submission.

const projects = [
  {
    title: "Bubble Blitz",
    description: "A small hand-gesture game built with MediaPipe during my internship at Adrenalin Group. Players match gestures to pop bubbles, with a lives system, combo multiplier, and golden round bonus.",
    tags: ["MediaPipe", "JavaScript", "Computer Vision"],
    screenshots: ["assets/images/bubble-blitz-1.png"],
    video: "assets/videos/bubble-blitz-demo.mp4",
    links: {
      liveDemo: "https://sonderlover.github.io/Adrenalin-new-game/",
      repo: "https://github.com/Sonderlover/Adrenalin-new-game",
      video: ""
    }
  },
  {
    title: "AI Quotation System",
    description: "AI Quotation System started as a school capstone project that I built with my group. Adrenalin Group liked the project and offered me an internship so I could continue developing it for the company. The system uses OpenAI's GPT-4o mini model to help draft itemised quotations.",
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
      repo: "",
      video: ""
    }
  }
  // Add more project objects here later using the same shape.
];

const experience = [
  {
    title: "Internship at Singapore Aero Engine Services (SAESL)",
    caption: "A 6-month internship at SAESL, the world's largest MRO facility for Rolls-Royce Trent aero engines. I focused mainly on stocktake and inventory checks, verifying that engine parts and components were accounted for and correctly located within the facility. I gained hands-on exposure to how a large-scale engine overhaul operation tracks and manages parts across its inventory system.",
    image: "assets/images/saesl-logo.png",
    date: "January to June"
  },
  {
    title: "NITEC in Aerospace Technology",
    caption: "A two-year full-time course covering aircraft airframe and engine maintenance and repair. Hands-on training included riveting and sheet metal work, TIG welding, non-destructive testing (NDT) for detecting defects in aircraft structures, and composite structure repair using cold and hot bonding on honeycomb panels. This technical foundation later shaped how I approach building tools, from hardware-level troubleshooting to systematic problem solving.",
    image: "assets/images/nitec-aerospace-certificate.png",
    certificate: "assets/certificates/nitec-aerospace-technology.pdf",
    nameNote: "My school has not updated the name shown on this certificate yet.",
    date: "2024"
  },
  {
    title: "Part-time crew member at First Wave",
    caption: "Part-time crew member at First Wave, an events company, helping with event setup and teardown. I helped get venues event-ready and packed down efficiently, and enjoyed the fast-paced, hands-on nature of live event work.",
    image: "assets/images/first-wave-logo.png",
    date: ""
  },
  {
    title: "Current intern at Adrenalin Group",
    caption: "Current intern at Adrenalin Group, working across two departments. Under Aether Lab, I build browser-based games for event booths, including Bubble Blitz, a hand-gesture game using MediaPipe. Under AVPD Studios, I help set up event technical equipment such as cameras and lighting for live events.",
    image: "assets/images/adrenalin-internship.png",
    video: "assets/videos/adrenalin-game-demo.mp4",
    date: "Current"
  }
  // Add courses, awards, or other experience entries here using the same shape.
];
