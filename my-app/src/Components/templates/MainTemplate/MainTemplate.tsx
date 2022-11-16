import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getBoard, setBoard} from '../../../../Redux';
import { List} from '../../molecules/List';
import {AddList} from '../../organisms';
import {asyncGetItem} from '../../../Functions'

export function MainTemplate() {

const board:string[][] = useSelector(getBoard);

const dispatch = useDispatch();


useEffect(()=>{
    const board  = JSON.parse(window.localStorage.getItem('board')|| '[[]]');
    dispatch(setBoard({board:board}))
    
},[])




return(
    <div>
    
   {
   
   board?.map(function(list:string[]) {
        const title = list[0];
        if(title != ""){
        const cards = list.slice(1);
        return <List key ={title} title = {title} cards = {cards}></List>
        }else{
            return null;
        }
     })
    }

    
    
    
    {/* end of map */}
    <AddList></AddList>

    </div>


)

}