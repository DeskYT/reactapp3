import React, {Component} from 'react';
import styles from "./Calendar.module.scss";
import Month from "./Month";
import PropTypes from "prop-types";
import lang from "./common_settings/lang.json";
import CurrentDay from "./CurrentDay";


class NewCalendar extends Component {
    constructor(props) {
        super(props);
    }
    getLangData = () => {
        const {language} = this.props;
        const  languagesData = lang.languages.filter(item => item.lang === language);
        let langData = languagesData.length > 0 ? languagesData[0] : lang.filter(item => item.lang === lang.defaultLang)[0];
        return langData;
    }
    render() {
        const { currentDate } = this.props;
        return (
            <article className={styles.container}>
                <CurrentDay currentDate={currentDate} langData={this.getLangData()} />
                <Month date={currentDate} currentDate={currentDate} langData={this.getLangData()} />
            </article>
        );
    }
}

NewCalendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date),
};
NewCalendar.defaultProps = {
    currentDate: new Date(),
    language: "en",
};

export default NewCalendar;