import create from "zustand";

interface ThemeState {
  isDark: boolean;
  setTheme: (isDark: boolean) => void;
}

const useStore = create<ThemeState>((set) => ({
  isDark: true,
  setTheme: (isDark) =>
    set(() => ({
      isDark: !isDark,
    })),
}));

export default useStore;
