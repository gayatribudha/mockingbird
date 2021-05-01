import React, { Component } from 'react';
import Slider from "react-slick";
import StoryCard from '../components/StoryCard/StoryCard';
import Footer from '../partials/Footer/Footer';
import preArrow from '../assets/images/preArrow.png';
import nextArrow from '../assets/images/nextArrow.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "-20px" }}
            onClick={onClick}
        >
            <img src={preArrow} alt="previous arrow" />
        </div>

    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", marginTop: "-23px"  }}
            onClick={onClick}
        >
            <img src={nextArrow} alt="next arrow" />
        </div>
    );
}




export default class Story extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },

            ]
        };
        return (
            <div className="container-fluid">
                <div className="row mt-3 mx-md-5 mx-lg-5 px-md-4 px-lg-4 ">
                    <div className="col-sm-12 col-md-1 col-lg-1">
                        <h1 className="title">Stories</h1>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5">
                        <hr className="hr-line mt-md-4 mt-lg-4 ml-md-4 ml-lg-4" />
                    </div>
                </div>

                <div className="mt-3 mb-5 mx-4  mx-md-5 mx-lg-5 px-md-5 px-lg-5">

                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="px-4">
                            <StoryCard />
                        </div>
                        <div className=" px-4">
                            <StoryCard />
                        </div>
                        <div className="px-4">
                            <StoryCard />
                        </div>
                        <div className="">
                            <StoryCard />
                        </div>
                        <div className="">
                            <StoryCard />
                        </div>
                        <div className="">
                            <StoryCard />
                        </div>
                    </Slider>



                </div>

                <Footer />

            </div >
        )
    }
}