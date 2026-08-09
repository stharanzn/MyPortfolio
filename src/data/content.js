import FreeSpinHoverLottie from "../assets/lottie-animations/FreeSpinHoverLoop.json";
import GiftBoxHover from "../assets/lottie-animations/GiftBoxHoverLoop.json";
import LevelUpHover from "../assets/lottie-animations/LevelUpHoverLoop.json";
import HondaConfiguratorImg from "../assets/images/honda-configurator.png";
import HondaConfiguratorImg2 from "../assets/images/honda-configurator-2.png";
import HondaConfiguratorImg3 from "../assets/images/honda-configurator-3.png";
import HondaShowroomImg from "../assets/images/honda-showroom.png";

import BajajSoundToParis from "../assets/images/bajaj-abc-sound-to-paris.png";
import BajajSpotNWin from "../assets/images/bajaj-spot-n-win.png";
import BajajFruityFusion from "../assets/images/bajaj-fruity-fusion.png";
import BajajHookTheFish from "../assets/images/bajaj-hook-the-fish.png";
import BajajDriftMaster from "../assets/images/bajaj-drift-master.png"

import Amazon from "../assets/images/logos/amazon.png"
import Honda from "../assets/images/logos/honda.png"
import Bajaj from "../assets/images/logos/bajaj.png"
import TooYumm from "../assets/images/logos/too-yumm.png"

export const profile = {
  name: "Ranjan Shrestha",
  role: "Game Developer",
  contact: {
    phone: "+91 7397963988",
    email: "stharanzn1705@gmail.com",
    website: "https://sharanz.web.app/",
    linkedin: "https://www.linkedin.com/in/stharanzn/",
    github: "https://github.com/stharanzn",
  },
  summary:
    "Dynamic Cross-Platform Game Developer, driving user engagement through expertise in Unity 3D/C# development and advanced Web technologies (React JS, Node JS). Extensive experience in the full game development lifecycle, from concept and strategy to network programming (multiplayer systems) and rigorous testing. Dedicated to crafting visually compelling graphics and highly optimized user experiences for broad, geographically diverse audiences.",
  location: "New Delhi, India",
};

export const experience = [
  {
    role: "SDE 1 | Game Developer",
    company: "Felicity Games",
    location: "Bangalore, India",
    duration: "04/2026 - Current",
    description: [
      "Built and refined casual mobile game features with a strong focus on gameplay feel, retention, and smooth player progression.",
      "Worked closely with game designers, artists, and product teams to turn ideas, balancing changes, and event requirements into polished in-game experiences.",
      "Optimized game performance, asset handling, and core systems to ensure stable gameplay across a wide range of mobile devices.",
      "Supported live game updates by implementing new content, fixing gameplay issues quickly, and helping maintain a reliable release cycle.",
      "Contributed to improving player engagement by iterating on game loops, reward systems, and feature behavior using team feedback and testing insights.",
    ]
  },
  {
    role: "Game Developer",
    company: "MyyHashstash",
    location: "New Delhi, India",
    duration: "02/2024 - 04/2026",
    description: [
      "Contributed to marketing and promotional activities, creating compelling content to attract and retain players.",
      "Abided by company specific processes and procedures, complying at all stages of game development.",
      "Coordinated with designers, artists and programmers to create final product within agreed timeframes and to specifications.",
      "Identified target audience demographic to tailor creative, storylines and game development.",
      "Implemented augmented reality features, pushing the boundaries of traditional gaming experiences.",
    ],
  }
];

export const skills = [
  "Unity 3D",
  "C#",
  "React JS",
  "Node JS",
  "Python",
  "JavaScript",
  "X-Code",
  "Game Strategies",
  "Augmented Reality",
];

export const education = [
  {
    institution: "Vellore Institute of Technology - Bhopal",
    degree: "Bachelor of Science Computer Science",
    year: "2024",
  },
];

export const hobbies = [
  "Making and playing multiplayer games",
  "Athlete, Free Runner and Gymnast",
  "Art and craft",
  "Calisthenics",
  "Exploring new technology",
];

export const githubConfig = {
  username: "stharanzn",
  projectAllowList: [
    // "Meet-Yeet",
    // "PongGame",
    // "FPP-Shooter",
    // Add other repository names here to include them
  ],
};

export const customProjects = [
  {
    id: "motion-design-amazon",
    imageUrl: "https://raw.githubusercontent.com/stharanzn/MyPortfolio/dev-v2/src/assets/AmazonPic.jpg",
    title: "Amazon Gamified Rewards Experience",

    description: "Contracted by Amazon (Bangalore) to spearhead a motion design refresh for the 'Spin the Wheel' gamification platform. Partnering with Senior Designer Ankit Prajapati, I established a high-performance motion system and streamlined the design-to-development handoff, ensuring pixel-perfect implementation of complex micro-interactions.",

    detailedDescription: "Tasked with modernizing Amazon's gamified rewards experience, I collaborated closely with Senior Designer Ankit Prajapati to co-lead the visual overhaul of the 'Spin the Wheel' interface. The objective was to drive user retention through high-fidelity, delight-driven interactions. I engineered a comprehensive library of over 20 optimized Lottie animations, meticulously balancing visual richness with mobile app performance. These assets were deployed alongside detailed Figma interaction flows, creating a robust system for the engineering team to reference and implement.",

    // outcome: "Successfully delivered a scalable library of 20+ Lottie animations. The revamped onboarding flow contributed to a 15% increase in user retention, while the optimized micro-interactions garnered positive feedback for significantly enhancing app responsiveness and perceived polish.",

    gallery: [
      "https://raw.githubusercontent.com/stharanzn/MyPortfolio/dev-v2/src/assets/AmazonPic.jpg",
      { type: 'lottie', src: FreeSpinHoverLottie },
      { type: 'lottie', src: GiftBoxHover },
      { type: 'lottie', src: LevelUpHover }
    ],

    techStack: ["Figma", "LottieFiles", "LottieLab"],

    extendedTech: ["Figma", "LottieFiles", "LottieLab"],

    features: [
      "High-fidelity gamified onboarding sequences",
      "Performance-optimized Lottie architecture (JSON)",
      "End-to-end developer handoff workflows",
      "State-based micro-interactions for UI feedback"
    ],

    challenges: "The primary technical challenge was reconciling complex visual effects with strict mobile file-size constraints. I executed a rigorous optimization strategy—simplifying vector node structures, flattening non-essential layers, and rationalizing 2D effects—to achieve fluid 60fps playback and minimal load times without compromising the intended visual fidelity.",

    requirements: [
      "Design and engineer engaging onboarding motion assets",
      "Partner with engineering for technical feasibility and integration",
      "Optimize assets for scalability across varying screen densities"
    ],

    videoUrl: "",

    links: []
  },
  {
    id: "honda-configurator",
    imageUrl: HondaConfiguratorImg,
    title: "Honda Two-Wheeler 3D Interactive Configurator",

    description: "A flagship project developed for MyyHashstash: a real-time 3D virtual configurator for Honda motorcycles, built using the Unity 3D engine. This solution transformed the digital buying journey by allowing users to instantly customize and visualize bike specifications via a WebGL interface.",

    detailedDescription: "The Honda Configurator project was strategically designed to revolutionize the OEM's digital showroom experience and enhance remote sales enablement. By leveraging the Unity 3D engine and WebGL deployment, we engineered a highly interactive platform enabling users to perform real-time customization, including accessories and component changes. This solution provides an immersive, photorealistic 360-degree inspection experience, effectively bridging the gap between online browsing and physical showroom visits.",

    outcome: "Successfully deployed the virtual configurator onto the official Honda 2 Wheelers India website, with 3 configurable bike models. The feature demonstrably increased user engagement time and delivered critical data on customer preferences. This seamless, in-home exploration experience directly contributed to a measurable increase in test ride bookings and sales inquiries.",

    gallery: [
      HondaShowroomImg,
      HondaConfiguratorImg,
      HondaConfiguratorImg3,
      HondaConfiguratorImg2,
    ],

    techStack: ["Unity 3D", "C#", "Unity Addressables"],

    extendedTech: ["WebGL", "Universal Render Pipeline (URP)", "Shaders", "Unity Addressables"],

    features: [
      "Real-time Parametric 3D Customization (Accessories, Components)",
      "Full 360-Degree Interactive Camera Control and High-Fidelity Zoom",
      "Dynamic Server-Side Pricing Logic and Real-time Configuration Updates",
      "Cross-Browser and Mobile-Optimized WebGL Build Deployment"
    ],

    challenges: "Addressing the critical challenge of delivering high-fidelity 3D assets over the web with minimal initial load times. This was strategically mitigated through the implementation of Unity Addressables, enabling efficient, on-demand streaming of assets and significantly reducing the initial binary build size.",

    requirements: [
      "High-fidelity, Interactive 3D Visualization",
      "Seamless Embeddability and Integration within the existing Honda web infrastructure",
      "Guaranteed Cross-Platform Compatibility and Performance (Desktop/Mobile)"
    ],

    videoUrl: "",

    links: [
      { label: "Live Experience", url: "https://www.honda2wheelersindia.com/virtual-showroom/index.html" }
    ]
  },
  {
    id: "bajaj-games",
    imageUrl: BajajSpotNWin,
    title: "Bajaj In-App Gamification Platform",

    description: "Contributed to the development and maintenance of a large library of 100+ unique WebGL casual games integrated into the main Bajaj customer application. I was responsible for the end-to-end development of 15+ new titles and the optimization/refinement of over 10 existing games, including the creation of API-driven template games for rapid content iteration and specialized games for celebrity marketing campaigns.",

    detailedDescription: "Tasked with enhancing user engagement and maximizing screen time for the Bajaj application, I served as a key developer on the project to build a high-volume library of instantly accessible WebGL games. This involved rapid prototyping and development using Unity 3D/C# to meet tight marketing and content update deadlines. A core focus was the creation of reusable template-based games where core mechanics were stabilized and game content (assets, scoring, logic) was dynamically loaded via an external API, significantly streamlining the content pipeline.",

    outcome: "Successfully launched a robust, API-driven gamification platform that delivered continuous, fresh content, leading to a demonstrable increase in user dwell time and engagement within the Bajaj application ecosystem.",

    gallery: [
      BajajHookTheFish,
      BajajSpotNWin,
      BajajFruityFusion,
      BajajDriftMaster
    ],

    techStack: ["Unity 3D", "C#", "WebGL"],

    extendedTech: ["API Integration", "Custom Game Templates", "Client-Side Content Parsing", "WebGL", "Firebase"],

    features: [
      "High-Volume Development of 100+ Cross-Platform WebGL Casual Games",
      "Implementation of API-Driven Game Templates for efficient content updates",
      "Optimization of existing titles for performance and stability",
      "Rapid Prototyping for Celebrity Marketing Campaigns"
    ],

    challenges: "The primary challenge involved optimizing high-volume WebGL builds and complex game logic to ensure consistent performance and load times, especially for our core user base who predominantly utilized low-RAM mobile devices on limited networks (Tier 3 cities). This required rigorous focus on maintaining small build sizes and quick load times. For games involving complex physics interactions, a major task was achieving efficient physics simulation and rendering while mitigating memory pressure and object-pooling, prioritizing efficient asset compression and aggressive draw call reduction to maintain a smooth user experience.",

    requirements: [
      "Creation of a large, high-quality, and scalable casual game library",
      "Seamless Integration of game content via external APIs",
      "Rapid development cycle for time-sensitive marketing campaigns",
      "Responsive UI/UX for cross-device compatibility"
    ],

    videoUrl: "",

    links: []
  },
  // {
  //   id: "meet-yeet",
  //   imageUrl: "https://raw.githubusercontent.com/stharanzn/Meet-Yeet/main/ProjectImage.png",
  //   title: "Meet-Yeet",
  //   description: "A virtual work environment where remote teams can come together and collaborate and a virtual space to organize fun events and virtual gatherings. This project was selected for the top 20 in Microsoft Imagine Cup 2023 India Region and was also selected for the Ground Reality Lauchpad 2023 Finals hosted by BITS Pilani Hyderabad Campus.",
  //   detailedDescription: "Meet-Yeet addresses the isolation of remote work by creating a vibrant 3D virtual office. Users can interact via avatars, use spatial audio to have natural conversations, and collaborate on shared whiteboards. The platform was designed to bring back the spontaneity of office interactions, with dedicated zones for work, meetings, and social events.",
  //   outcome: "Recognized as a top 20 finalist in the Microsoft Imagine Cup 2023 India Region, Meet-Yeet demonstrated the potential of the metaverse for enterprise collaboration. The prototype successfully supported concurrent users with stable voice and video integration, proving the viability of the concept.",
  //   gallery: [
  //     "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+1",
  //     "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+2",
  //     "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+3",
  //     "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+4"
  //   ],
  //   techStack: ["Unity 3D", "C#", "Photon Pun 2", "Firebase", "Agora Voice SDK", "Electron JS", "Node JS"],
  //   extendedTech: ["Agora Video SDK", "Rest API", "Express.js"],
  //   features: [
  //     "Virtual office environment with avatars",
  //     "Spatial voice and video chat",
  //     "Interactive whiteboard and screen sharing",
  //     "Mini-games for team building"
  //   ],
  //   challenges: "Integrating multiple real-time SDKs (Photon, Agora) without conflicts and managing performance was complex. Created a modular architecture to handle different subsystems.",
  //   requirements: [
  //     "Immersive collaboration tools",
  //     "Cross-platform support (Windows/Mac)",
  //     "Scalable backend for user management"
  //   ],
  //   videoUrl: "https://www.youtube.com/embed/W7yEgzhHypU",
  //   links: [
  //     { label: "GitHub", url: "https://github.com/stharanzn/Meet-Yeet" }
  //   ]
  // },

];

export const companies = [
  { name: "Amazon", logo: Amazon },
  { name: "Honda", logo: Honda },
  { name: "Bajaj", logo: Bajaj },
  { name: "Too Yumm", logo: TooYumm },
];

export const projects = []; // Now fetched dynamically
