import React, {Component} from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './index.css';
import LeftMenu from './LeftMenu';
import HomePage from  './HomePage';
import Monsters from  '../Monsters';


class Main extends Component {

    render() {
        return (
            <BrowserRouter history={this.history}>
                <main className={'main'}>
                    <LeftMenu/>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/interlude/monsters"} component={Monsters}/>
                </main>
            </BrowserRouter>
        );
    }
}

export default Main