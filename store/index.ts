import axios from "axios";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Project } from "../types";

interface ThemeState {
  isDark: boolean;
  setTheme: (isDark: boolean) => void;
}

interface ProjectState {
  data: Project[];
  pending: boolean;
  loadProjectData: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  isDark: true,
  setTheme: (isDark) =>
    set(() => ({
      isDark: !isDark,
    })),
}));

const ProjectsStore = (set: any) => ({
  data: [],
  pending: false,
  loadProjectData: async () => {
    set({ pending: true });
    const res = await axios.get<Project[]>(`/api/getProjects`);
    set({ data: res.data, pending: false });
  },
});

const useProjectsStore = create(
  persist(ProjectsStore, {
    name: "data",
  })
);

export { useThemeStore, useProjectsStore };
