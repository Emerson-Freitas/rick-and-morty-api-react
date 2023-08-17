import styles from './Input.module.css'

interface Props {
  placeHolder: string
  width?: string
}
const Input = ({placeHolder, width}: Props) => {
  return (
    <div className={styles.input_wrapper}>
      <input style={{width: width}} className={styles.input} type="text" name="input" placeholder={placeHolder} />
    </div>
  )
  
}

export default Input