export const goToHotelPage = (history) => {
    history.push("/")
}

export const goToPurchasePage = (history, id) => {
    history.push(`/purchase/${id}`)
}

export const goToFinalPage = (history) => {
    history.push("/concluded")
}