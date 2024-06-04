import Tarefa from '../../Components/Tarefa'
import { Container } from './styles'
const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver a aula 3 da EBAC',
    prioridade: 'Importante',
    status: 'pendente'
  },
  {
    titulo: 'Pagar a conta de internet',
    descricao: 'Baixar fatura no Gmail',
    prioridade: 'urgente',
    status: 'concluida'
  },
  {
    titulo: 'Ir para a academia',
    descricao: 'Fazer treino A',
    prioridade: 'Importante',
    status: 'pendente'
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
