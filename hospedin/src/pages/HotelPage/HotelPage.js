import { HotelPageDetails } from './HotelDetails/HotelPageDetails'
import { HotelPageContainer, TableLables, PrecoPorNoite, RoomPicture, MainInfo, HotelPageReservation, ReservationRoomContainer, DatePicker, ReservationDateContainer } from './styled'
import arrow from '../../assets/imgs/Vectorarrow.png'
import calendar from '../../assets/imgs/calendar.png'
import users from '../../assets/imgs/users.png'
import { getRooms } from '../../services/requests'
import { useEffect, useState } from 'react'
import { goToPurchasePage } from '../../routes/coordinator'
import { useHistory } from 'react-router'

export const HotelPage = () => {
    const history = useHistory()
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        getRooms(setRooms)
    }, [])

    const bookRoom = (nome, preco) => {
        goToPurchasePage(history, nome, preco)
    }

    const renderRoomDetails = rooms.map((room) => {
        return (
            <div key={room.name}>
                <MainInfo>
                    <RoomPicture src={room.picture_url} />
                    <p>{room.name}</p>
                    <p>R$ {room.amount}</p>
                    <div>
                        <img src={users} alt='icone users' />
                        <p>{room.occupation}</p>
                    </div>
                    <button onClick={() => bookRoom(room.name, room.amount)}>Reservar</button>
                </MainInfo>
                <div>
                    <p>Sobre o quarto</p>
                    <p>{room.description}</p>
                </div>
                <div>
                    <p>Acomodações</p>
                    <p>{room.accommodation}</p>
                </div>
                <div>
                    <p>Comodidades</p>
                    {room.amenities.map((ammenity) => {
                        return <p>{ammenity}</p>
                    })}
                </div>

            </div>
        )
    })

    return (
        <HotelPageContainer>
            <HotelPageDetails />

            <HotelPageReservation>

                <ReservationDateContainer>
                    <h4>Reserve a sua acomodação</h4>
                    <DatePicker>
                        <p>Dom, 17 Nov</p>
                        <img src={arrow} />
                        <p>Ter, 19 Nov</p>
                        <img src={arrow} />
                        <img src={calendar} />
                    </DatePicker>
                </ReservationDateContainer>

                <ReservationRoomContainer>
                    <TableLables>
                        <p>Tipo de quarto</p>
                        <PrecoPorNoite>Preço por noite</PrecoPorNoite>
                        <p>Capacidade</p>
                    </TableLables>
                    {renderRoomDetails}
                </ReservationRoomContainer>

            </HotelPageReservation>
        </HotelPageContainer>
    )
}