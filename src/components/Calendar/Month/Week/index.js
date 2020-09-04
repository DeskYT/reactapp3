import React, {Component} from 'react';
import {eachDayOfInterval, endOfWeek, startOfWeek} from "date-fns";
import WeekDay from "./WeekDay"
import styles from "./Week.module.scss";
import PropTypes from "prop-types";

class Week extends Component {

    getWeekDays = () =>{
        const { weekDate, date, currentDate } = this.props;
        return eachDayOfInterval({
            start: startOfWeek(weekDate),
            end: endOfWeek(weekDate),
        }).map((dayDate) => (
            <WeekDay
                key={dayDate}
                dayDate={dayDate}
                date={date}
                currentDate={currentDate}
            />
        ));
    }
    render() {
        return (
            <ul className={styles.row}>{this.getWeekDays()}</ul>
        );
    }
}
Week.defaultProps = {
    currentDate: new Date(),
};

export default Week;