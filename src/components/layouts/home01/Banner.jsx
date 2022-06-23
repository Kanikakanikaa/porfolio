import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Banner extends Component {
    render() {
        return (
            <div className="section slide-personal-Intro-first">
                <section className="banner-section s1" id="home">
                    <div className="container">
                        <div className="content-text position-relative">
                            <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.3s">
                                <h1 className="cd-headline clip is-full-width title mg-b29 text-white">
                                    <span>I'm&nbsp;</span>
                                    <span className="cd-words-wrapper color-d4">
                                        <b className="is-visible">Kanika</b>
                                        <b>Developer</b>
                                        <b>Designer</b>
                                    </span>
                                </h1>
                                <p className="lt-sp03 mg-b60 text-white">
                                    Hi, I’m kanika. Nice to meet you.
                                    <br />
                                    I design and code beautifully simple things, and I love what I do.  <br />I'm quietly confident, naturally curious, and perpetually working  <br />on improving my chops one design problem at a time.
                                </p>
                            </div>
                            <div className="animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="fl-btn btn-general btn-hv-border">
                                    <Link to={{ pathname: "https://drive.google.com/file/d/1eVOhaDuKEpypFIezIAxLypkFXxu8Mp4l/view" }} target="_blank" className="border-corner5 f-w500 lt-sp095 text-white ">Download Resume</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        );
    }
}

export default Banner;

