
export enum AppTab {
  HOME = 'inicio',
  BOOK = 'livro',
  PLAN = 'plano',
  EMERGENCY = 'fome_emocional',
  ROUTINE = 'rotina',
  PROFILE = 'perfil'
}

export interface Chapter {
  id: number;
  title: string;
  subtitle?: string;
  content: string[];
  tasks?: string[];
}

export interface DayTask {
  day: number;
  title: string;
  reflection: string;
  completed: boolean;
}

export interface UserProgress {
  planDay: number;
  completedTasks: number[];
  readChapters: number[];
  emergencyCount: number;
}
