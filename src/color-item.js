import styles from './styles/ColorSelect/ColorSelect.module.scss'

const ColorItem = ({ color, ...rest }) => (
  <div style={{ background: color }} className={styles.coloritem}></div>
)
export default ColorItem
