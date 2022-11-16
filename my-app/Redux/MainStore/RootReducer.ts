import { combineReducers } from "@reduxjs/toolkit";

import { main_board_slice } from "./features";

export const rootReducer = combineReducers({
  mainBoard: main_board_slice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
