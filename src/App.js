import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import './App.css'
import Header from './components/Header';
import Interlude from './components/Interlude/Main';
import GraciaFinal from './components/GraciaFinal/Main'

class App extends Component {

    render() {

        return (
            <HashRouter history={this.history}>
                <div className={'app'}>
                    <Header/>
                    <Route exact path="/" component={Interlude}/>
                    <Route path="/graciafinal" component={GraciaFinal}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
