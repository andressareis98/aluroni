import filtros from './filtros.json'
import styles from './Filtros.module.scss'

type opcao = typeof filtros[0]

export function Filtros(){

    function selecionarFiltro(opcao: opcao){

    }
    return(
        <div className={styles.filtros}>
            {filtros.map((opcao)=> (
                <button className={styles.filtros__filtro} key = {opcao.id} onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}