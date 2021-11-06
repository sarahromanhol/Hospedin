import styled from "styled-components";


export const PurchasePageContainer = styled.div`
    display: grid;
    grid-template-columns: 463px 365px;
    column-gap: 122px;
    justify-content: center;
    padding: 40px 0px 100px 0px;
`

export const Title = styled.p`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #29415E;
    margin: 40px 0px 10px 0px;
`

export const SubTitle = styled.p`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #29415E;
    margin: 55px 0px 10px 0px;
`

export const Label = styled.label`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #29415E;
    margin: 0px 0px 10px 0px;
`

export const Input = styled.input`
    border: 1px solid #CFD9E7;
    height: 56px;
    margin: 0px 0px 15px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    padding-left: 10px;
`

export const Text = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #536580;
    margin: 0px 0px 20px 0px;
`

export const SmallText = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: #536580;
    font-style: italic;
`

export const PersonalData = styled.div`
    display: flex;
    flex-direction: column;
`


export const CVCContainer = styled.div`
    display: grid;
    grid-template-columns: 255px 96px 80px;
    grid-template-rows: 24px 56px;
    column-gap: 16px;
    row-gap: 8px;
    margin-bottom: 15px;
`

export const SelectParcelas = styled.select`
    border: 1px solid #CFD9E7;
    height: 56px;
    margin: 0px 0px 15px 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    padding-left: 10px;
    color: #536580;
`

export const ButtonConcluir = styled.button`
    background-color: #FBDE64;
    color: #29415E;
    font-family: Poppins;
    font-size: 18px;
    border-radius: 100px;
    width: 196px;
    height: 63px;
    border: none;
    cursor: pointer;
    position: relative;
    top: 225px;
    left: 130px;
    &:hover{
        background-color: #d3b94c;
    }
    &:active{
        transform: scale(0.95)
    }
`

export const PriceDetails = styled.div`
    display: grid;
    grid-template-columns: 160px 85px;
    grid-template-rows: 24px 66px;
    column-gap: 80px;
    row-gap: 15px;
`