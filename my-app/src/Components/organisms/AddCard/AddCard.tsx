import { AddComponent } from "../../molecules";
import { Field } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import {
  isCreatingCard,
  setCreatingCard,
  getNewCardName,
  setCardNewName,
  setBoard,
} from "../../../../Redux";
import styles from "./addCard.module.css";
import { useState } from "react";

interface Props {
  cardKey: number;
}

export function AddCard(props: Props) {
  const { cardKey } = props;
  const creatingList = useSelector(isCreatingCard);

  const [creatingCard, setCreatingCard] = useState(false);

  const dispatch = useDispatch();
  const newCardName = useSelector(getNewCardName);

  const buttonClick = () => {
    if (newCardName != "") {
      const currentBoard = JSON.parse(
        window.localStorage.getItem("board") || "[[]]"
      );
      currentBoard[cardKey].push(newCardName);
      window.localStorage.setItem("board", JSON.stringify(currentBoard));
      dispatch(setBoard({ board: currentBoard }));
    }
    dispatch(setCardNewName({ newCardName: "" }));
    setCreatingCard(false);
  };

  const closeClick = () => {
    setCreatingCard(false);
  };

  const addCard = () => {
    setCreatingCard(true);
  };

  return (
    <div className={styles.addCard} key={cardKey}>
      {creatingCard ? (
        <div>
          <Field defaultText="Enter Card Name" dispatchFunction="newCard" />
          <AddComponent
            string="Add New Card"
            clickButton={buttonClick}
            clickClose={closeClick}
          />
        </div>
      ) : (
        <div onClick={addCard}>
          <span>+ Add a Card</span>
        </div>
      )}
    </div>
  );
}
