import styled from "styled-components";
import DatePicker from "react-datepicker";

export const HotelPageContainer = styled.div`
    margin-bottom: 100px;
    padding-top: 70px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HotelPageReservation = styled.div`
    background-color: #F3F6FD;
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ReservationDateContainer = styled.div`
    width: 930px;
    margin-top: 30px;
    h4{
        margin: 0px;
        font-family: Poppins;
        font-size: 24px;
        font-weight: 700;
        color: #29415E;
    }
`

export const DatePickerContainer = styled.div`
    background-color: #FFFFFF;
    margin-top: 10px;
    width: 434px;
    height: 56px;
    border: 1px solid #CFD9E7;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    p{
        font-family: Roboto;
        font-size: 16px;
        color: #536580;
    }
`

export const IndividualDatePicker = styled.div`
    display: flex;
    align-items: center;
`

export const StyledDatePicker = styled(DatePicker)`
    border: none;
    width: 150px;
    height: 50px;
    font-family: Roboto;
    font-size: 16px;
    color: #536580;
`

export const ReservationRoomContainer = styled.div`
    margin-top: 30px;
    width: 930px;
`

export const TableLables = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    p{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        color: #29415E;
    }
`

export const PrecoPorNoite = styled.p`
    text-align: end;
    margin-right: 15px;
`

export const Room = styled.div`
    margin-bottom: 20px;
`   

export const MainInfo = styled.div`
    background-color: #FFFFFF;
    height: 88px;
    border: 1px solid #CFD9E7;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
    button {
        background-color: #FBDE64;
        margin-right: 20px;
        width: 127px;
        height: 63px;
        border-radius: 100px;
        border: none;
        justify-self: end;
        font-family: Poppins;
        font-size: 18px;
        color: #29415E;
        cursor: pointer;
        &:hover{
            background-color: #d3b94c;
        }
        &:active{
            transform: scale(0.95)
        }
    }
    div{
        margin-left: 20px;
        display: flex;
        align-items: center;
    }
    p{
        font-family: Roboto;
        font-weight: 400;
        font-size: 18px;
        color: #29415E;
    }
`

export const RoomPicture = styled.img`
    width: 118px;
    height: 86px;
`

export const MoreInfoButton = styled.a`
    background-color: #FFFFFF;
    padding-left: 10px;
    height: 40px;
    border: 1px solid #CFD9E7;
    box-shadow: 0px 1px 5px 1px #CFD9E7;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    p{
        margin-left: 10px;
        font-family: Roboto;
        font-weight: 400;
        font-size: 14px;
        color: #536580;
    }
`

export const BodyInfoRoom = styled.div`
    background-color: #FFFFFF;
`

export const DetailsTitle = styled.p`
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 10px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    color: #29415E;
`

export const DetailsBody = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    color:  #536580;
`
export const AmmenitiesTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
`

export const Ammenity = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-right: 7px;
    }
`

export const IconeUsers = styled.img`
    margin-right: 10px;
`