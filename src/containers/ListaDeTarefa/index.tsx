import { useSelector } from 'react-redux'

import Tarefa from '../../Components/Tarefa'
import { Container, Resultado } from './styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo !== undefined) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      if (criterio === 'prioridade') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        tarefasFiltradas = tarefasFiltradas.filter(
          (item) => item.status === valor
        )
      }
      return tarefasFiltradas
    } else {
      return itens
    }
  }
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `"${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} Tarefa(s) encontrada(s) como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} Tarefa(s) encontrada(s) como "${criterio}=${valor}" ${complementacao}`
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeResultadoFiltragem(tarefas.length)
  return (
    <Container>
      <Resultado>{mensagem}</Resultado>
      <ul>
        {/* {itens.map((trf) => ( */}
        {tarefas.map((trf) => (
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
