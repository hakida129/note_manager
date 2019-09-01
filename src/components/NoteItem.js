import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {

    twoActionButton = () => {
        this.props.changeEditStatus();
        //console.log(this.props.note);
        this.props.getEditData(this.props.note);
        
    }

    getDeleteItem = () => {
        this.props.getDeleteItem(this.props.note.id);
        this.props.alertON("delele element " + this.props.note.noteTitle + " ok " , "danger");
        
    }

    render() {
        return (
            <div>
              <div className="card mt-4">
                    <div className="card-header" role="tab" id="note1">
                        <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number" + this.props.i} aria-expanded="true" aria-controls="noteContent1">
                           {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.twoActionButton() }> Edit </button>
                            <button className="btn btn-outline-secondary" onClick = {() => this.getDeleteItem()}> Delete </button>
                        </div>

                        </h5>
                    </div>
                    <div id={"number" + this.props.i} className="collapse in" role="tabpanel" aria-labelledby="noteContent1">
                        <div className="card-body">
                        {this.props.noteContent}
                        </div>
                    </div>
                </div>
  
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        getEditData: (editObject) => {
            dispatch({type:"GET_EDIT_DATA",editObject})
        },
        getDeleteItem: (itemId) => {
            dispatch({type:"DELETE",itemId})
        },
        alertON: (alertContent,alertType) => {
            dispatch({type:"ALERT_ON", alertContent,alertType})
        },
        alertOFF: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
