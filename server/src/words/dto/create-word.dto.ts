export class CreateWordDto {
  readonly word: string;
  readonly translation: string;
  readonly groupNumber: number;
  readonly deckId: number;
}
