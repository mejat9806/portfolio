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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
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
];
