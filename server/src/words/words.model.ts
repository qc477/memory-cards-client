import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Deck } from '../decks/decks.models';

interface WordCreationAttrs {
  word: string;
  translation: string;
}

@Table({ tableName: 'words' })
export class Word extends Model<Word, WordCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  word: string;

  @Column({ type: DataType.STRING, allowNull: false })
  translation: string;

  @Column({ type: DataType.INTEGER, defaultValue: 1 })
  groupNumber: number;

  @ForeignKey(() => Deck)
  @Column({ type: DataType.INTEGER })
  deckId: number;

  @BelongsTo(() => Deck)
  deck: Deck;
}
