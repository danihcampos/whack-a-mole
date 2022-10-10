import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/core/models';
import {
  setGameStatus,
  whackAMole,
  looseAMole,
  updateHighestScore,
  decreaseTimer,
  finishGame,
} from './main.actions';

const initialMoles = [
  {
    id: 1,
    active: false,
  },
  {
    id: 2,
    active: false,
  },
  {
    id: 3,
    active: false,
  },
  {
    id: 4,
    active: false,
  },
  {
    id: 5,
    active: false,
  },
  {
    id: 6,
    active: false,
  },
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
      finishGame();

    };
    return state;
  }),
  on(setGameStatus, (state, { status }) => ({
    ...state,
    status: status,
  })),
  on(whackAMole, (state) => ({
    ...state,
    score: state.score + 1,
  })),
  on(looseAMole, (state) => ({
    ...state,
    score: state.score > 0 ? state.score - 1 : 0,
  })),
  on(updateHighestScore, (state, { value }) => ({
    ...state,
    highestScore:
      state.score > state.highestScore ? state.score : state.highestScore,
  })),
  on(finishGame, (state) => ({
    ...initialState,
    status: 'finished',
    highestScore: state.highestScore,
  }))
);
