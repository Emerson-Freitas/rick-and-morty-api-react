import styles from './Input.module.css'

interface Props {
  placeHolder: string
}
const Input = ({placeHolder}: Props) => {
  return (
    <div className={styles.input_wrapper}>
      <input className={styles.input} type="text" name="input" placeholder={placeHolder} />
    </div>
  )
  
}

export default Input