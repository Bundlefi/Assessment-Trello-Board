import {Card, Field} from '../../atoms'
import {AddComponent} from '../../molecules';


interface Props{
    title: string,
    cards: string[]
}




export function List(props:Props){

const {title, cards} = props;

return(
    <div>
        <span>{title}</span>
       
    {cards.map(card => <Card key = {card} title={card}/>)}
  
    </div>
)

}
