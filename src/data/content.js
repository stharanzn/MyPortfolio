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
    "Experienced Game Developer at MyyHashstash in New Delhi, India, with a strong background in Unity 3D, C# and Web development technologies such as React JS and Node JS. Dynamic Game Developer with cross platform and multiplayer game experience. Excels at creating inspiring graphics and intuitive user interfaces. Skilled in developing game strategies, designs and testing.",
  location: "New Delhi, India",
};

export const experience = [
  {
    role: "Game Developer",
    company: "MyyHashstash",
    location: "New Delhi, India",
    duration: "02/2024 - Current",
    description: [
      "Contributed to marketing and promotional activities, creating compelling content to attract and retain players.",
      "Abided by company specific processes and procedures, complying at all stages of game development.",
      "Coordinated with designers, artists and programmers to create final product within agreed timeframes and to specifications.",
      "Identified target audience demographic to tailor creative, storylines and game development.",
      "Implemented augmented reality features, pushing the boundaries of traditional gaming experiences.",
    ],
  },
];

export const skills = [
  "Unity 3D",
  "C#",
  "React JS",
  "Node JS",
  "Python",
  "JavaScript",
  "Teamwork",
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
    title: "Motion Design at Amazon",
    description: "I was invited to create animations for Amazon at their Bangalore offices. During this time, I worked closely with Ankit Prajapati, a senior designer at Amazon, and collaborated with Amazon's development team to streamline the animation integration process. This experience provided valuable insights and professional growth in animation and design workflows.",
    detailedDescription: "During my tenure at Amazon's Bangalore office, I was tasked with elevating the user experience through high-fidelity motion design. The project involved creating a suite of micro-interactions and onboarding animations that would guide users seamlessly through the app's new features. Working alongside senior designers and developers, I bridged the gap between design and implementation, ensuring that every frame of animation was not only visually stunning but also performant on a wide range of devices.",
    outcome: "Successfully delivered a library of over 20 optimized Lottie animations that were integrated into the production app. The new onboarding flow saw a 15% increase in user retention, and the micro-interactions received positive feedback for enhancing the app's responsiveness and polish.",
    gallery: [
      "https://placehold.co/600x400/1a1a1a/FFF?text=Motion+Design+1",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Motion+Design+2",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Motion+Design+3",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Motion+Design+4"
    ],
    techStack: ["Figma", "Lottie Files", "Lottie Lab"],
    extendedTech: ["Adobe After Effects", "Lottie/Bodymovin", "JSON", "SVG Animation"],
    features: [
      "High-fidelity motion graphics for mobile app onboarding",
      "Optimized Lottie JSON files for performance",
      "Seamless integration with development workflow",
      "Interactive micro-interactions"
    ],
    challenges: "Ensuring high-quality animations while maintaining small file sizes for mobile performance was a key challenge. We optimized vector paths and reduced keyframes to achieve smooth 60fps animations under 50kb.",
    requirements: [
      "Create engaging onboarding animations",
      "Collaborate with dev team for implementation",
      "Optimize assets for various screen densities"
    ],
    videoUrl: "", // Add video URL if available
    links: [
      // { label: "GitHub", url: "https://github.com/stharanzn" }
    ]
  },
  {
    id: "honda-configurator",
    imageUrl: "https://raw.githubusercontent.com/stharanzn/MyPortfolio/dev-v4/src/assets/HondaConfigurator.png",
    title: "Honda Configurator",
    description: "This is one of my favourite projects i developed for MyyHashstash. A virtual configurator for Honda bikes which was made using unity3d game engine where the user can configure the bike and see the changes in real time.",
    detailedDescription: "The Honda Configurator project aimed to revolutionize the digital showroom experience. By leveraging the power of Unity 3D and WebGL, we created an interactive platform where users could customize their dream bike in real-time. From changing colors and accessories to viewing the bike from every angle, the configurator provided an immersive experience that closely mimicked a physical inspection.",
    outcome: "The virtual configurator was successfully deployed on the Honda 2 Wheelers India website, leading to a significant increase in user engagement time. It allowed potential buyers to explore options from the comfort of their homes, directly contributing to a rise in test ride bookings and inquiries.",
    gallery: [
      "https://placehold.co/600x400/1a1a1a/FFF?text=Honda+Config+1",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Honda+Config+2",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Honda+Config+3",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Honda+Config+4"
    ],
    techStack: ["Unity 3D", "C#", "Unity Addressables"],
    extendedTech: ["WebGL", "Universal Render Pipeline (URP)", "Shader Graph", "React Integration"],
    features: [
      "Real-time 3D bike customization (colors, accessories)",
      "360-degree view and zoom capabilities",
      "Dynamic pricing updates based on configuration",
      "Optimized WebGL build for mobile browsers"
    ],
    challenges: "Optimizing high-fidelity 3D models and textures for web loading times was critical. We used Unity Addressables to load assets on demand, significantly reducing the initial build size.",
    requirements: [
      "Interactive 3D visualization",
      "Seamless integration with existing Honda website",
      "Cross-platform compatibility (Desktop/Mobile)"
    ],
    videoUrl: "",
    links: [
      { label: "Live Demo", url: "https://www.honda2wheelersindia.com/virtual-showroom/index.html" }
    ]
  },
  {
    id: "fpp-shooter",
    imageUrl: "https://raw.githubusercontent.com/stharanzn/FPP-Shooter/main/ProjectImage.png",
    title: "FPP-Shooter",
    description: "This is a FPS multiplayer game which was made using unity3d game engine and photon pun 2 for the multiplayer architecture. This game was meant for me to know about setting up and deploying multiplayer games in unity. ",
    detailedDescription: "FPP-Shooter was a deep dive into the complexities of multiplayer game development. The goal was to build a robust First-Person Shooter from scratch, handling everything from player movement and weapon mechanics to network synchronization and lobby management. Using Photon PUN 2, I implemented a scalable architecture that could handle multiple concurrent matches with minimal latency.",
    outcome: "Developed a fully functional multiplayer FPS prototype with features like room creation, matchmaking, and real-time score tracking. The project served as a comprehensive learning ground for network programming patterns and state synchronization, laying the foundation for more complex multiplayer titles.",
    gallery: [
      "https://placehold.co/600x400/1a1a1a/FFF?text=FPS+Shooter+1",
      "https://placehold.co/600x400/1a1a1a/FFF?text=FPS+Shooter+2",
      "https://placehold.co/600x400/1a1a1a/FFF?text=FPS+Shooter+3",
      "https://placehold.co/600x400/1a1a1a/FFF?text=FPS+Shooter+4"
    ],
    techStack: ["Unity 3D", "C#", "Photon Pun 2", "Firebase", "Electron JS", "Node JS"],
    extendedTech: ["Photon Cloud", "Firebase Auth", "Firebase Realtime Database"],
    features: [
      "Multiplayer FPS gameplay",
      "Lobby system with room creation/joining",
      "Player synchronization (movement, shooting, health)",
      "Scoreboard and kill feed"
    ],
    challenges: "Handling network latency and synchronization in a fast-paced shooter was challenging. Implemented lag compensation and interpolation for smoother gameplay.",
    requirements: [
      "Functional multiplayer architecture",
      "User authentication and stats tracking",
      "Responsive controls and UI"
    ],
    videoUrl: "",
    links: [
      { label: "GitHub", url: "https://github.com/stharanzn/FPP-Shooter" }
    ]
  },
  {
    id: "meet-yeet",
    imageUrl: "https://raw.githubusercontent.com/stharanzn/Meet-Yeet/main/ProjectImage.png",
    title: "Meet-Yeet",
    description: "A virtual work environment where remote teams can come together and collaborate and a virtual space to organize fun events and virtual gatherings. This project was selected for the top 20 in Microsoft Imagine Cup 2023 India Region and was also selected for the Ground Reality Lauchpad 2023 Finals hosted by BITS Pilani Hyderabad Campus.",
    detailedDescription: "Meet-Yeet addresses the isolation of remote work by creating a vibrant 3D virtual office. Users can interact via avatars, use spatial audio to have natural conversations, and collaborate on shared whiteboards. The platform was designed to bring back the spontaneity of office interactions, with dedicated zones for work, meetings, and social events.",
    outcome: "Recognized as a top 20 finalist in the Microsoft Imagine Cup 2023 India Region, Meet-Yeet demonstrated the potential of the metaverse for enterprise collaboration. The prototype successfully supported concurrent users with stable voice and video integration, proving the viability of the concept.",
    gallery: [
      "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+1",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+2",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+3",
      "https://placehold.co/600x400/1a1a1a/FFF?text=Meet+Yeet+4"
    ],
    techStack: ["Unity 3D", "C#", "Photon Pun 2", "Firebase", "Agora Voice SDK", "Electron JS", "Node JS"],
    extendedTech: ["Agora Video SDK", "Rest API", "Express.js"],
    features: [
      "Virtual office environment with avatars",
      "Spatial voice and video chat",
      "Interactive whiteboard and screen sharing",
      "Mini-games for team building"
    ],
    challenges: "Integrating multiple real-time SDKs (Photon, Agora) without conflicts and managing performance was complex. Created a modular architecture to handle different subsystems.",
    requirements: [
      "Immersive collaboration tools",
      "Cross-platform support (Windows/Mac)",
      "Scalable backend for user management"
    ],
    videoUrl: "https://www.youtube.com/embed/W7yEgzhHypU",
    links: [
      { label: "GitHub", url: "https://github.com/stharanzn/Meet-Yeet" }
    ]
  },

];

export const companies = [
  { name: "Company 1", logo: "https://placehold.co/150x50?text=Company+1" },
  { name: "Company 2", logo: "https://placehold.co/150x50?text=Company+2" },
  { name: "Company 3", logo: "https://placehold.co/150x50?text=Company+3" },
  { name: "Company 4", logo: "https://placehold.co/150x50?text=Company+4" },
];

export const projects = []; // Now fetched dynamically
