import React, { Component } from 'react';
import '.././App.css';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';
import AlertInfo from './AlertInfo';

class App extends Component{

  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }
  render(){
    return (
      <div>
        <Nav/>
        <AlertInfo/>
        <div className="container">
          <div className="row">
            <NoteList/>
            {
              this.showForm()
            }
          </div>
        </div>
        
      </div>
      
    );
  }
  }
  

  const mapStateToProps = (state, ownProps) => {
    return {
      isEdit: state.isEdit
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      changeEditStatus: () => {
        dispatch({type:"CHANGE_EDIT_STATUS"})
      }
    }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(App)

