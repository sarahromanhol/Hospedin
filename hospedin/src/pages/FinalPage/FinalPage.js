import illustration from '../../assets/imgs/illustrationfinalPage.png'
import {
    FinalPageContainer,
    Title,
    Body
} from './styled'

export const FinalPage = () => {
    return(
        <FinalPageContainer>
            <img src={illustration} />
            <Title>Sua reserva foi feita com sucesso!</Title>
            <Body>Você receberá um e-mail com a confirmação e mais detalhes sobre sua reserva. Estamos ansiosos para recebê-lo!</Body>
        </FinalPageContainer>
    )
}