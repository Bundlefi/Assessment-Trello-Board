import styles from './button.module.css'
interface Props{
    string: string
    style?: string
    click: (arg0: any) => any
}

export function Button(props:Props){
    const{string, style, click} = props;

    return(
        <button className = {`${styles.button} ${style}`} onClick = {click}>
            {`${string}`}
        </button>
    )


}