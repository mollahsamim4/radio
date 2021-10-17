import React, { useState } from 'react';
import lorem from "../lorem"
const Generatelorem = () => {
    const [index, setIndex] = useState(0)
    const [para, setPara] = useState([])
    const handleSubmit = e => {
        e.preventDefault()

        let count = parseInt(index)
        let tempLorem = [...lorem]
        if (count > tempLorem.length - 1) {
            setIndex(tempLorem.length - 1)
            tempLorem = tempLorem.slice(0, count)
        }
        if (count == 0 || count < 0 || count == "") {
            tempLorem = tempLorem.slice(0, 1)
        }

        else {
            tempLorem = tempLorem.slice(0, count)
        }

        console.log(typeof count)
        setPara(tempLorem)


    }
    return (
        <div className="row p-5">
            <div className="col-md-10 mx-auto shadow-sm p-1 border">
                <form onSubmit={handleSubmit} className="">
                    <div className="input-group">
                        <input type="number" name="para" id="para" value={index} onChange={(e) => setIndex(e.target.value)} className="form-control" />
                        <div className="input-group-text">
                            <button type="submit" name="submit" className="btn btn-success">Generate</button>
                        </div>
                    </div>
                </form>
                {
                    para.length > 0 ?
                        para.map((item, index) => {
                            return <div className="para" key={index}>
                                <p>{item}</p>
                            </div>
                        })
                        : null
                }
            </div>
        </div>

    );
}

export default Generatelorem;
