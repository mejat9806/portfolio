export type techTypes = {
  name: string;
  img: string;
};

export type projectType = {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  github: string;
  link: string;
  tech: techTypes[];
};

export const projects: projectType[] = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "myBorgur",
    desc: " myBorgur project is a food restaurant website that can be dynamicaly update using the point of sale system.This website is powered by react,supabase and tanstack query  ",
    img: "/Bourger.png",
    link: "https://main--myborgur.netlify.app",
    github: "https://github.com/mejat9806/RestaurantApp",

    tech: [
      { name: "supabase", img: "/supabae.png" },
      { name: "react", img: "/React-icon.svg.png" },
      { name: "react hook form", img: "/react-hook-form-logo-only.png" },
      { name: "tailwindcss", img: "/tailwind-css.png" },
      { name: "tanstack query", img: "/react Query.png" },
      { name: "Javascript", img: "/JavaScript-logo.png" },
    ],
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Point of Sale system",
    desc: "Point of Sale system can be used to update data in myBorgur website .it also handle cart function and data tracking for example how many item sold perday and    ",
    img: "/POS.png",
    link: "https://posrestaurant.netlify.app/",
    github: "https://github.com/mejat9806/PoS",
    tech: [
      { name: "supabase", img: "/supabae.png" },
      { name: "react", img: "/React-icon.svg.png" },
      { name: "react hook form", img: "/react-hook-form-logo-only.png" },
      { name: "tailwindcss", img: "/tailwind-css.png" },
      { name: "tanstack query", img: "/react Query.png" },
      { name: "TypeScript", img: "/TS icon.png" },
    ],
  },
  {
    id: 3,
    color: "from-violet-100 to-red-300",
    title: "ViewFinder",
    desc: "Fullfledged social media app with register ,login ,creating a Post with or without multiple image .you can interact with other user posts by commenting on them and many more",
    img: "/viewFinder.png",
    link: "https://socialmedia-650u.onrender.com",
    github: "https://github.com/mejat9806/first-fullstack-app",
    tech: [
      { name: "express", img: "/express.png" },
      { name: "react", img: "/React-icon.svg.png" },
      { name: "shadcn", img: "/shadcnLogo.png" },
      { name: "tailwindcss", img: "/tailwind-css.png" },
      { name: "tanstack query", img: "/react Query.png" },
      { name: "TypeScript", img: "/TS icon.png" },
    ],
  },
];
