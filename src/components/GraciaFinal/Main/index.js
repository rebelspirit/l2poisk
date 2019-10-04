import React, {Component} from 'react'
import './index.css'
import LeftMenu from './LeftMenu'
import HomePage from './HomePage'

class Main extends Component {

    render() {
        return (
            <main className={'main'}>
                <LeftMenu/>
                <HomePage/>
            </main>
        );
    }
}

export default Main