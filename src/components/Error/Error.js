import React, { Component } from 'react';
import styles from './Error.module.scss';

export default class Error extends Component {
    constructor(props) {
        super(props);
    }
    dismiss =() => {
        this.props.hideError();
    }
    render() {
        const {
            error,
        } = this.props;
        console.log(error);
        return (
            <div className={styles.errorContainer}>
                <div className="errorContent">{`Error: ${error.props}`}</div>
                <div className={styles.errorClose} onClick={this.dismiss}>X</div>
            </div>
        );
    }
}
