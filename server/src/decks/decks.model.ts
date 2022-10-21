import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Card } from 'src/cards/cards.model';
import { DeckGroups } from 'src/deck-groups/deck-groups.model';
import { Group } from 'src/groups/groups.model';

interface DeckCreationAttrs {
  title: string;
}

@Table({ tableName: 'decks', createdAt: false, updatedAt: false })
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
  totalCards: number;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  totalExercises: number;

  @Column({ type: DataType.DATE })
  dateLastExercise: Date;

  @BelongsToMany(() => Group, () => DeckGroups)
  groups: Group[];

  @HasMany(() => Card)
  cards: Card[];
}
