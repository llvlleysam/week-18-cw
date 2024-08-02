import { httpRequest } from "../services"

const fetchProductsURL = "/products";
const fetchOrderURL = "/order"

export const fetchProducts = async () => {
    const response = await httpRequest.get(`${fetchProductsURL}`)
    return response.data
}

export const fetchOrder = async () => {
    const response = await httpRequest.get(`${fetchOrderURL}`)
    return response.data
}

export const postOrder = async (newProduct) => {
    console.log(newProduct)
    const response = await httpRequest.post(`${fetchOrderURL}`,newProduct)
    return response.data
}

