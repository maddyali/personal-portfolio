import codingresources from "./assets/images/codingresources.png";
import theshop from "./assets/images/theshop.png";

export default {
  skills: [
    {
      name: "html",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "css",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "javascript",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "react",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "node",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      name: "express",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    },
    {
      name: "mongodb",
      imgPath:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
  ],
  projects: [
    {
      name: "coding resources",
      description:
        "This API serves educational resources relevant to software engineering. Find a resource by searching for relevant keywords.",
      tools: ["ejs", "css", "javascript", "node", "express"],
      img: codingresources,
      githubLink: "https://github.com/maddyali/coding-resources-api",
      demoLink: "https://coding-resources-api.onrender.com/",
    },
    {
      name: "the shop",
      description:
        "The Shop is a sleek and minimal website mockup for a local barbershop.",
      tools: ["html", "css", "javascript"],
      img: theshop,
      githubLink: "https://github.com/maddyali",
      demoLink: "https://the-shop-stay-sharp.netlify.app",
    },
  ],
};
