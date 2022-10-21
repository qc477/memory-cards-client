import { Model, Column, DataType, Table, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Card } from 'src/cards/cards.model';
import { DeckGroups } from 'src/deck-groups/deck-groups.model';
import { Deck } from 'src/decks/decks.model';

interface GroupCreationAttrs {
  name: string;
}

@Table({ tableName: 'group', createdAt: false, updatedAt: false })
export class Group extends Model<Group, GroupCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @HasMany(() => Card)
  cards: Card[];

  @BelongsToMany(() => Deck, () => DeckGroups)
  decks: Deck[];
}
