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

export const ReservationContainer = styled.div`
    width: 951px;
    margin-top: 30px;
`

export const DatePicker = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 434px;
    background-color: #FFFFFF;
    cursor: pointer;
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
    }
`