import { IGroupLabel } from './IGroupLabel';

export interface IDeck {
  id: number;
  title: string;
  totalCards: number;
  totalExercises: number;
  dateLastExercise: string;
  groupStatistics: IGroupLabel[];
}
