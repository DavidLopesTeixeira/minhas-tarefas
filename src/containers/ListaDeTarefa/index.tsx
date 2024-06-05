import { useSelector } from 'react-redux'

import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <Container>
      <p> 2 tarefas marcadas como: {termo}</p>
      <ul>
        {/* {itens.map((trf) => ( */}
        {filtraTarefas().map((trf) => (
          <li key={trf.titulo}>
            <Tarefa
              id={trf.id}
              descricao={trf.descricao}
              titulo={trf.titulo}
              prioridade={trf.prioridade}
              status={trf.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
