import React, {Component, useEffect, useState} from 'react';

const Timer = (props) => {
    const nullDate = new Date(0,0,0,0,0,0,0);
    const [isEnabled, setEnabled] = useState(false);
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(nullDate);
    let timer;

    useEffect(() => {
        if (isEnabled){
            timer = setInterval(timerHandler, 1);
            console.log( new Date (Date.now() - time) );
            console.log( startTime );
        }
        else{
            console.log("Disabling...");
        }
        return () => {
            clearInterval(timer);
        };
    }, [isEnabled, startTime]);

    const timerHandler = () => {

            setTime(Date.now() - startTime);
    };
    const start = () => {
        setEnabled(true);
        setStartTime( new Date (Date.now() - time) );
    };
    const stop = () => {
        setEnabled(false);
    };
    const reset = () => {
        setTime(0);
        setStartTime(nullDate);
        setEnabled(false);
    };

    const msToTime = (s) => {
        let ms = s % 1000; //Миллисекунды (0-999)
        s = (s - ms) / 1000; //Приведение миллисекунд к секундам
        let secs = s % 60; //Секунды (0-59)
        s = (s - secs) / 60; //Приведение секунд в минуты
        let mins = s % 60; //Минуты
        s = (s-mins) / 60;
        let hrs = s % 24; //Часы
        let days = (s-hrs) / 24;
        if (days > 0) days = days < 10 ? `0${days}` : days;
        if (hrs) hrs = hrs < 10 ? `0${hrs}` : hrs;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;
        ms = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}`: ms;

        return (days ? `${days}:` : "") + (hrs ? `${hrs}:` : "") + (mins ? `${mins}:` : "") + secs + '.' + ms;
    };

    const controls = () => {
        return (
            <>
                {isEnabled ? <button onClick={stop}>Stop</button> : <button onClick={start}>Start</button>}
                <button onClick={reset}>Reset</button>
            </>
        )
    };

    return (
        <div>
            <h1>Timer</h1>
            <h2>{msToTime(time)}</h2>
            {controls()}
        </div>
    );
};

/*
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
            time: 0, //ms from start
            start: new Date(0,0,0,0,0,0,0),
        };
    }
    timerHandler = () => {
        this.setState({
            time: Date.now() - this.state.start,
        })
    };
    start = () => {
        this.setState({
            isEnabled: true,
            start: Date.now() - this.state.time,
        });

        this.timer = setInterval(this.timerHandler, 1);
    };
    stop = () => {
        this.setState({isEnabled: false});
        clearInterval(this.timer);
    };
    reset = () => {
        clearInterval(this.timer);
        this.setState({
            isEnabled: false,
            time: 0,
            start: 0,
        });
    };
    msToTime = (s) => {
        let ms = s % 1000; //Миллисекунды (0-999)
        s = (s - ms) / 1000; //Приведение миллисекунд к секундам
        let secs = s % 60; //Секунды (0-59)
        s = (s - secs) / 60; //Приведение секунд в минуты
        let mins = s % 60; //Минуты
        s = (s-mins) / 60;
        let hrs = s % 24; //Часы
        let days = (s-hrs) / 24;
        if (days > 0) days = days < 10 ? `0${days}` : days;
        if (hrs) hrs = hrs < 10 ? `0${hrs}` : hrs;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;
        ms = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}`: ms;

        return (days ? `${days}:` : "") + (hrs ? `${hrs}:` : "") + (mins ? `${mins}:` : "") + secs + '.' + ms;
    };

    controls(){
        return (
            <>
                {this.state.isEnabled ? <button onClick={this.stop}>Stop</button> : <button onClick={this.start}>Start</button>}
                <button onClick={this.reset}>Reset</button>
            </>
        )
    }

    render() {
        const {time} = this.state;
        return (
            <div>
                <h1>Timer</h1>
                <h2>{this.msToTime(time)}</h2>
                {this.controls()}
            </div>
        );
    }
}
*/
export default Timer;