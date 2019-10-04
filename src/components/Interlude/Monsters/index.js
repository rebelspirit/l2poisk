import React, {Component} from 'react'
import './index.css'
import json from '../../../assets/database/mobs/monsters/min_1_max_10'
import {NavLink} from "react-router-dom";

class Monsters extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return(
            <section className={'monsters-container'}>
                <div className="monsters-navigation">
                    <h2>Монстры</h2>
                    <nav>
                        <button className={'active'}>1-10</button>
                        <button>11-20</button>
                        <button>21-30</button>
                        <button>31-40</button>
                        <button>41-50</button>
                        <button>51-60</button>
                        <button>61-70</button>
                        <button>71-80</button>
                        <button>81-90</button>
                    </nav>
                </div>
                {/*{console.log(json)}*/}
                <table>
                    <thead>
                    <tr>
                        <th className={'monsters-name'}>Name</th>
                        <th className={'monsters-lvl'}>LvL</th>
                        <th className={'monsters-agr'}>Aggression</th>
                        <th className={'monsters-undead'}>Undead</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.values(json).map((monster, key) =>
                        <tr key={key}>
                            <td><NavLink to={`/interlude/monsters/${monster.id}`}>{monster.name}</NavLink></td>
                            <td>{monster.lvl}</td>
                            <td className={monster.aggression ? 'status-green' : 'status-red'}>{monster.aggression ? "Yes" : "No"}</td>
                            <td className={monster.aggression ? 'status-green' : 'status-red'}>{monster.isUndead ? "Yes" : "No"}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
        )
    }
}



export default Monsters