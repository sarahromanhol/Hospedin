import react from "react";
import { useParams } from "react-router";

export const PurchasePage = () => {
    const params = useParams()

    return (
        <div>
            <div>
                <p>Dados pessoais</p>
                <label>Nome completo*</label>
                <input />
                <label>E-mail*</label>
                <input placeholder='contato@email.com' />
            </div>
            <div>
                <p>Dados do cartão</p>
                <p>Você não será cobrado agora. Solicitamos os dados do cartão para garantir
                    a reserva e realizar a cobrança em caso de cancelamento 7 dias antes da reserva.</p>
                <label>Número do cartão*</label>
                <input placeholder='0000 0000 0000 0000' />
                <label>Titular do cartão*</label>
                <input />
                <label>Validade*</label>
                <input />
                <label>CVC*</label>
                <input />
                <label>Número de parcelas</label>
                <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                </select>
            </div>
            <div>
                <p>Dados de sua reserva</p>
            </div>
            <div>
                <p>{params.id}</p>
                <p>{params.price}</p>
            </div>
        </div>

    )
}