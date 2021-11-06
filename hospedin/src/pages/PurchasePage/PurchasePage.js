import react from "react";
import { useHistory, useParams } from "react-router";
import {goToFinalPage} from '../../routes/coordinator'
import { Title, Label, Input, Text, SmallText, PriceDetails, SubTitle, PersonalData, ButtonConcluir, SelectParcelas, PurchasePageContainer, CVCContainer } from './styled'

export const PurchasePage = () => {
    const params = useParams()
    const history = useHistory()

    return (
        <PurchasePageContainer>
            <PersonalData>
                <Title>Dados pessoais</Title>
                <Label>Nome completo*</Label>
                <Input />
                <Label>E-mail*</Label>
                <Input placeholder='contato@email.com' />
                <Title>Dados do cartão</Title>
                <Text>Você não será cobrado agora. Solicitamos os dados do cartão para garantir
                    a reserva e realizar a cobrança em caso de cancelamento 7 dias antes da reserva.</Text>
                <Label>Número do cartão*</Label>
                <Input placeholder='0000 0000 0000 0000' type='number' />
                <CVCContainer>
                    <Label>Titular do cartão*</Label>
                    <Label>Validade*</Label>
                    <Label>CVC*</Label>
                    <Input />
                    <Input placeholder='00/00' />
                    <Input placeholder='000' type='number' />
                </CVCContainer>
                <Label>Número de parcelas</Label>
                <SelectParcelas>
                    <option>Selecione o número de parcelas</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </SelectParcelas>
            </PersonalData>
            <div>
                <div>
                    <SubTitle>Dados de sua reserva</SubTitle>
                    <Label>Entrada:</Label>
                    <Text>domingo, 17 de novembro de 2019 a partir das 14:00</Text>
                    <Label>Saída:</Label>
                    <Text>segunda-feira, 19 de novembro até 11:00</Text>
                    <Label>Duração total da hospedagem:</Label>
                    <Text>2 diárias</Text>
                </div>
                <div>
                    <SubTitle>Resumo do preço</SubTitle>
                    <PriceDetails>
                        <Text>{params.id}</Text>
                        <Text>{params.price}</Text>
                        <div>
                            <SubTitle>Preço</SubTitle>
                            <SmallText>(para todos os hospedes)</SmallText>
                        </div>
                        <SubTitle>R$ {params.price}</SubTitle>
                    </PriceDetails>
                    <ButtonConcluir onClick={() => goToFinalPage(history)}>Concluir reserva</ButtonConcluir>
                </div>
                
            </div>
        </PurchasePageContainer>

    )
}