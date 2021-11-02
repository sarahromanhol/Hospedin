import styled from "styled-components";


export const HotelDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 560px 270px;
    grid-template-rows: 330px;
    column-gap: 100px;
`

export const HotelName = styled.p`
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color: #29415E;
    margin: 0px 0px;
`

export const HotelDescription = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #536580;
    margin-top: 8px;
    margin-bottom: 0px;
`

export const ExpandirDescricao = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: #406591;
        text-decoration: underline;
    }
    img{
        width: 12px;
    }
`
export const ComodidadesHotel = styled.p`
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #29415E;
    margin-bottom: 0px;
`

export const ComodidadesList = styled.div`
    padding-top: 10px;
    display: grid;
    grid-template-columns: 140px 140px 140px;
    grid-template-rows: 35px 35px;
    row-gap: 7px;
    column-gap: 35px;
`

export const ComodidadeItem = styled.div`
    display: flex;
    align-items: center;

    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #536580;
        margin: 0px;
        margin-left: 7px;
    }

    img{
        align-self: left;
        min-width: 14px;
    }
`

export const MapaInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const AdressText = styled.p`
    position: absolute;
    top: 201px;
    left: 880px;
    font-family: Poppins;
    font-size: 16px;
    color: #536580;
    width: 237px;
    height: 48px;
`

export const RectangleBlue = styled.img`
    position: relative;
`

export const RectangleMapa = styled.img`
    position: absolute;
    top: 71px;
    left: 863px;
`

export const VisualizarNoMapaContainer = styled.div`
    position: absolute;
    top: 121px;
    left: 910px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 176px;
    height: 32px;
    background-color: #FFFFFF;
    border-radius: 100px;

    p{
        margin-left: 8px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: #536580;
    }
`

export const CheckInInfoContainer = styled.div`
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    color: #29415E;
    p{
        margin: 0px 0px;
    }
    div{
        margin-bottom: 20px;
    }
`
