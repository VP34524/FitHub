export type Theme = 'slate' | 'emerald' | 'violet' | 'rose' | 'amber' | 'cyan';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export const themes: Record<Theme, ThemeConfig> = {
  slate: {
    primary: 'bg-slate-600',
    secondary: 'bg-slate-500',
    accent: 'bg-slate-400',
    background: 'bg-slate-50',
    text: 'text-slate-900'
  },
  emerald: {
    primary: 'bg-emerald-600',
    secondary: 'bg-emerald-500',
    accent: 'bg-emerald-400',
    background: 'bg-emerald-50',
    text: 'text-emerald-900'
  },
  violet: {
    primary: 'bg-violet-600',
    secondary: 'bg-violet-500',
    accent: 'bg-violet-400',
    background: 'bg-violet-50',
    text: 'text-violet-900'
  },
  rose: {
    primary: 'bg-rose-600',
    secondary: 'bg-rose-500',
    accent: 'bg-rose-400',
    background: 'bg-rose-50',
    text: 'text-rose-900'
  },
  amber: {
    primary: 'bg-amber-600',
    secondary: 'bg-amber-500',
    accent: 'bg-amber-400',
    background: 'bg-amber-50',
    text: 'text-amber-900'
  },
  cyan: {
    primary: 'bg-cyan-600',
    secondary: 'bg-cyan-500',
    accent: 'bg-cyan-400',
    background: 'bg-cyan-50',
    text: 'text-cyan-900'
  }
};

export interface UserData {
  age: number;
  weight: number;
  height: number;
  diet: 'veg' | 'non-veg';
  weightGoal: 'lose' | 'maintain' | 'gain';
  workoutTime: number;
}