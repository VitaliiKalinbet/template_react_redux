import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSalutation, showStatement, hideMessage } from './redux/actions/messageAction';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <button onClick={this.props.showSalutation}>Show salution message</button>
          <button onClick={this.props.showStatement}>Show statement message</button>
          <button onClick={this.props.hideMessage}>Hide message</button>
          <h2>{this.props.message}</h2>
      </div>
    );
  }
}

function mapStateToProps (state) {
    return {
      message: state.message,
    }
}

function mapDispatchToProps (dispatch) { 
    return {
      showSalutation: function () {
        dispatch(showSalutation());
      },
      showStatement: function () {
        dispatch(showStatement());
      }, 
      hideMessage: function () {
        dispatch(hideMessage());
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);