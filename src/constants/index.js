import {
    mobile,
    fullstack,
    frontend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    postgres,
    git,
    storybook,
    docker,
    nubapp,
    centene,
    accenture,
    poc,
    spendcast,
    dance,
    jobit,
    tripguide,
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
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: fullstack,
    },
    {
      title: "Web Developer",
      icon: web,
    }
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
      name: "PostgreSQL",
      icon: postgres,
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
      name: "storybook",
      icon: storybook,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Centene Corporation",
      icon: centene,
      iconBg: "#383E56",
      date: "Apr 2022 - December 2022",
      points: [
        "Create UI components and services within the healthcare application in React, TypeScript, GraphQL HTML5, CSS3, Storybook, and the Material design framework",
        "Implemented code changes within React that allowed for over 50 resource links to be connected with AEM leading to a 60% improvement in efficiency when integrating new AEM resources into react components.",
        "Reduced component creation time by 70% by integrating React micro frontends into legacy Java code. Was easily testable, easily understood, and was implemented in over 20 components.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "July 2021 - Feb 2022",
      points: [
        "Use Angular 12, TypeScript, HTML5, CSS3, and the Material Design Framework on the user interface of an application to aid in creating infrastructure on cloud platforms (AWS, Google Cloud Platform, Microsoft Azure)",
        "Increased efficiency to create a form component by 25% by creating key form validation components that served as a template for over 12 components. ",
        "Reduced database costs by 30% by completing a database migration from MongoDB to PostgreSQL. ",
        "Improved application responsiveness by 25% within a legacy healthcare application by using CSS3, Flexbox, Grid, and Media Queries.","Build and deploy Docker containers to divide the App into microservices","Create and maintain CI/CD pipelines for code deployment using GitLab",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "POC Conversational English",
      icon: poc,
      iconBg: "#383E56",
      date: "Oct 2019 - Jul 2021",
      points: [
        "Developed in Interactive quiz portal in the PERN stack (Postgres, Express, React, Node) that is used by over 50 students.",
        "Uses several features of the React framework including hooks, Providers, and protected routes.",
        "Uses several features of HTML5, CSS3 including Flexbox, CSS Grid, and HTML5 semantic tags."
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Nubapp",
      icon: nubapp,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - May 2019",
      points: [
        "Modify and add features to an existing web application built in HTML5, CSS3, JavaScript ES6, Angular.js and PHP.",
        "Developed and improved over 15 interfaces used by administrators and clients.",
        "Improved how clients utilized their membership perks by providing a streamlined interface for membership vouchers."
      ],
    },
    {
      title: "Web Application Developer",
      company_name: "SpendCast",
      icon: spendcast,
      iconBg: "#E6DEDD",
      date: "Jun 2015 - Dec 2018",
      points: [
        "Create Internal and client Apps using Angular, JavaScript, HTML, CSS, PHP, and Bootstrap.",
        "Increased a client's sales by 60% by creating an application in Vue.js that allowed for a three-step booking process to be completed by users.",
        "Led to a 40% increase in productivity when sharing and completing code updates by implementing the GIT version control system.",
        "Reduced web application time by 70% by using Angular on the Rosella application."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Based on his exceptional skills and expertise in various technologies, I highly recommend Rennie for any project or team. His valuable contribution to the project at Accenture was evident in his ability to collaborate with knowledge transfers and work across the stack, ensuring the success of the database migration project, meeting the deadline, and reducing costs by 30%.",
      name: "Ricardo Garcia",
      designation: "Software Engineer",
      company: "BizzyCar",
      image: "https://drive.google.com/uc?export=download&id=1E0Tk076_oa_zC3Y3SfPFndkzvaBmqxDc",
    },
    {
      testimonial: "Rennie S. Bevineau is an amazing software developer and an awesome and inspiring human being. Rennie still inspires me by his never-ending desire to learn and improve his skills. I hired Rennie to work on a cross-functional team to develop web apps, websites and social media content. At every point, he exceeded my expectations by having a can-do attitude and a passion for continuous learning.",
      name: "Keith Alexander Ashe",
      designation: "Software Developer",
      company: "Rollbar",
      image: "https://drive.google.com/uc?export=download&id=1V4LcO_FmktDyDcbU2E1tRIjGQxr73ZNP",
    },
    {
      testimonial:
      "Rennie has a solid critical mind when tackling problems and work. He asks relevant questions and is a steady, consistent producer. He's one of the first people I'd call if I need some frontend web development and he was available.",
      name: "Steven Ose",
      designation: "CTO",
      company: "Kaspar Companies",
      image: "https://drive.google.com/uc?export=download&id=1Zc36GEF-fxHkU3H_6JvOFN-M03HuZn5g",
    },
  ];
  
  const projects = [
    {
      name: "Total Dance Virtual Classes",
      description:
        "Total Dance Virtual Classes is for dancing enthusiasts all over the world. It was built for dancers to receive a curated list of videos based on their dance of choice and skill level. The user follows a three-step process. Log In, Select a dance and select a skill level. They will then see a list of dance videos that suit their needs.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: dance,
      source_code_link: "https://github.com/Renniesb/total_dance_virtual_classes/",
      live_code_link: "https://total-dance-virtual-classes.vercel.app/"
    },
    {
      name: "FilmoPedia",
      description:
      "FilmoPedia is for movie lovers. It was built to find out which movie is best for the user to view. This application searches for detailed movie information and movies from the top 50 movies list. It also finds each movie's original movie trailers.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "jQuery",
          color: "blue-text-gradient",
        },
        {
          name: "Ajax",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Renniesb/filmopedia",
      live_code_link: "https://renniesb.github.io/filmopedia/"
    },
    {
      name: "Flashcards App",
      description:
      "Flashcards App is for students. It was built to quickly learn and study a list of terms and definitions. It features an intuitive interface that allows users to study, edit, add, and delete flashcards/decks. Also, it has a unique Flashcard flip animation triggered upon pressing the flip card button.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Renniesb/flashcards",
      live_code_link: "https://renniesb.github.io/flashcards/"
    },
    // {
    //   name: "POC Conversational Quiz App",
    //   description:
    //     "POC conversational Quiz app is for the students of Peace of Cake English Academy. It was built to learn conversational English through a quiz game. It tests the students listening ability by asking them to complete blanks concerning audio clips they hear in the game.",
    //   tags: [
    //     {
    //       name: "HTML5",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "CSS3",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "React.js",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "JavaScript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Node.js",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: dance,
    //   source_code_link: "https://github.com/Renniesb/total_dance_virtual_classes/",
    //   live_code_link: ""
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };