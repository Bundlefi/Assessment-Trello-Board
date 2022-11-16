interface Props {
  title: string;
}

export function Card(props: Props) {
  const { title } = props;
  return (
    <div>
      <span>{title}</span>
    </div>
  );
}
