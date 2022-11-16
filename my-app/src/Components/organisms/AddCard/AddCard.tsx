
import {AddComponent} from '../../molecules'
import {Field} from '../../atoms';
import {useSelector, useDispatch} from 'react-redux'
import {isCreatingCard, setCreatingCard, getNewCardName, setCardNewName} from '../../../../Redux'
import styles from './addList.module.css'

export function AddCard(){

    const creatingList = useSelector(isCreatingCard);
    
    const dispatch = useDispatch();
    const newListName = useSelector(getNewCardName);
    const buttonClick = ()=>{
    if(newListName !=""){
        const currentBoard = JSON.parse(window.localStorage.getItem('board')|| '[[]]');
        if(currentBoard.length == 1){
            currentBoard[0] = [`${newListName}`]
        }else{
        currentBoard.push([`${newListName}`]);
        }
        window.localStorage.setItem('board', JSON.stringify(currentBoard))
    }
    dispatch(setCardNewName({newCardName:""}));
}

    const closeClick = () => {
        dispatch(setCreatingCard({isCreatingCard: false}));
    }

    const addList = () =>{
        dispatch(setCreatingCard({isCreatingCard: true}));

    }

return(
    <div className = {styles.addListCard}>
    { creatingList ? (
  <div>
        <Field defaultText='Enter Card Name'/>
        <AddComponent string='Add New Card' clickButton={buttonClick} clickClose={closeClick} />
        </div>
    ) : (
        <div onClick={addList}>
            <span>+ Add a Card</span>
        </div>
        )
    }
    </div>
    
)

}