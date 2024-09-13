import {
    mobile,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "AWS Cloud Developer",
      icon: backend,
    },
    {
      title: "Digital Creator",
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
      title: "IT Intern",
      company_name: "Blue Cross Blue Shield of Michigan",
      icon: starbucks,
      iconBg: "#383E56",
      date: "February 2016 - June 2018",
      points: [
        "Developed leadership-level presentations using PowerPoint and Power BI, effectively conveying complex data and insights.",
        "Managed company-wide inventory and deployment of electronic devices, streamlining operations and increased efficiency.",
        "Successfully completed a range of intern projects spanning data analytics, mobile app design, social media marketing, and scripting.",
        "Proficient in Windows, macOS/iOS, Linux, and Microsoft Azure, with extensive experience in mobile device management.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Blue Cross Blue Shield of Michigan",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept. 2018 - May 2019",
      points: [
        "Developing and maintaining web applications using JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Became proficient in Java, JavaScript, HTML/CSS, MS SQL, and Power BI, with specialized training in Microsoft SharePoint.",
      ],
    },
    {
      title: "User Hardware Technician I",
      company_name: "iVantage Group & NSF International (Contract)",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Led the provisioning and deployment of PCs, laptops, and tablets to meet diverse user needs, encompassing hardware, software (both custom and off-the-shelf), network configurations, and service island equipment for both onsite and remote users.",
        "Managed and maintained a comprehensive inventory of all NSF endpoint devices, ensuring accurate tracking and availability across the organization.",

      ],
    },
    {
      title: "Web Developer",
      company_name: "Advantage Resourcing & Ford Motor Company (Contract)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sept. 2023 - Present",
      points: [
        "Proficient in C#, ASP.NET, JavaScript, HTML/CSS, and MS SQL, with expertise in developing robust and scalable web applications.",
        "Optimized website performance, reducing load times by 25% through Agile methodologies and targeted customer-centric solutions.",
        "Developed responsive and intuitive web applications using object-oriented programming, delivering both front-end and back-end functionality.",
        "Authored comprehensive technical documentation for existing technologies, ensuring clarity and ease of use for future developers."

    ],
    },
    {
        title: "Full Stack Developer",
        company_name: "BluPix - Blupix.me",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2020 - Present",
        points: [
            "Established and managed all branding, website development, and client outreach strategies.",
            "Managed all aspects of client relationships, from initial consultation to project delivery, ensuring clear communication, timely delivery, and high-quality outcomes.",
            "Demonstrated proficiency in various digital tools and software, including Adobe Creative Suite, WordPress, and video editing software, to execute projects efficiently and effectively.",
      ],
      },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };