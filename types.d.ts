export interface Project {
  id: string;
  title: string;
  image: string;
  github: string;
  link: string;
  description: string;
  tags: string[];
}

export type ProjectContextType = {
  projects: Project[];
  saveProjects: (projects: Project[]) => void;
};

export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
};

export type AppStore = {
  isDark: boolean;
  projects: Project[] | null;
};

export type AppStoreContext = [
  state: AppStore,
  setState: (state: AppStore) => void
];

export type ISkillCard = { id: number; title: string; description: string };
export interface ITagColors {
  tag: string;
  class: string;
}
