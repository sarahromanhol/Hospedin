import { HotelPageDetails } from './HotelPageDetails'
import { HotelPageContainer, HotelPageReservation, DatePicker, ReservationContainer } from './styled'
import arrow from '../../assets/imgs/Vectorarrow.png'
import calendar from '../../assets/imgs/calendar.png'

export const HotelPage = () => {
    return (
        <HotelPageContainer>
            <HotelPageDetails />
            <HotelPageReservation>
                <ReservationContainer>
                    <p>Reserve a sua acomodação</p>
                <DatePicker>
                    <p>Dom, 17 Nov</p>
                    <img src={arrow} />
                    <p>Ter, 19 Nov</p>
                    <img src={arrow} />
                    <img src={calendar} />
                </DatePicker>
                </ReservationContainer>
            </HotelPageReservation>
        </HotelPageContainer>
    )
}