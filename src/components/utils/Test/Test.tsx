import styles from './style.module.scss'

export type TestProps = {
  background: '#29a027' | '#dd2121' | '#fc0' | '1164cc' | '#1164cc'
}

export const Test = ({
  background = '#29a027'
}: TestProps) => {
  return (
    <div className={styles.test} style={{background}}>
      <div className={styles.text}>
        Test Components
      </div>
    </div>
  )
}
