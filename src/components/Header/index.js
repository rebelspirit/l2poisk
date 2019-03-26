import React, {Component} from 'react'
import './index.css'
import Search from  './Search'
import Menu from './Menu'

class Header extends Component {

    render() {
        return (
            <header className={'header'}>
                <Search/>
                <Menu/>
            </header>
        );
    }
}

export default Header