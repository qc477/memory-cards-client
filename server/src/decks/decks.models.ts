import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface DeckCreationAttrs {
  title: string;
}

@Table({ tableName: 'decks' })
export class Deck extends Model<Deck, DeckCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  totalWords: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  totalExercises: number;

  @Column({ type: DataType.STRING, defaultValue: 'NEW' })
  dateLastExercise: string;
}
