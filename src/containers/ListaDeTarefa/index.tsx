import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'
import * as enums from '../../Utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino A',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  }
]

const ListaDeTarefas = () => (
  <Container>
    <ul>
      {tarefas.map((trf) => (
        <li key={trf.titulo}>
          <Tarefa
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

export default ListaDeTarefas
