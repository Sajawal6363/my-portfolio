import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Core",
    icon: Layout,
    skills: ["HTML5", "CSS", "JavaScript"],
  },
  {
    name: "Frameworks & Libraries",
    icon: Code,
    skills: ["React JS", "Next Js", "React Native", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Tools",
    icon: Terminal,
    skills: ["Git", "Visual Studio Code"],
  },
];
