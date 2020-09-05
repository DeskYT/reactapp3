import React, {Component} from 'react';
import Control from "./Control";
import Slide from "./Slide";
import styles from "./Carousel.module.scss"

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slides: props.slides,
            activeSlide: props.slides.length > 0 ? 0 : null,
        }
    }
    /*addSlide(slide){
        let {slides} = this.state;
        this.setState({
            slides: this.state.slides.push(slide),
        })
        if  (slides.length === 1)
        {
            this.setState({
                activeSlide: 0,
            })
        }
    }*/
    nextSlide = () => {
        const {slides, activeSlide} = this.state;
        if (activeSlide == null) return;
        this.setState({activeSlide: (activeSlide + 1) % slides.length});
    };
    prevSlide = () => {
        const {slides, activeSlide} = this.state;
        if (activeSlide == null) return;
        this.setState({activeSlide: (activeSlide - 1 + slides.length) % slides.length});
    };
    resize = () => {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    fullscreenMode = (isFullscreen) => {
        const {width, height} = this.props;
        if(isFullscreen){
            this.setState({
                width: width,
                height: height,
            });
            window.removeEventListener('resize', this.resize);
        }else{
            this.resize();
            window.addEventListener('resize', this.resize);
        }
        document.body.style.overflow = isFullscreen ? 'initial' : 'hidden';

    }
    render() {
        const {slides, activeSlide, width, height} = this.state;
        const contRatio = width / height;
        const contSize = {
            width,
            height,
        }
        console.log(slides);
        console.log(activeSlide);
        return (
            <div className={styles.slidesContainer} style={contSize}>
                <Slide currentSlide={slides[activeSlide]} contRatio={contRatio}/>
                <Control nextSlide={this.nextSlide} prevSlide={this.prevSlide} fullscreenMode={this.fullscreenMode} width={width} height={height} />
            </div>
        );
    }
}

export default Index;