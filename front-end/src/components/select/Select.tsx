import { ChangeEvent } from 'react'
import styles from './Select.module.css'
interface Props {
  values?: string[]
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void
}
const Select = ({values, onChange}: Props) => {

  return (
    <div>
        <select className={styles.select} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
          {values?.map((value: string, index:number) => (
              <option key={index} value={value}>{value}</option>
          ))}
        </select>
    </div>
  )
}

export default Select