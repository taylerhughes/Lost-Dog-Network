import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import LostDog from './components/LostDog.js';
import FoundDog from './components/FoundDog.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            id: 0,
            message: null,
            intervalIsSet: false,
            idToDelete: null,
            idToUpdate: null,
            objectToUpdate: null
        };
    }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

    getDataFromDb = () => {
        fetch("/api/getData")
            .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  render() {
    const { data } = this.state;
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={(props) => (
                    <Home />
                )}/>
                <Route exact path='/lost-dog' render={(props) => (
                    <LostDog data={this.state.data} />
                )}/>
                <Route exact path='/found-dog' render={() => (
                    <FoundDog />
                )}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
