import React, { Component } from 'react';
import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'
import { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import radioBg from "../images/radio.jpg"
import { useRef } from 'react';
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa"
import Loading from '../componets/Loading';
import { countryCode } from '../wiki';
import Nostation from '../componets/NoStation';
class Blog extends Component {

    constructor() {
        super()
        this.audioRef = React.createRef()
        this.state = {
            radio: [],
            loading: false,
            audio: null,
            play: false,
            countryCodes: [],
            countryCode: "SA"
        }
    }


    getData = async e => {
        this.setState({ loading: true })
        const api = new RadioBrowserApi('My Radio App')
        const data = await api.searchStations({
            countryCode: this.state.countryCode,
            limit: 100,
            offset: 0 // this is the default - can be omited


        })

        let filterAudio = data.filter(data => data.codec == "MP3")

        this.setState({
            radio: [...new Set(filterAudio)],
            loading: false
        })

    }

    componentDidMount() {
        let newCountry = countryCode.filter(key => Object.keys(key).length > 0)

        this.setState({
            countryCodes: newCountry
        })
        this.getData()
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.countryCode !== this.state.countryCode) {

            this.getData()
        }
        return false
    }



    playRadio = stream => {
        this.setState({
            audio: stream,
            play: true
        }, () => {
            let audio = this.audioRef.current
            audio.play()
        })
    }







    render() {






        return (
            <div className="radioContainer">


                <div className="audioContainer">
                    <div className="filterRadio">
                        <select name="country_code" value={this.state.countryCode} className="form-select form-select-lg" onChange={(e) => { this.setState({ countryCode: e.target.value }) }}>
                            {this.state.countryCodes.map((item, index) => {
                                return <option value={item.country_code} key={index}>{item.country_code}</option>
                            })}
                        </select>
                    </div>
                    {this.state.audio ?


                        <div className="audioContent">
                            <audio controls src={this.state.audio} ref={this.audioRef}></audio>
                        </div>

                        : null
                    }
                </div>



                {

                    this.state.loading ? <div className="loading-center"> <Loading /></div>
                        :

                        this.state.radio.length > 0 ? this.state.radio.map(item => {

                            return <SingleRadio key={item.id} {...item} playRadio={this.playRadio} time={item.clickTimestamp} play={this.state.play} />
                        })
                            :
                            <Nostation />
                }

            </div >
        )
    }
}


const SingleRadio = (props) => {
    const { codec, country, favicon, language, name, urlResolved, playRadio, time, play } = props
    const date = time.getDate()
    const hours = time.getHours()
    const minute = time.getMinutes()
    const second = time.getSeconds()

    return (
        <div className="radio" >
            <div className="imgContainer">
                <img src={favicon || radioBg} alt={name} className="img-fluid" />
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

SingleRadio.propTypes = {
    favicon: PropTypes.string.isRequired
}

export default Blog;
