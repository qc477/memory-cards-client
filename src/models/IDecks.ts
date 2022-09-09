import { IGroups } from './IGroups';

export interface IDecks {
  id: number;
  title: string;
  totalWords: number;
  totalExercises: number;
  groups: IGroups[];
}
