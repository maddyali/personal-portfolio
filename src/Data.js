import codingresources from "./assets/images/codingresources.png";
import theshop from "./assets/images/theshop.png";
import cryptosignal from "./assets/images/cryptosignal.png";
import setupchamps from "./assets/images/setupchamps.png";

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
      name: "setup champs",
      description:
        "The #1 community for desk setup enthusiasts. In less than 60 seconds you can create an account, start exploring, or share your own setup (because it deserves to be seen).",
      tools: ["js", "node", "express", "mongodb", "passport", "cloudinary"],
      img: setupchamps,
      githubLink: "https://github.com/maddyali/setup-champs",
      demoLink: "https://setup-champs.onrender.com",
    },
    {
      name: "crypto signal",
      description:
        "Crypto Signal is your trusted source for accurate, unbiased crypto insights to help you filter signal from noise.",
      tools: ["css", "react"],
      img: cryptosignal,
      githubLink: "https://github.com/maddyali/crypto-signal",
      demoLink: "https://crypto-signal-app.netlify.app/",
    },
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
