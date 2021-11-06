import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";

const GlobalState = (props) => {
    // Adicionar estados importantes para o app todo.
    const [selectedFirstDate, setSelectedFirstDate] = useState(null)
    const [selectedSecondDate, setSelectedSecondDate] = useState(null)
    const [roomPrice, setRoomPrice] = useState('')

    const states = {selectedFirstDate, selectedSecondDate, roomPrice}
    const setters = {setSelectedFirstDate, setSelectedSecondDate, setRoomPrice}

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;