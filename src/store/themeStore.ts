import { create } from 'zustand';

interface ThemeState {
  colorMode: 'pastel' | 'default';
  toggleColorMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  colorMode: 'pastel',
  toggleColorMode: () => set((state) => ({ 
    colorMode: state.colorMode === 'pastel' ? 'default' : 'pastel' 
  })),
}));