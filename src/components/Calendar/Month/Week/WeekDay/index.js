import React, {Component} from 'react';
import {format, isSameDay, isSameMonth} from "date-fns";
import classNames from "classnames";
import styles from "./WeekDay.module.scss";
import PropTypes from "prop-types";

class WeekDay extends Component {
    constructor(props) {
        super(props);
        const { dayDate, currentDate } = this.props;
        this.state = {
            isCurrent: isSameDay(dayDate, currentDate) && isSameMonth(dayDate, currentDate),
        }
    }
    render() {
        const {dayDate, date} = this.props;

        const className = classNames(styles.box, {
            [styles.currentDay]: this.state.isCurrent,
            [styles.otherMonth]: !isSameMonth(dayDate, date),
        });
        return (
            <li className={className}>{format(dayDate, 'd')}</li>
        );
    }
}

WeekDay.propTypes = {
    dayDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
};
WeekDay.defaultTypes = {
    currentDate: new Date(),
};


export default WeekDay;