import { IGroup } from './IGroup';

export interface IDeck {
  id: number;
  title: string;
  totalCards: number;
  totalExercises: number;
  dateLastExercise: string;
  groups: IGroup[];
}
