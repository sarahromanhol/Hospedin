import { useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useHistory } from 'react-router'
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
    const [showInfo, setShowInfo] = useState(false)
    const [selectedItemId, setSelectedItemId] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [changeArrow, setChangeArrow] = useState(false)
    const {states, setters} = useContext(GlobalContext)
    const {selectedFirstDate, selectedSecondDate} = states
    const {setSelectedFirstDate, setSelectedSecondDate, setRoomPrice} = setters
    const [rooms, setRooms] = useState([])
    

    const CallRooms = (date) => {
        setSelectedSecondDate(date)
        getRooms(setRooms, setIsLoading)
    }

    //passando por params o nome e preço do quarto selecionado
    const bookRoom = (nome, preco) => {
        setRoomPrice(preco)
        goToPurchasePage(history, nome)
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
                    <RoomPicture src={room.picture_url} alt='Foto do quarto' />
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
                                            <img src={check} alt='ícone check'/>
                                            <DetailsBody>{ammenity}</DetailsBody>
                                        </Ammenity>
                                    )
                                })}
                            </AmmenitiesTable>
                        </div>
                    </BodyInfoRoom>
                )}

                <MoreInfoButton onClick={() => maisInfo(index)}>
                    <img src={changeArrow ? arrowUp : arrowDown} alt='ícone seta'/>
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
                    <DatePickerContainer>
                        <IndividualDatePicker>
                            <StyledDatePicker
                                selected={selectedFirstDate}
                                onChange={date => setSelectedFirstDate(date)}
                                minDate={new Date()}
                                dateFormat="MMM dd, yyyy"
                                placeholderText="Check in"
                            />
                            <img src={arrowDown} />
                        </IndividualDatePicker>
                        <IndividualDatePicker>
                            <StyledDatePicker
                                selected={selectedSecondDate}
                                minDate={selectedFirstDate}
                                onChange={date => CallRooms(date)}
                                dateFormat="MMM dd, yyyy"
                                placeholderText="Check out"
                            />
                            <img src={arrowDown} />
                        </IndividualDatePicker>
                        <img src={calendar} />
                    </DatePickerContainer>
                </ReservationDateContainer>
                <ReservationRoomContainer>
                    <TableLables>
                        <p>Tipo de quarto</p>
                        <PrecoPorNoite>Preço por noite</PrecoPorNoite>
                        <p>Capacidade</p>
                    </TableLables>
                    {isLoading ? <p>Aguarde, carregando...</p> : renderRoomDetails}
                </ReservationRoomContainer>
            </HotelPageReservation>
        </HotelPageContainer>
    )
}