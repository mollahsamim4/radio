import { useEffect, useState } from "react"
import PropTypes from "prop-types";
import radioBg from "../images/radio.jpg"

import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa"

const SingleRadio = (props) => {
    const { codec, country, favicon, language, name, urlResolved, playRadio, time, play } = props
    const date = time.getDate()
    const hours = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()
    const [error, setError] = useState(true)

    const checkImg = async img => {

        try {

            let data = await fetch(img, { mode: "no-cors" })

            if (!data.ok) {

                throw new Error("there was an Error")
            }

            setError(false)

        }
        catch (err) {
            setError(true)

        }
    }

    useEffect(() => {

        checkImg(favicon)
    }, [])


    return (
        <div className="radio" >
            <div className="imgContainer">

                <img src={error && favicon || radioBg} alt={name} className="radio_img" />
                <button className="playBtn" onClick={() => playRadio(urlResolved)}>
                    {
                        play ? <FaRegPlayCircle className="icon" /> : <FaRegPauseCircle className="icon" />
                    }
                </button>
            </div>
            <div className="radioBottom">
                <p>{`${name}`}</p>
                <p>{country}</p>
                {/* <div className="time">
                    {`${hours}:${minute}:${second}`}
                </div> */}
            </div>
        </div >
    )
}

// SingleRadio.propTypes = {
//     favicon: radioBg
// }

export default SingleRadio