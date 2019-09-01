import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier"; 
import {connect} from 'react-redux';

class AlertInfo extends Component {
    handleDismiss = () => {
        this.props.alertOFF();
    }
    render() {
        if(this.props.alertShow === false) return null;
        return (
            <AlertContainer>
                <Alert type={this.props.AlertType} onDismiss = {() => this.handleDismiss()} timeout = {1000}>
                     {this.props.AlertContent}
                </Alert>
            </AlertContainer>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertShow: state.alertShow,
        AlertContent : state.AlertContent,
        AlertType : state.AlertType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOFF: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertInfo)
