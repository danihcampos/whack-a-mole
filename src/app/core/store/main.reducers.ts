import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/core/models';
import {
    setGameStatus,
    whackAMole,
    looseAMole,
    updateHighestScore,
    decreaseTimer,
} from './main.actions';

const initialMoles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
];

export const initialState: Game = {
    status: 'open',
    timer: 0,
    score: 0,
    highestScore: 0,
    moles: initialMoles,
};

export const gameReducer = createReducer(
    initialState,
    on(decreaseTimer, (state) => {
        state = {
            ...state,
            timer: state.timer - 1,
        };
        if (state.timer === 0) {
            const newScore = state.score > state.highestScore ? state.score : state.highestScore;
            console.log(newScore, state.score, state.highestScore)
            state = {
                highestScore: newScore,
                timer: 0,
                score: 0,
                status: 'finished',
                moles: initialMoles
            };
        }
        return state;
    }),
    on(setGameStatus, (state, { status }) => {
        state = {
            ...state,
            status: status,
        };
        if (status === 'happening') {
            state = {
                ...state,
                timer: 30,
            };
        }
        return state;
    }),
    on(whackAMole, (state) => ({
        ...state,
        score: state.score + 1,
    })),
    on(looseAMole, (state) => ({
        ...state,
        score: state.score > 0 ? state.score - 1 : 0,
    }))
);
