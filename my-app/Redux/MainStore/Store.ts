import { configureStore } from "@reduxjs/toolkit";
import { rootReducer, RootState } from './RootReducer'

export const Store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof Store.dispatch;

//export const choiceCount = (state: RootState) => state.pages.choiceCount;

export const isCreatingList = (state:RootState) => state.mainBoard.isCreatingList;
export const getBoard = (state:RootState) => state.mainBoard.board;
export const getNewListName = (state:RootState) => state.mainBoard.newListName;
export const isCreatingCard = (state:RootState) => state.mainBoard.isCreatingCard;
export const getNewCardName = (state:RootState) => state.mainBoard.newCardName;