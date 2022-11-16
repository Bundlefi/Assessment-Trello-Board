import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface MainBoardState{
    isCreatingList: boolean,
    board : any,
    newListName: string,
    isCreatingCard: boolean,
    newCardName :string
}

interface CreateListPayload{
    isCreatingList: boolean
   
}

interface CreateBoardPayload{
    board:string[][];
}

interface SetNewListName{
    newListName:string;
}

interface SetNewCardName{
    newCardName:string;
}

interface SetNewCardPayload{
    isCreatingCard:boolean;
}


const defineBoard = async() => {
    let board:[][]  = await JSON.parse(localStorage.getItem("board") || "[[]]") || [[]];
    if(board == [[]]){
        await window.localStorage.setItem("board", JSON.stringify([[]]));
         board = [[]]
    }
return board;
}

const initialState : MainBoardState = {
    isCreatingList: false,
    board: defineBoard(),
    newListName:"",
    isCreatingCard:false,
    newCardName:""
}

const MainBoardSlice = createSlice({
    name: 'mainboard',
    initialState, 
    reducers:{
        setCreatingList(state, {payload}:PayloadAction<CreateListPayload>){
            state.isCreatingList = payload.isCreatingList
        },
        setBoard(state, {payload}:PayloadAction<CreateBoardPayload>){
            state.board = payload.board;
             localStorage.setItem("board", JSON.stringify(payload.board));

        },
        setNewListName(state, {payload}:PayloadAction<SetNewListName>){
            state.newListName = payload.newListName;
        },
        setCreatingCard(state, {payload}:PayloadAction<SetNewCardPayload>){
            state.isCreatingCard = payload.isCreatingCard;
        },
        setCardNewName(state, {payload}:PayloadAction<SetNewCardName>){
            state.newCardName = payload.newCardName;
        },
    }
});

export const main_board_slice = MainBoardSlice;

export const {setCreatingList, setBoard, setNewListName, setCreatingCard, setCardNewName} = MainBoardSlice.actions;