import React, { Component, useState } from 'react';
import { RadioBrowserApi, StationSearchType } from 'radio-browser-api'


import Loading from '../componets/Loading';
import { countryCode } from '../wiki';
import Nostation from '../componets/NoStation';
import Error from '../componets/Error';
import SingleRadio from '../componets/SingleRadio';

class Radio extends Component {

    constructor() {
        super()
        this.audioRef = React.createRef()
        this.state = {
            radio: [],
            loading: true,
            audio: null,
            play: false,
            countryCodes: [],
            countryCode: "SA",
            error: false,
            imgError: false
        }
    }


    getData = async e => {
        this.setState({ loading: true })
        try {

            const api = new RadioBrowserApi('My Radio App')
            const data = await api.searchStations({
                countryCode: this.state.countryCode,
                limit: 100,
                offset: 0 // this is the default - can be omited


            })

            let filterAudio = data.filter(data => data.codec == "MP3")

            this.setState({
                radio: [...new Set(filterAudio)],
                loading: false,
                error: false
            })
        }
        catch (err) {
            this.setState({
                loading: false,
                error: true
            })

        }

    }

    getFetch = async e => {
        try {
            let data = await fetch("https://static.wixstatic.com/media/f47a3e_daf5380428b94d4192f8eaf2f0c59e62~mv2.jpg/v1/fill/w_221,h_221,al_c,lg_1,q_80/f47a3e_daf5380428b94d4192f8eaf2f0c59e62~mv2.webp")
            console.log(data)

        }
        catch (err) {
            console.log("Error", err)
        }
    }


    componentDidMount() {
        let newCountry = countryCode.filter(key => Object.keys(key).length > 0)

        this.setState({
            countryCodes: newCountry
        })
        this.getData()

        // this.getFetch()
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
                    {!this.state.error ? <div className="filterRadio">
                        <select name="country_code" value={this.state.countryCode} className="form-select form-select-lg" onChange={(e) => { this.setState({ countryCode: e.target.value }) }}>
                            {this.state.countryCodes.map((item, index) => {
                                return <option value={item.country_code} key={index}>
                                    {item.country_code}
                                </option>
                            })}
                        </select>
                    </div> : null}
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
                        this.state.error ?
                            <Error />
                            :

                            this.state.radio.length > 0 ? this.state.radio.map(item => {

                                return <SingleRadio key={item.id} {...item} playRadio={this.playRadio} time={item.clickTimestamp} {...this.state} checkImg={this.checkImg} />
                            })
                                :
                                <Nostation />
                }

            </div >
        )
    }
}



export default Radio;
