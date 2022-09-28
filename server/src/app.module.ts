import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Deck } from './decks/decks.model';
import { Word } from './words/words.model';
import { DecksModule } from './decks/decks.module';
import { WordsModule } from './words/words.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Deck, Word],
      autoLoadModels: true,
    }),
    DecksModule,
    WordsModule,
  ],
})
export class AppModule {}
