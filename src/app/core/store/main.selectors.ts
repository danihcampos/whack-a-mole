import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Game } from 'src/app/core/models';

export const selectGameState = createFeatureSelector<Game>('main');

export const selectGamestatus = createSelector(
    selectGameState,
    (gameSate: Game) => {
        return gameSate.status
    }
)
export const selectScore = createSelector(
    selectGameState,
    (gameSate: Game) => {
        return gameSate.score
    }
)
export const selectHighestScore = createSelector(
    selectGameState,
    (gameSate: Game) => {
        return gameSate.highestScore
    }
)
export const selectTimer = createSelector(
    selectGameState,
    (gameSate: Game) => {
        return gameSate.timer
    }
)
export const selectMoles = createSelector(
    selectGameState,
    (gameSate: Game) => {
        return gameSate.moles
    }
)