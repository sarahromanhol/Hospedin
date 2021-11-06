import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useHistory, useParams } from "react-router";
import { goToFinalPage } from '../../routes/coordinator'
import { months, daysOfWeek } from "../../constants/dates";
import {
    Title,
    Label,
    Input,
    Text,
    SmallText,
    PriceDetails,
    SubTitle,
    PersonalData,
    ButtonConcluir,
    SelectParcelas,
    PurchasePageContainer,
    CVCContainer,
    PurchaseDetails,
    PurchaseDetailsTitle,
    PriceResume
} from './styled'


export const PurchasePage = () => {
    const params = useParams()
    const history = useHistory()
    const { states } = useContext(GlobalContext)
    const { selectedFirstDate, selectedSecondDate, roomPrice } = states
    const days = (selectedSecondDate - selectedFirstDate) / (60 * 60 * 24 * 1000)

    //Função que verifica se os dados foram inseridos no formulário e conclui a compra
    const onSubmitForm = (event) => {
        event.preventDefault()
        goToFinalPage(history)
    }


    //data de check in formatada
    let formatedCheckInDate = selectedFirstDate && (
        daysOfWeek[(selectedFirstDate.getDay())] +
        ", " +
        (selectedFirstDate.getDate()) +
        " de " +
        months[(selectedFirstDate.getMonth())] +
        " de " +
        selectedFirstDate.getFullYear()
    );
    

    //data de check out formatada
    let formatedCheckOutDate = selectedSecondDate && (
        daysOfWeek[(selectedSecondDate.getDay())] +
        ", " +
        (selectedSecondDate.getDate()) +
        " de " +
        months[(selectedSecondDate.getMonth())]
    );


    return (
        <PurchasePageContainer>
            <PersonalData onSubmit={onSubmitForm}>
                <Title>Dados pessoais</Title>
                <Label>Nome completo*</Label>
                <Input
                    type='name'
                    required
                />
                <Label>E-mail*</Label>
                <Input
                    type='email'
                    placeholder='contato@email.com'
                    required
                />
                <Title>Dados do cartão</Title>
                <Text>Você não será cobrado agora. Solicitamos os dados do cartão para garantir
                    a reserva e realizar a cobrança em caso de cancelamento 7 dias antes da reserva.</Text>
                <Label>Número do cartão*</Label>
                <Input
                    type='number'
                    required
                    placeholder='0000 0000 0000 0000'
                />
                <CVCContainer>
                    <Label for='titularDoCartao'>Titular do cartão*</Label>
                    <Label for='validade'>Validade*</Label>
                    <Label for='cvc'>CVC*</Label>
                    <Input
                        type='name'
                        id='titularDoCartao'
                        required
                    />
                    <Input 
                        type='text'
                        id='validade'
                        required
                        placeholder='00/00'
                    />
                    <Input
                        type='password'
                        id='cvc'
                        required
                        placeholder='000'
                    />
                </CVCContainer>
                <Label>Número de parcelas</Label>
                <SelectParcelas>
                    <option>Selecione o número de parcelas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </SelectParcelas>
                <ButtonConcluir
                    type='submit'>
                    Concluir reserva
                </ButtonConcluir>
            </PersonalData>
            <div>
                <PurchaseDetails>
                    <PurchaseDetailsTitle>Dados de sua reserva</PurchaseDetailsTitle>
                    <Label>Entrada:</Label>
                    <Text>{formatedCheckInDate} a partir das 14:00</Text>
                    <Label>Saída:</Label>
                    <Text>{formatedCheckOutDate} até 11:00</Text>
                    <Label>Duração total da hospedagem:</Label>
                    <Text>{days > 1 ? `${days} diárias` : `${days} diária`}</Text>
                </PurchaseDetails>
                <PriceResume>
                    <PurchaseDetailsTitle>Resumo do preço</PurchaseDetailsTitle>
                    <PriceDetails>
                        <Text>{params.id}</Text>
                        <Text>{roomPrice && roomPrice.toFixed(2)}</Text>
                        <div>
                            <SubTitle>Preço</SubTitle>
                            <SmallText>(para todos os hospedes)</SmallText>
                        </div>
                        <SubTitle>R$ {roomPrice && roomPrice.toFixed(2)}</SubTitle>
                    </PriceDetails>
                </PriceResume>
            </div>
        </PurchasePageContainer>

    )
}