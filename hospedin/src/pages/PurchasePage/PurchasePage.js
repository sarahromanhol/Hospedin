import react from "react";
import { useParams } from "react-router";
import {Title, Label, Input, Text} from './styled'

export const PurchasePage = () => {
    const params = useParams()

    return (
        <div>
            <div>
                <Title>Dados pessoais</Title>
                <Label>Nome completo*</Label>
                <Input />
                <Label>E-mail*</Label>
                <Input placeholder='contato@email.com' />
            </div>
            <div>
                <Title>Dados do cartão</Title>
                <Text>Você não será cobrado agora. Solicitamos os dados do cartão para garantir
                    a reserva e realizar a cobrança em caso de cancelamento 7 dias antes da reserva.</Text>
                <Label>Número do cartão*</Label>
                <Input placeholder='0000 0000 0000 0000' />
                <Label>Titular do cartão*</Label>
                <Input />
                <Label>Validade*</Label>
                <Input />
                <Label>CVC*</Label>
                <Input />
                <Label>Número de parcelas</Label>
                <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
            </div>
            <div>
                <p>Dados de sua reserva</p>
                <p>Entrada:</p>
                <Text>domingo, 17 de novembro de 2019 a partir das 14:00</Text>
                <p>Saída:</p>
                <Text>segunda-feira, 19 de novembro até 11:00</Text>
                <p>Duração total da hospedagem:</p>
                <Text>2 diárias</Text>
            </div>
            <div>
                <Text>{params.id}</Text>
                <Text>{params.price}</Text>
            </div>
        </div>

    )
}