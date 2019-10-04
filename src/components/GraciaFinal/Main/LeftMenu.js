import React from 'react'
const leftSideBar = {
    navigation: {
        name: 'Энциклопедия GF',
        links: [
            {
                name: 'Монстры',
                subLinks: [
                    {
                        name: 'Monsters'
                    },
                    {
                        name: 'Monsters2'
                    },
                    {
                        name: 'Monsters3'
                    },
                ],
            },
            {
                name: 'Вещи',
                subLinks: 'google.com',
            },
            {
                name: 'Рыбалка',
                subLinks: 'google.com',
            },
            {
                name: 'Крафт',
                subLinks: 'google.com',
            },
            {
                name: 'Манор',
                subLinks: 'google.com',
            },
            {
                name: 'Питомцы',
                subLinks: 'google.com',
            },
            {
                name: 'Классы',
                subLinks: 'google.com',
            },
            {
                name: 'Квесты',
                subLinks: 'google.com',
            },
        ]
    },

};
const LeftMenu = () => (
    <aside className={'leftMenu-container'}>
        {Object.values(leftSideBar).map((obj, key) =>
            <div key={key} className={'navigation'}>
                <h6>{obj.name}</h6>
                <nav>
                    {(obj.links).map((link, key) => <li key={key}><a>{link.name}</a>
                        {/*<ul className={'subMenu'}>*/}
                            {/*{console.log(link.subLinks)}*/}
                            {/*{(link.subLinks).map((arr, key) => <li key={key}><a>{arr.name}</a></li>)}*/}
                            {/*<li>{link.subLinks[0].name}</li>*/}
                        {/*</ul>*/}
                    </li>)}
                </nav>
            </div>)}
    </aside>
);

export default LeftMenu;