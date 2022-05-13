import itens from './itens.json'
import { Item } from './Item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react'

interface Props{
    busca: string,
    filtro: number | null,
    ordenador: string
}

export function Itens({busca, filtro, ordenador} : Props) {
    const [lista, setLista] = useState(itens)

    const testaBusca = (title: string) =>{
        const regex = new RegExp(busca, 'i')
        return regex.test(title)
    }

    const testaFiltro = (id: number) =>{
        if(filtro !== null) return filtro === id
        return true
    }


    useEffect(() => {
        const novaLista = itens.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
        setLista(novaLista)
    },[busca, filtro])

    return(
        <div className={styles.itens}>
            {lista.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}