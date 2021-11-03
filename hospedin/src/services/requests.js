import axios from "axios";
import { url } from "../constants/urls";

export const getRooms = (setData) => {
    axios.get(url)
    .then((res)=> {
        console.log(res)
        setData(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}