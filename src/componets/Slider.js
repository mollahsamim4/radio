import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { slide } from "../slide"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { style } from 'dom-helpers';
const Slider = () => {
    const [index, setIndex] = useState(0)
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        if (index > slide.length - 1) {
            setIndex(0)
        }
        if (index < 0) {
            setIndex(slide.length - 1)
        }



    }, [index])

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         setIndex(index + 1)
    //     }, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [index])

    const handleClick = bool => {
        setTimeout(() => {
            setIsShow(bool)
        }, 500)
    }

    useEffect(() => {
        handleClick(true)
        return () => {
            handleClick(false)
        }
    }, [index])


    return (
        <>
            <section className="banner">

                {
                    slide.map((item, itemIndex) => {
                        const { id, img, title, subtitle } = item
                        let position = "nextSlide"
                        if (itemIndex === index) {
                            position = "activeSlide"
                        }

                        if (itemIndex === index - 1 || (index === 0 && itemIndex === slide.length - 1)) {
                            position = "lastSlide"
                        }


                        return < Article key={item.id} img={img} className={position}  >
                            {
                                isShow ? <div className={`content `
                                } >
                                    <h4>{title}</h4>
                                    <p>{subtitle}</p>
                                </div>
                                    : null
                            }
                        </Article >
                    })
                }
                <div className="btnContainer">
                    <button className="prev" onClick={() => { setIndex(index - 1); handleClick() }}>
                        <FaChevronLeft className="icon" />
                    </button>
                    <button className="next" onClick={() => { setIndex(index + 1); handleClick() }}>
                        <FaChevronRight className="icon" />
                    </button>
                </div>
            </section >

        </>
    )
}

const Article = styled.article`
            position: absolute;
          
            transition: all 0.6s linear;
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 100%;
          
            background:url(${props => props.img})
`

// const Section = styled.section`
// .lastSlide{
//     transform:translate(${Math.random() * 200}%,${Math.random() * 150}%)
// }
// `

export default Slider;
