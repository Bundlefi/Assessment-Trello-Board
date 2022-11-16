import styles from './close.module.css'


interface Props{
    click: (arg0: any) => any
}


export function Close(props:Props){

    const {click} = props;

    return(
        <div className = {styles.close} onClick = {click}>
            <span>&#10005;</span>
        </div>
    )


}