import React, {Component} from 'react';
import {eachWeekOfInterval, endOfMonth, format, startOfMonth} from "date-fns";
import classNames from 'classnames';
import styles from "./Month.module.scss";
import Week from "./Week";

class Month extends Component {
    constructor(props) {
        super(props);
    }
    getWeeks = () => {
        const { date, currentDate } = this.props;
        return eachWeekOfInterval({
            start: startOfMonth(date),
            end: endOfMonth(date),
        }).map((weekDate) => (
            <Week
                key={weekDate}
                weekDate={weekDate}
                date={date}
                currentDate={currentDate}
            />
        ));
    };
    getWeekDayNames = () => {
        const {langData} = this.props;
        const className = classNames(styles.box, styles.dayName);
        let weekDayNames = langData.words.Shortcuts;
        weekDayNames =  weekDayNames.map((item, index) => {
            return <li key={index} className={className}>{item}</li>
        });
        return weekDayNames;
    };
    getMonthHeader = () => {
        const {langData, date} = this.props;
        let monthsNames = langData.words.Months;
        let monthsName = monthsNames[format(date, 'LLLL')];
        let currentYear = format(date, 'y')
        return `${monthsName} ${currentYear}`

    }
    render() {
        this.getMonthHeader()
        return (
            <div className={styles.wrapper}>
                <div className={styles.title}>{this.getMonthHeader()}</div>
                <ul className={styles.row}>
                    {this.getWeekDayNames()}
                </ul>
                {this.getWeeks()}
            </div>
        );
    }
}
Month.defaultProps = {
    currentDate: new Date(),
};

export default Month;