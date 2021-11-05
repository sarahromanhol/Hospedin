import styled, { css } from "styled-components";

export const HotelPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    min-height: 100vh;
    margin-bottom: 100px;
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
    background-color: #FFFFFF;
    border: 1px solid #CFD9E7;
    height: 88px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 2fr 1fr 1fr 2fr;
    button {
        background-color: #FBDE64;
        color: #29415E;
        font-family: Poppins;
        font-size: 18px;
        border-radius: 100px;
        width: 127px;
        height: 63px;
        border: none;
        cursor: pointer;
        justify-self: end;
        margin-right: 20px;
        &:hover{
            background-color: #d3b94c;
        }
        &:active{
            transform: scale(0.95)
        }
    }
    div{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #29415E;
        font-weight: 400;
        font-size: 18px;
    }
`

export const RoomPicture = styled.img`
    width: 118px;
    height: 86px;
`

export const BotaoMaisInformacoes = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid #CFD9E7;
    height: 40px;
    box-shadow: 0px 1px 5px 1px #CFD9E7;
    padding-left: 10px;
    cursor: pointer;
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #536580;
        margin-left: 10px;
    }
    #arrowUp{
        display: none;
    }
`

export const Room = styled.div`
    margin-bottom: 20px;
    #maisInfo{
        display: none;
    }
`

export const DetailsTitle = styled.p`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #29415E;
    margin-bottom: 0px;
    margin-top: 0px;
    padding-top: 10px;
`

export const DetailsBody = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color:  #536580;
`

export const AmmenityContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        margin-right: 7px;
    }
`

export const AmmenitiesTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
`

export const BodyInfoRoom = styled.div`
    background-color: #FFFFFF;
`

export const IconeUsers = styled.img`
    margin-right: 10px;
`