import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Deck } from 'src/decks/decks.model';

interface CardCreationAttrs {
  question: string;
  answer: string;
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
  question: string;

  @Column({ type: DataType.STRING, allowNull: false })
  answer: string;

  @ForeignKey(() => Deck)
  @Column({ type: DataType.INTEGER })
  deckId: number;

  @BelongsTo(() => Deck)
  deck: Deck;
}
