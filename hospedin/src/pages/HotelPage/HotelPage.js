import { HotelPageDetails } from './HotelDetails/HotelPageDetails'
import { HotelPageContainer, IconeUsers, BodyInfoRoom, Room, AmmenitiesTable, AmmenityContainer, DetailsTitle, DetailsBody, TableLables, BotaoMaisInformacoes, PrecoPorNoite, RoomPicture, MainInfo, HotelPageReservation, ReservationRoomContainer, DatePicker, ReservationDateContainer } from './styled'
import arrowDown from '../../assets/imgs/Vectorarrow.png'
import arrowUp from '../../assets/imgs/chevron-up.png'
import calendar from '../../assets/imgs/calendar.png'
import users from '../../assets/imgs/users.png'
import check from '../../assets/imgs/fe-check-circle.png'
import { getRooms } from '../../services/requests'
import { useEffect, useState } from 'react'
import { goToPurchasePage } from '../../routes/coordinator'
import { useHistory } from 'react-router'

export const HotelPage = () => {
    const history = useHistory()
    const [rooms, setRooms] = useState([])
    const [showInfo, setShowInfo] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState('')
    const [changeArrow, setChangeArrow] = useState(false)

    useEffect(() => {
        getRooms(setRooms)
    }, [])

    const bookRoom = (nome, preco) => {
        goToPurchasePage(history, nome, preco)
    }

    const maisInfo = (itemId) => {
        setShowInfo(prevState => !prevState)
        setSelectedItemId(itemId)
        setChangeArrow(prevState => !prevState)
        console.log(showInfo)
    }
    

    const renderRoomDetails = rooms.map((room, index) => {
        return (
            <Room key={room.name}>
                <MainInfo>
                    <RoomPicture src={room.picture_url} />
                    <p>{room.name}</p>
                    <p>R$ {room.amount.toFixed(2)}</p>
                    <div>
                        <IconeUsers src={users} alt='icone users' />
                        <p>{room.occupation}</p>
                    </div>
                    <button onClick={() => bookRoom(room.name, room.amount)}>Reservar</button>
                </MainInfo>
                {showInfo && selectedItemId === index && (<BodyInfoRoom>
                    <div>
                        <DetailsTitle>Sobre o quarto</DetailsTitle>
                        <DetailsBody>{room.description}</DetailsBody>
                    </div>
                    <div>
                        <DetailsTitle>Acomodações</DetailsTitle>
                        <DetailsBody>{room.accommodation}</DetailsBody>
                    </div>
                    <div>
                        <DetailsTitle>Comodidades</DetailsTitle>
                        <AmmenitiesTable>
                            {room.amenities.map((ammenity) => {
                                return (
                                    <AmmenityContainer key={ammenity}>
                                        <img src={check} />
                                        <DetailsBody>{ammenity}</DetailsBody>
                                    </AmmenityContainer>
                                )
                            })}
                        </AmmenitiesTable>
                    </div>
                </BodyInfoRoom>)}

                <BotaoMaisInformacoes onClick={() => maisInfo(index)}>
                    <img src={changeArrow ? arrowUp : arrowDown}  />
                    <p>Mais informações</p>
                </BotaoMaisInformacoes>
            </Room>
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
                        <img src={arrowDown} />
                        <p>Ter, 19 Nov</p>
                        <img src={arrowDown} />
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