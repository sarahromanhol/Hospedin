import styled from "styled-components";


export const PurchasePageContainer = styled.div`
    padding: 40px 0px 100px 0px;
    display: grid;
    grid-template-columns: 463px 365px;
    column-gap: 122px;
    justify-content: center;
`

export const Title = styled.p`
    margin: 40px 0px 10px 0px;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #29415E;
`

export const SubTitle = styled.p`
    margin: 55px 0px 10px 0px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #29415E;
`

export const Label = styled.label`
    margin: 0px 0px 10px 0px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: #29415E;
`

export const Input = styled.input`
    margin: 0px 0px 15px 0px;
    padding-left: 10px;
    height: 56px;
    border: 1px solid #CFD9E7;
    font-family: Roboto;
    font-size: 18px;
`

export const Text = styled.p`
    margin: 0px 0px 20px 0px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: #536580;
`

export const SmallText = styled.div`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    font-style: italic;
    color: #536580;
`

export const PersonalData = styled.form`
    display: flex;
    flex-direction: column;
`


export const CVCContainer = styled.div`
    margin-bottom: 15px;
    display: grid;
    grid-template-columns: 255px 96px 80px;
    grid-template-rows: 24px 56px;
    column-gap: 16px;
    row-gap: 8px;
`

export const SelectParcelas = styled.select`
    margin: 0px 0px 15px 0px;
    padding-left: 10px;
    height: 56px;
    border: 1px solid #CFD9E7;
    font-family: Roboto;
    font-size: 18px;
    color: #536580;
`

export const ButtonConcluir = styled.button`
    background-color: #FBDE64;
    width: 196px;
    height: 63px;
    position: relative;
    top: -75px;
    left: 750px;
    font-family: Poppins;
    font-size: 18px;
    border-radius: 100px;
    color: #29415E;
    border: none;
    cursor: pointer;
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

export const PurchaseDetails = styled.div`
    background-color: #F3F6FD;
    margin-top: 55px;
    width: 340px;
    min-height: 240px;
    padding: 15px 0px 0px 20px;
`

export const PurchaseDetailsTitle = styled.p`
    margin: 0px 0px 10px 0px;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    color: #29415E;
`

export const PriceResume = styled.div`
    padding: 15px  0px 10px 20px;
    width: 340px;
    height: 195px;
    border: 1px solid #CFD9E7;
    margin-top: 50px;
`