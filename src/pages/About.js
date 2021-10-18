import React, { useReducer } from 'react';
import imgOne from "../images/img/product-1.png"
import imgtwo from "../images/img/product-2.png"
import imgThree from "../images/img/product-3.png"
const data = [
    { id: 1, title: "Samsung", image: imgOne, price: 100, count: 1 },
    { id: 2, title: "Apple", image: imgtwo, price: 300, count: 1 },
    { id: 3, title: "vivo", image: imgThree, price: 400, count: 1 },
]
const defaultState = {
    product: data
}

const reducer = ((state, action) => {
    return { ...state.product }
})


const About = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    return (
        state.product.map(item => {
            return <SingleProduct {...item} />
        })

    )
}

const SingleProduct = (item) => {
    const { id, title, image, price, count } = item
    return (
        <>



        </>
    )
}

export default About;
