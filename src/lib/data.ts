import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Web App",
    description: "Creating a WebApp-Based Company Profile for NoFileExistsHere, with content accessible through an admin panel and customizable as needed.",
    tags: ["PHP", "Laravel", "Filament", "Livewire", "Mysql", "Tailwind"],
    imageUrl: "/images/projects/project1.png",
    link: "https://nofileexistshere.my.id",
  },
  {
    title: "Installation Network Server",
    description: "Installed Mikrotik RB1100 HX2 at PT Smartec Teknologi Indonesia (Bantu Saku), featuring the latest technology with 1Gbps speed.",
    tags: ["Winbox", "Mikrotik", "VPN", "Load Balancing"],
    imageUrl: "/images/projects/project3.png",
    link: "#",
  },
  {
    title: "Implementation & Setup Server",
    description: "Implemented and configured Synology NAS at PT Lizzie Parra Kreasi (BLP Beauty), delivering advanced storage solutions.",
    tags: ["Synology", "NAS", "VPS"],
    imageUrl: "/images/projects/project4.png",
    link: "#",
  },
  {
    title: "Cloud Computing",
    description: "Setting Up a Home Server Using NextCloud with the Linux Ubuntu Server Operating System.",
    tags: ["Nextcloud", "Ubuntu", "Mariadb", "Docker", "NGINX", "Cloudflare"],
    imageUrl: "/images/projects/project2.png",
    link: "#",
  },
  {
    title: "Hotspot System Implementation",
    description: "We installed a hotspot system at PT Lizzie Parra Kreasi for 100+ employees using Mikrotik RB450Gx4, with a user-friendly login page for easy access.",
    tags: ["Mikrotik", "Hotspot", "Winbox"],
    imageUrl: "/images/projects/project5.png",
    link: "#",
  },
];
