import { AddComponent } from "../../molecules";
import { Field } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import {
  isCreatingList,
  setCreatingList,
  getNewListName,
  setNewListName,
  setBoard,
} from "../../../../Redux";
import styles from "./addList.module.css";

export function AddList() {
  const creatingList = useSelector(isCreatingList);
  const dispatch = useDispatch();
  const newListName = useSelector(getNewListName);

  const buttonClick = () => {
    if (newListName != "") {
      const currentBoard = JSON.parse(
        window.localStorage.getItem("board") || "[[]]"
      );
      if (currentBoard.length == 1 && currentBoard[0].length === 0) {
        currentBoard[0] = [`${newListName}`];
      } else {
        currentBoard.push([`${newListName}`]);
      }
      dispatch(setBoard({ board: currentBoard }));
      window.localStorage.setItem("board", JSON.stringify(currentBoard));
    }
    dispatch(setNewListName({ newListName: "" }));
  };

  const closeClick = () => {
    dispatch(setCreatingList({ isCreatingList: false }));
  };

  const addList = () => {
    dispatch(setCreatingList({ isCreatingList: true }));
  };

  return (
    <div className={styles.addListCard}>
      {creatingList ? (
        <div>
          <Field defaultText="Enter List Title" />
          <AddComponent
            string="Add List"
            clickButton={buttonClick}
            clickClose={closeClick}
          />
        </div>
      ) : (
        <div onClick={addList}>
          <span>+ Add A List</span>
        </div>
      )}
    </div>
  );
}
