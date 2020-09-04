import React, {Component} from 'react';
import styles from "./CurrentDay.module.scss";
import {format} from "date-fns";
import propTypes from "prop-types";

class CurrentDay extends Component {
    constructor(props) {
        super(props);
    }
    getCurrentDay = () => {
        const {langData, currentDate} = this.props;
        let curDayName = langData.words.Weekdays[format(currentDate, 'iiii')];
        return curDayName;
    }

    render() {
        const {currentDate} = this.props;
        return (
            <div className={styles.wrapper}>
                <div className={styles.name}>{this.getCurrentDay()}</div>
                <div className={styles.number}>{format(currentDate, 'd')}</div>
            </div>
        );
    }
}
CurrentDay.propTypes = {
    currentDate: propTypes.instanceOf(Date).isRequired,
};
export default CurrentDay;