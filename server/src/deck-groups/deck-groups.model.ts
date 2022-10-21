import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Deck } from 'src/decks/decks.model';
import { Group } from 'src/groups/groups.model';

@Table({ tableName: 'deck_groups', createdAt: false, updatedAt: false })
export class DeckGroups extends Model<DeckGroups> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Deck)
  @Column({ type: DataType.INTEGER })
  deckId: number;

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  groupId: number;
}
