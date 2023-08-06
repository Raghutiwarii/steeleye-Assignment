import styles from "./ListRow.module.css";
const ListCell = ({ children ,handle,index}) => {
  return <tr className={styles.cell}
  onClick={()=>handle(index)}
  >{children}</tr>;
};
export default ListCell;
