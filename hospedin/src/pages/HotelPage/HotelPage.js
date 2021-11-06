import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { getRooms } from '../../services/requests'
import { goToPurchasePage } from '../../routes/coordinator'
import { HotelPageDetails } from './HotelDetails/HotelPageDetails'
import arrowDown from '../../assets/imgs/Vectorarrow.png'
import arrowUp from '../../assets/imgs/chevron-up.png'
import calendar from '../../assets/imgs/calendar.png'
import users from '../../assets/imgs/users.png'
import check from '../../assets/imgs/fe-check-circle.png'
import {
    HotelPageContainer,
    IconeUsers, 
    BodyInfoRoom,
    Room, 
    AmmenitiesTable,
    Ammenity,
    DetailsTitle,
    DetailsBody,
    TableLables,
    MoreInfoButton,
    PrecoPorNoite,
    RoomPicture,
    MainInfo,
    HotelPageReservation,
    ReservationRoomContainer,
    DatePickerContainer,
    IndividualDatePicker,
    StyledDatePicker,
    ReservationDateContainer
} from './styled'

export const HotelPage = () => {
    const history = useHistory()
    const [rooms, setRooms] = useState([])
    const [showInfo, setShowInfo] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState('')
    const [changeArrow, setChangeArrow] = useState(false)
    const [selectedFirstDate, setSelectedFirstDate] = useState(null)
    const [selectedSecondDate, setSelectedSecondDate] = useState(null)

    // useEffect(() => {
    //     getRooms(setRooms)
    // }, [])

    const CallRooms = (date) => {
        setSelectedSecondDate(date)
        getRooms(setRooms)
    }

    //passando por params o nome e preço do quarto selecionado
    const bookRoom = (nome, preco) => {
        goToPurchasePage(history, nome, preco)
    }

    //função que controla o botão de mais informações do quarto
    const maisInfo = (itemId) => {
        setShowInfo(prevState => !prevState)
        setSelectedItemId(itemId)
        setChangeArrow(prevState => !prevState)
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
                {showInfo && selectedItemId === index && (
                    <BodyInfoRoom>
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
                                        <Ammenity key={ammenity}>
                                            <img src={check} />
                                            <DetailsBody>{ammenity}</DetailsBody>
                                        </Ammenity>
                                    )
                                })}
                            </AmmenitiesTable>
                        </div>
                    </BodyInfoRoom>
                )}

                <MoreInfoButton onClick={() => maisInfo(index)}>
                    <img src={changeArrow ? arrowUp : arrowDown} />
                    <p>Mais informações</p>
                </MoreInfoButton>
            </Room>
        )
    })

    return (
        <HotelPageContainer>
            <HotelPageDetails />
            <HotelPageReservation>
                <ReservationDateContainer>
                    <h4>Reserve a sua acomodação</h4>
                    {/* <DatePickerContainer>
                        <p>Dom, 17 Nov</p>
                        <img src={arrowDown} />
                        <p>Ter, 19 Nov</p>
                        <img src={arrowDown} />
                        <img src={calendar} />
                    </DatePickerContainer> */}
                    <DatePickerContainer>
                        <IndividualDatePicker>
                            <StyledDatePicker
                                selected={selectedFirstDate}
                                onChange={date => setSelectedFirstDate(date)}
                                minDate={new Date()}
                                dateFormat='dd/MM/yyyy'
                            />
                            <img src={arrowDown} />
                        </IndividualDatePicker>
                        <IndividualDatePicker>
                            <StyledDatePicker
                                selected={selectedSecondDate}
                                minDate={selectedFirstDate}
                                onChange={date => CallRooms(date)}
                                dateFormat='dd/MM/yyyy'
                            />
                            <img src={arrowDown} />
                        </IndividualDatePicker>
                        <img src={calendar} />
                        {/* <p>Dom, 17 Nov</p>
                        <img src={arrowDown} />
                        <p>Ter, 19 Nov</p>
                        <img src={arrowDown} />
                        <img src={calendar} /> */}
                    </DatePickerContainer>
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