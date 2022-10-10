import { Mole } from './mole.model';

export type GameStatus = 'open' | 'happening' | 'finished';

export interface Game {
    status: GameStatus;
    score: number;
    highestScore: number;
    timer: number;
    moles: Array<Mole>;
}