import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { setNewListName } from "../../../../Redux";

interface Props{
    defaultText:string
}


export function Field(props:Props) {
    const {defaultText} = props;

    const [field, setField] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e:string)=> {
       
        setField(e);
        dispatch(setNewListName({newListName:e}));
    }

return(
    <form>
        <input
        type="text"
        value = {field}
        placeholder = {defaultText}
        onChange = {(e)=> handleChange(e.target.value)}
        >
        </input>
    </form>
)
}