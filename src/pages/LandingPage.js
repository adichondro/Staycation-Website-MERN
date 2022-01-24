import React, { Component } from 'react'

import Header from 'parts/Header';
import Hero from 'parts/Hero';

import landingPage from 'json/landingPage.json';

export class LandingPage extends Component {
    render() {
        return (
            <>
             <Header {...this.props}></Header>
             <Hero data={landingPage.hero} />   
            </>
        )
    }
}


export default LandingPage
