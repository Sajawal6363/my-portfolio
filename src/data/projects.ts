export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "SonderBlu",
    description:
      "A movie-related website offering streaming and content discovery.",
    image: "/imgs/ott-app.png",
    tags: ["React", "Movies", "Streaming", "Web"],
    links: {
      github: "https://github.com/Sajawal6363",
      live: "",
    },
  },
  {
    id: 2,
    title: "Cinema Drip",
    description:
      "A platform related to blogs and movies, featuring reviews and discussions.",
    image: "/imgs/qr-restaurant.png",
    tags: ["React", "Blog", "Movies", "Web"],
    links: {
      github: "https://github.com/Sajawal6363",
      live: "",
    },
  },
  {
    id: 3,
    title: "Food Ordering App",
    description:
      "A mobile application built using React Native for ordering food from various restaurants.",
    image: "/imgs/food-app.png",
    tags: [
      "React Native",
      "Mobile",
      "Food Delivery",
    ],
    links: {
      github: "https://github.com/Sajawal6363",
      live: "",
    },
  },
];
