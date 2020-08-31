import React, {Component} from 'react';

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
    }
    start = () => {
        this.setState({
            isEnabled: true,
            start: Date.now() - this.state.time,
        });

        this.timer = setInterval(this.timerHandler, 1);
    }
    stop = () => {
        this.setState({isEnabled: false});
        clearInterval(this.timer);
    }
    reset = () => {
        clearInterval(this.timer);
        this.setState({
            isEnabled: false,
            time: 0,
            start: 0,
        });
    }
    msToTime = (s) => {
        let ms = s % 1000; //Миллисекунды (0-999)
        s = (s - ms) / 1000; //Приведение миллисекунд к секундам
        let secs = s % 60; //Секунды (0-59)
        s = (s - secs) / 60; //Приведение секунд в минуты
        let mins = s % 60; //Минуты
        let hrs = (s - mins) / 60; //Часы
        s = (s-mins) / 60
        hrs = s % 24; //Часы
        let days = (s-hrs) / 24;
        if (days > 0) days = days < 10 ? `0${days}` : days;
        if (hrs) hrs = hrs < 10 ? `0${hrs}` : hrs;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;
        ms = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}`: ms;

        let res = (days ? `${days}:` : "") + (hrs ? `${hrs}:` : "") + (mins ? `${mins}:` : "") + secs + '.' + ms
        //return hrs + ':' + mins + ':' + secs + '.' + ms
        return res;
    }

    control(){
        return this.state.isEnabled ? <button onClick={this.stop}>Stop</button> : <button onClick={this.start}>Start</button>
    }

    render() {
        const {time} = this.state;
        return (
            <div>
                <h1>Time</h1>
                {this.control()}
                <button onClick={this.reset}>Reset</button>
                <h2>{this.msToTime(time)}</h2>
            </div>
        );
    }
}

export default Timer;