import FiltroCard from '../../Components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendentes" contador={1} />
        <FiltroCard legenda="concluidas" contador={2} />
        <FiltroCard legenda="urgentes" contador={3} />
        <FiltroCard legenda="importantes" contador={4} />
        <FiltroCard legenda="normal" contador={5} />
        <FiltroCard ativo legenda="todas" contador={6} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
