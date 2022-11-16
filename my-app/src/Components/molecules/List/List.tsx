import { Card, Field } from "../../atoms";
import { AddComponent } from "../../molecules";
import { AddCard } from "../../organisms";
import styles from "./list.module.css";

interface Props {
  title: string;
  cards: string[];
  cardKey: number;
}

export function List(props: Props) {
  const { title, cards, cardKey } = props;

  return (
    <div className={styles.list}>
      <div className={styles.listTitle}>{title}</div>

      {cards.map((card) => (
        <Card key={card} title={card} />
      ))}
      <AddCard cardKey={cardKey}></AddCard>
    </div>
  );
}
