import style from "./card.module.css";

interface Props {
  title: string;
}

export function Card(props: Props) {
  const { title } = props;
  return (
    <div className={style.card}>
      <span>{title}</span>
    </div>
  );
}
