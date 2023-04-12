import logo from './logo.svg';
import './App.css';
import React from 'react';
import RandomImage from './components/RandomImage';
import Weather from './components/Weather';
import Tasks from './components/Tasks';

import { connect } from 'react-redux';
import Qoutes from './components/Qoutes';
import { getimg } from './actions/getImg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getimg();
    this.state = {
      backgroundIndex: 0,
      background: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.backgrounds === undefined) {
      this.setState({ background: this.props.backgrounds[this.state.backgroundIndex].urls.full })
    }
  }

  onBackgroundChange(type) {
    if (type === "next") {
      if (this.state.backgroundIndex >= this.props.backgrounds.length - 1) {
        this.state.backgroundIndex = 0;
      }
      else {
        this.state.backgroundIndex++;
      }
    }
    else {
      if (this.state.backgroundIndex <= 0) {
        this.state.backgroundIndex = this.props.backgrounds.length - 1;
      }
      else {
        this.state.backgroundIndex--;
      }
    }

    this.setState({ background: this.props.backgrounds[this.state.backgroundIndex].urls.full })
  }


  render() {
    return (
      <div className="container App">
        <RandomImage background={this.state.background} />
        <Weather />
        <div className="d-flex justify-content-between">
          <button className="backgroundButton" onClick={this.onBackgroundChange.bind(this, "prev")}>{"<"}</button>
          <Tasks />
          <button className="backgroundButton" onClick={this.onBackgroundChange.bind(this, "next")}>{">"}</button>
        </div>

        <Qoutes />

      </div>

    );
  }
}


const mapStateToProps = state => {
  return {
    backgrounds: state.background
  }
}


const mapDispatchToProps = disaptch => {
  return {
    getimg: () => {
      disaptch(getimg())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
