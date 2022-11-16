import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCardNewName, setNewListName } from "../../../../Redux";

interface Props {
  defaultText: string;
  dispatchFunction: string;
}

export function Field(props: Props) {
  const { defaultText, dispatchFunction } = props;

  const [field, setField] = useState("");
  const dispatch = useDispatch();

  //Is anti-pattern, set to functions later
  const handleChange = (e: string) => {
    setField(e);
    if (dispatchFunction === "newList") {
      dispatch(setNewListName({ newListName: e }));
    } else if (dispatchFunction === "newCard") {
      dispatch(setCardNewName({ newCardName: e }));
    }
  };

  return (
    <form>
      <input
        type="text"
        value={field}
        placeholder={defaultText}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </form>
  );
}
