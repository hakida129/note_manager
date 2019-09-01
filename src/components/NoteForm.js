import React, { Component } from 'react';
import {connect} from 'react-redux';


class NoteForm extends Component {
constructor(props) {
    super(props);
    this.state = {
        noteTitle:'',
        noteContent:'',
        id:''
    }
}

UNSAFE_componentWillMount() {
    if(this.props.editItem){
        this.setState({
            noteTitle:this.props.editItem.noteTitle,
            noteContent:this.props.editItem.noteContent,
            id:this.props.editItem.id
        })
    }
    
}

addData = (title, content) => {
    if(this.state.id){
        var editObject = {};
        editObject.id = this.state.id;
        editObject.noteTitle = this.state.noteTitle;
        editObject.noteContent = this.state.noteContent;
        this.props.editDataStore(editObject);
        this.props.changeEditStatus();
        this.props.alertON("Edit note success","success");
    }else{
        var item = {};
        item.noteTitle = title;
        item.noteContent = content;        
        this.props.addDataStore(item);
        this.props.alertON("Add note success","success");
    }
   
}

isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name] : value
    });
}

printTitile = () => {
    
    if(this.props.addStatus){
        return <h3>Add Note</h3>
    }else{
        return <h3>Edit Note</h3>
    }
    
}
    
    render() {
        //console.log(this.props.editItem);
        return (
            <div>
                <div className="col">
                    {this.printTitile()}
                    <form>
                        <div className="form-group">
                            <label htmlFor="nametitle">Edit Title</label>
                            <input defaultValue={this.props.editItem.noteTitle} onChange = {(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="nametitle" aria-describedby="helpId" placeholder="edit title" />
                            <small id="helpIdNote" className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                            <label>Edit Content</label>
                            <textarea defaultValue={this.props.editItem.noteContent} onChange = {(event) => this.isChange(event)} className="form-control" name="noteContent" rows={3} />
                        </div>
                        <button onClick = {() => this.addData(this.state.noteTitle, this.state.noteContent)} type="reset"  className="btn btn-primary btn-block" >Save</button>
                        
                    </form>
                    
                    </div>

            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        editItem : state.editItem,
        addStatus : state.isAdd
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        },
        alertON: (alertContent,alertType) => {
            dispatch({type:"ALERT_ON", alertContent,alertType})
        },
        alertOFF: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm) ;