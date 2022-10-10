import { createAction, props } from '@ngrx/store';
import { GameStatus } from 'src/app/core/models';

export const setGameStatus = createAction(
    '[Main] Set Game Status',
    props<{ status: GameStatus }>()
);

export const updateHighestScore = createAction(
    '[Main] Update Highest Score',
    props<{ value: number }>()
);

export const whackAMole = createAction(
    '[Main] Whack a Mole'
);

export const looseAMole = createAction(
    '[Main] Loose a Mole'
);

export const decreaseTimer = createAction(
    '[Main] Decrease Timer',
);

export const finishGame = createAction(
    '[Main] Update values for a new game',
);