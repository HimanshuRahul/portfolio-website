import {
    software,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
  
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    drdo,
    hcl,
    edubook,
    portfolio,
    imageainary,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: software,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Graphics Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Intern",
      company_name: "Institute of Systems Studies & Analyses, DRDO",
      icon: drdo,
      iconBg: "#383E56",
      date: "June 2018 - August 2018",
      points: [
        "Developed proficiency in implementing data mining processes on targeted datasets.",
        "Applied various data mining algorithms to extract valuable insights and meaningful patterns.",
        "Contributed to the generation of data-driven solutions through meticulous analysis and interpretation.",
        "Strengthened passion for data mining, eager to leverage skills and knowledge in future projects.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "HCL Tech | Client - Microsoft",
      icon: hcl,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    
  ];
  
  const projects = [
    {
      name: "eduBook",
      description:
        "Next.js app with Turborepo and MongoDB for seamless course transactions for users with intuitive admin tools to create, edit and delete courses with modern design.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "turborepo",
          color: "green-text-gradient",
        },
        {
          name: "materialui",
          color: "pink-text-gradient",
        },
      ],
      image: edubook,
      source_code_link: "https://github.com/HimanshuRahul/edubook",
      website_link: "https://edubook.vercel.app/",
    },
    {
      name: "Portfolio Website",
      description:
        "Crafted a dynamic React.js portfolio using React Three Fiber, showcasing projects, skills, and featuring a contact page for easy communication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
      website_link: "https://edubook.vercel.app/",
    },
    {
      name: "imageAInary",
      description:
        "Built a React.js app utilizing OpenAI API to transform text prompts into shareable images, fostering community engagement through creative expression.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: imageainary,
      source_code_link: "https://github.com/HimanshuRahul/imageainary",
      website_link: "https://imageainary.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };