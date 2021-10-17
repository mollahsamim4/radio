import React, { useEffect, useState } from 'react';
import Values from "values.js"
import RgbToHex from "../componets/RgbToHex"
const Color = () => {
    const [color, setColor] = useState("")
    const [list, setList] = useState(new Values(`#f15025`).all(5))
    const [error, setError] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()


        try {
            let colors = new Values(color).all(10)

            setList(colors)
            setError(false)
        }
        catch (err) {
            setError(true)

        }

    }
    return (
        <div className="row mt-5">
            <div className="col-md-10 mx-auto">
                <form onSubmit={handleSubmit}>
                    <h4 className="text-center">Color Generator</h4>
                    <div className="input-group">
                        <input type="text" name="color" value={color} onChange={(e) => setColor(e.target.value)} className={error ? "border-danger border-2 form-control form-control-lg" : "form-control form-control-lg"} />
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </div>
                </form>
                {
                    list.length > 0 ?
                        <div className="colorContainer">

                            {list.map((item, i) => {

                                return <SingleColor key={i} {...item} index={i} hexColor={item.hex} />
                            })
                            }

                        </div>

                        : null
                }

            </div>
        </div>
    );
}

const SingleColor = ({ rgb, index, weight, hexColor }) => {

    const [alert, setAlert] = useState(false)

    // let hex = RgbToHex(...rgb)

    rgb = rgb.join(",")

    const hexValue = `#${hexColor}`

    const copyValue = e => {
        navigator.clipboard.readText().then(res => {
            navigator.clipboard.writeText(hexValue)
            setAlert(true)

        })
    }

    useEffect(() => {
        let clearTime = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => {
            clearTimeout(clearTime)
        }
    }, [alert])



    return <div style={{ background: `rgb(${rgb})` }} className={`color d-flex flex-column`} onClick={(e) => copyValue()} >
        <p className={` ${index > 7 ? "text-white" : "text-dark"}`}>{weight}%</p>
        <p className={` ${index > 7 && 'text-white'}`}>{hexValue}</p>
        {alert ? <p className={index > 7 && "text-white"}>Copy to clipboard</p> : null}
    </div>

}

export default Color;
