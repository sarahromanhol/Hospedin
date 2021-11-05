export const goToHotelPage = (history) => {
    history.push("/")
}

export const goToPurchasePage = (history, id, price) => {
    history.push(`/purchase/${id}/${price}`)
}

export const goToFinalPage = (history) => {
    history.push("/concluded")
}