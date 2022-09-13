import { IGroup } from './IGroup';

export interface IDeck {
  id: number;
  title: string;
  totalWords: number;
  totalExercises: number;
  groups: IGroup[];
}
