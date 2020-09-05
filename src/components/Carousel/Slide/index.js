import React, {Component} from 'react';
import styles from './Slide.module.scss'
import PropTypes from "prop-types";

class Slide extends Component {
    constructor(props) {
        super(props);
        const  img = new Image();
        img.addEventListener("load", this.handleLoad);
        this.state = {
            img: img,
            isLoaded: false,
        }
    }

    handleLoad = () => {
        /*this.ListeningStateChangedEvent({
            isLoaded: true,
        });*/
        this.setState({
            isLoaded: true,
        })
    };

    load = () => {
        const {img} = this.state;
        const {currentSlide: {src}} = this.props;
        img.src = src;
    };

    componentDidMount() {
        this.load();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isLoaded} = this.state;
        const {currentSlide: {src}} = this.props;
        if (src !== prevProps.currentSlide && isLoaded){
            this.load();
        }
    }

    render() {
        const {img, isLoaded} = this.state;
        const {currentSlide, contRatio} = this.props;
        const imageRatio = img.width / img.height;
        const imageSize = {
            [imageRatio > contRatio ? 'width': 'height'] : '360px',
        };
        return (
            <>
                {isLoaded && <figure className={styles.container} title={currentSlide.title}>
                    <img className={styles.image} style={imageSize} src={currentSlide.src} alt={currentSlide.title}/>
                    <figcaption className={styles.caption}>
                        <h2>{currentSlide.title}</h2>
                        <p>{currentSlide.description}</p>
                    </figcaption>
                </figure>}
            </>
    )
        ;
    }
}

Slide.propTypes = {
    contRatio: PropTypes.number.isRequired,
    currentSlide: PropTypes.shape({
        src: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
    }).isRequired,
};


export default Slide;