import axios from "axios"

const baseURI = 'api/'

export const login = (data) => {
  axios.post(baseURI+'login',data)
}