import {
  Table,
  Model,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Deck } from '../decks/decks.model';

interface CardCreationAttrs {
  word: string;
  translation: string;
  deckId: number;
}

@Table({ tableName: 'cards', createdAt: false, updatedAt: false })
export class Card extends Model<Card, CardCreationAttrs> {
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
