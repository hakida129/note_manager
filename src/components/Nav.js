import React, { Component } from 'react';
import {connect} from 'react-redux';

class Nav extends Component {

  handleAdd = (event) => {
    event.preventDefault();
    this.props.changeEditStatus();
    this.props.changeAddStatus();
  }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                  <a className="navbar-brand" href="/#">Navbar</a>
                  <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="" onClick = {(event) => this.handleAdd(event)}>Home <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="" onClick = {(event) => this.handleAdd(event)}>Add Note</a>
                      </li>
                    </ul>
                  </div>
                </nav>
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
      dispatch({
        type:"CHANGE_EDIT_STATUS"
      })
    },
    changeAddStatus: () => {
      dispatch({
        type:"CHANGE_ADD_STATUS"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);