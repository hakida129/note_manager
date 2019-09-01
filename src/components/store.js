import {noteData} from './connectData';

var redux = require('redux');
const noteInitialState = {
    isEdit : false, 
    editItem : {}, 
    isAdd:false,
    alertShow : false,
    AlertContent:'',
    AlertType:''
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log(" Them du lieu " + JSON.stringify(action.getItem) + " thanh cong");
            return state

        case "CHANGE_EDIT_STATUS":
                return {...state, isEdit:!state.isEdit}

        case "CHANGE_ADD_STATUS":
                return {...state, isAdd:!state.isAdd}

        case "GET_EDIT_DATA":
                return {...state, editItem:action.editObject}

        case "EDIT":
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent                
            })
            return {...state, editItem :{}}
        case "DELETE":
            noteData.child(action.itemId).remove();
            //console.log("Item nneed delete" + action.itemId);
            return state
        case "ALERT_ON":
                return {...state, alertShow : true, AlertContent: action.alertContent, AlertType: action.alertType}
        case "ALERT_OFF":
                return {...state, alertShow : false}

        default:
            return state
    }
}

var store = redux.createStore(allReducer);
store.subscribe(function(){
   //console.log(JSON.stringify(store.getState()));
})
export default store;