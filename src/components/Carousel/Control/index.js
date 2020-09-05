import React, {Component} from 'react';
import styles from './Control.module.scss'
import classNames from 'classnames';
import PropTypes from "prop-types";
import icons from "@mdi/react";

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFullScreen: false,
            isPlaying: true,
            delay: 5000
        }
    }
    startInterval = () => {
        console.log(this.state.isPlaying);
        if (!this.state.isPlaying) return;
        const {delay} = this.state;
        this.intervalId = setInterval(this.nextSlide, delay);
    }
    componentDidMount() {
       this.startInterval();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.isPlaying);
        if (this.state.isPlaying) this.startInterval();
        else clearInterval(this.intervalId);
    }


    nextSlide =() => {
        const {nextSlide} = this.props;
        nextSlide();
    };
    prevSlide =() => {
        const {prevSlide} = this.props;
        prevSlide();
    };
    handlePause = () => {
        this.setState({
            isPlaying: !this.state.isPlaying,
        });
    };
    fullscreenMode = () => {
        const {isFullscreen} = this.state;
        const {fullscreenMode} = this.props;
        this.setState({isFullscreen: !isFullscreen});
        fullscreenMode(isFullscreen);
    };
    delayHandler = ({target: {value}}) => {
        this.setState({
            delay: value,
        })
    }

    render() {
        const {isPlaying, delay, isFullscreen} = this.state;
        const pauseStyles = !this.state.isPlaying ? classNames(styles.button,styles.buttonToggled) : styles.button;
        return (
            <div className={styles.controls}>
                <button className={styles.button} onClick={this.prevSlide}>Prev</button>
                <button className={pauseStyles} onClick={this.handlePause}>II</button>
                <button className={styles.button} onClick={this.nextSlide}>Next</button>
                <button className={styles.button} onClick={this.fullscreenMode}>Fullscreen</button>
                <input type="range" value={delay} min={1000} max={10000} value={delay} onChange={this.delayHandler}/>
            </div>
    )
        ;
    }
}

Control.propTypes = {
    fullscreenMode: PropTypes.func,
    prevSlide: PropTypes.func,
    nextSlide: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number
}.isRequired;

export default Control;