import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteData} from './connectData';

class noteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayFirebase:[]
    }
  }
  
  UNSAFE_componentWillMount() {
    noteData.on('value', (notes) => {
      var arrayData = [];
      notes.forEach(element => {
        var key = element.key;
        var noteTitle = element.val().noteTitle;
        var noteContent = element.val().noteContent;
        
        arrayData.push({
          id:key,
          noteTitle:noteTitle,
          noteContent:noteContent
        })
      });
      this.setState({
        arrayFirebase: arrayData
      })
    })
  }
  
  getData = () => {
    if(this.state.arrayFirebase){
      return this.state.arrayFirebase.map((value,key) => {
        return(
         <NoteItem
          key = {key}
          i = {key}
          note = {value}
          noteTitle = {value.noteTitle}
          noteContent = {value.noteContent}
         />
         
        )
      })
    }
  }
    render() {
        return (
          
          
            <div className="col">
                <div id="noteList" role="tablist " aria-multiselectable="true">
                {
                  this.getData()
                }         

                </div>
             
            </div>
        )
    }
}

export default noteList;