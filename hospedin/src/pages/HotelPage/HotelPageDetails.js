import { HotelDetailsContainer, HotelName, HotelDescription, ExpandirDescricao, ComodidadesHotel, ComodidadesList, ComodidadeItem, MapaInfoContainer, RectangleBlue, RectangleMapa, VisualizarNoMapaContainer, AdressText, CheckInInfoContainer } from './styledDetails'
import arrow from '../../assets/imgs/Vectorarrow.png'
import wifi from '../../assets/imgs/wifi.png'
import piscina from '../../assets/imgs/piscina.png'
import recepcao from '../../assets/imgs/recepcao.png'
import restaurante from '../../assets/imgs/restaurante.png'
import toalha from '../../assets/imgs/toalha.png'
import mapaIcone from '../../assets/imgs/mapa.png'
import rectangleBlue from '../../assets/imgs/RectangleBlue.png'
import rectangleMapa from '../../assets/imgs/mapaFoto.png'


export const HotelPageDetails = () => {
    return (
        <HotelDetailsContainer>
            <div>
                <HotelName>Pousada Na Tribu's</HotelName>
                <HotelDescription>Próximo aos setores de entretenimento e empresarial, o Plaza Bittar Hotel fica a 1 quarteirão do Shopping Brasília e a 15 minutos de carro do Aeroporto Internacional de Brasília. Os quartos dispõem de ar-condicionado, e o Wi-Fi...</HotelDescription>
                <ExpandirDescricao>
                    <img src={arrow} />
                    <p>Expandir descrição do hotel</p>
                </ExpandirDescricao>
                <ComodidadesHotel>Comodidades do hotel</ComodidadesHotel>
                <ComodidadesList>
                    <ComodidadeItem>
                        <img src={wifi} />
                        <p>Wi-Fi gratuito</p>
                    </ComodidadeItem>
                    <ComodidadeItem>
                        <img src={restaurante} />
                        <p>Restaurante</p>
                    </ComodidadeItem>
                    <ComodidadeItem>
                        <img src={recepcao} />
                        <p>Recepção 24h</p>
                    </ComodidadeItem>
                    <ComodidadeItem>
                        <img src={toalha} />
                        <p>Toalha de banho</p>
                    </ComodidadeItem>
                    <ComodidadeItem>
                        <img src={piscina} />
                        <p>Piscina</p>
                    </ComodidadeItem>
                </ComodidadesList>
            </div>

            <div>
                <MapaInfoContainer>
                    <RectangleBlue src={rectangleBlue} />
                    <RectangleMapa src={rectangleMapa} />
                    <VisualizarNoMapaContainer>
                        <img src={mapaIcone} />
                        <p>Visualizar no mapa</p>
                    </VisualizarNoMapaContainer>
                    <AdressText>Av. Porto Novo, 764-806 - Ibiraquera, Imbituba - SC</AdressText>
                </MapaInfoContainer>
                <CheckInInfoContainer>
                    <div>
                        <p><b>Check in:</b> 14:00 às 17:00</p>
                        <p><b>Check out:</b> até às 11:00</p>
                    </div>
                    <p><b>Cancelamento grátis:</b></p>
                    <p>até 7 dias antes da sua reserva.</p>
                </CheckInInfoContainer>
            </div>
        </HotelDetailsContainer>
    )
}