import { HotelPageDetails } from './HotelPageDetails'
import { HotelPageContainer, HotelPageReservation } from './styled'


export const HotelPage = () => {
    return (
        <HotelPageContainer>
            <HotelPageDetails />
            <HotelPageReservation>
                reserva
            </HotelPageReservation>
            
        </HotelPageContainer>
    )
}