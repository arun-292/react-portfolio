import { GoogleDriveImageId } from "./enums";
import { Projects } from "./interfaces";

export const SKILLS = [
  { skillName: "React.js", progress: 95 },
  { skillName: "Redux/Mobx", progress: 85 },
  { skillName: "Typescript", progress: 85 },
  { skillName: "RxDB", progress: 90 },
  { skillName: "AWS", progress: 65 },
  { skillName: ".Net Core", progress: 85 },
  { skillName: "Node.js", progress: 65 },
  { skillName: "GraphQL", progress: 85 },
  { skillName: "SQL", progress: 75 },
  { skillName: "Mongo DB", progress: 75 },
];

const GITHUB_PROFILE_URL = "https://github.com/arun-292";

export const PROJECTS: Projects[] = [
  {
    projectName: "1. Tshirt Store",
    skills: "MERN",
    imageId: GoogleDriveImageId.TSHIRT_STORE,
    url: `${GITHUB_PROFILE_URL}/Tshirt-Store`,
    description:
      "A sleek and user-friendly e-commerce platform for trendy t-shirts, powered by the MERN (MongoDB, Express, React, Node.js) stack, offering a seamless shopping experience.",
  },
  {
    projectName: "2. Blog Site",
    skills: "Flask, Sqlite, HTML5, CSS3, Bootstrap",
    imageId: GoogleDriveImageId.BLOG_POST,
    url: `${GITHUB_PROFILE_URL}/Blog-Site`,
    description:
      "Explore a dynamic and user-friendly blog site powered by Flask, SQLite, and Bootstrap, where you can effortlessly create and share captivating content with a sleek and modern design.",
  },
  {
    projectName: "3. To Do",
    skills: "React.js, HTML5, CSS3, Bootstrap",
    imageId: GoogleDriveImageId.TO_DO,
    url: `${GITHUB_PROFILE_URL}/TO-DO`,
    description:
      "A sleek and efficient to-do web application powered by React.js, offering a user-friendly interface for managing tasks effortlessly.",
  },
];
