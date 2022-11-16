import { Button, Close } from "../../atoms";
import styles from "./addComponent.module.css";

interface Props {
  string: string;
  clickClose: (arg0?: any) => any;
  clickButton: (arg0?: any) => any;
}

export function AddComponent(props: Props) {
  const { string, clickButton, clickClose } = props;

  return (
    <div className={styles.addComponentContainer}>
      <Button string={string} click={clickButton} />
      <Close click={clickClose} />
    </div>
  );
}
