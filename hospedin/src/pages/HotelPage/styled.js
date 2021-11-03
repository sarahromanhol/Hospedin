import styled from "styled-components";

export const HotelPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    min-height: 100vh;
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
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        text-align: left;
        color: #29415E;
        margin: 0px;
    }
`

export const DatePicker = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 434px;
    height: 56px;
    background-color: #FFFFFF;
    cursor: pointer;
    margin-top: 10px;
    border: 1px solid #CFD9E7;
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
`

export const ReservationRoomContainer = styled.div`
    width: 930px;
    margin-top: 30px;
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

export const MainInfo = styled.div`
    height: 88px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
    
`

export const RoomPicture = styled.img`
    width: 118px;
    height: 86px;
`