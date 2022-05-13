import itens from './itens.json'
import { Item } from './Item'
import styles from './Itens.module.scss'

export function Itens() {
    return(
        <div className={styles.itens}>
            {itens.map(item => (
                <Item key={item.id}/>
            ))}
        </div>
    )
}