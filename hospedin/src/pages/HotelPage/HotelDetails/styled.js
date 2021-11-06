import styled from "styled-components";


export const HotelDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 560px 270px;
    grid-template-rows: 330px;
    column-gap: 100px;
`

export const HotelName = styled.p`
    margin: 0px 0px;
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    color: #29415E;
`

export const HotelDescription = styled.p`
    margin-top: 8px;
    margin-bottom: 0px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #536580;
`

export const ExpandButton = styled.div`
    width: 175px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    p{
        font-family: Roboto;
        font-size: 12px;
        font-weight: 400;
        color: #406591;
        text-decoration: underline;
    }
    img{
        min-width: 10px;
    }
`

export const AmenitiesHotel = styled.p`
    margin-bottom: 0px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    color: #29415E;
`

export const AmenitiesList = styled.div`
    padding-top: 10px;
    display: grid;
    grid-template-columns: 140px 140px 140px;
    grid-template-rows: 35px 35px;
    row-gap: 7px;
    column-gap: 35px;
`

export const Amenity = styled.div`
    display: flex;
    align-items: center;

    p{
        margin: 0px;
        margin-left: 7px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: #536580;
    }

    img{
        min-width: 14px;
        align-self: left;
    }
`

export const MapaInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AdressText = styled.p`
    background-color: #F3F6FD;
    margin-top: 0px;
    padding: 18px 0px 8px 10px;
    max-width: 269px;
    height: 60px;
    font-family: Poppins;
    font-size: 16px;
    color: #536580;
`

export const VisualizarNoMapaContainer = styled.div`
    background-color: #FFFFFF;
    width: 176px;
    height: 32px;
    position: absolute;
    top: 121px;
    left: 910px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;

    p{
        margin-left: 8px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: #536580;
    }
`

export const CheckInInfoContainer = styled.div`
    margin-top: 20px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    color: #29415E;
    p{
        margin: 0px 0px;
    }
    div{
        margin-bottom: 20px;
    }
`
