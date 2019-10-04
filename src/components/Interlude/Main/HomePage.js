import React from 'react'
import {NavLink} from "react-router-dom";

const pagesTop = {
    main: {
        name: 'Основы игры',
        links: [
            {
                name: 'Установка игры и создание персонажа',
                link: 'google.com',
            },
            {
                name: 'Характеристики персонажа',
                link: 'google.com',
            },
            {
                name: 'Интерфейс игры',
                link: 'google.com',
            },
            {
                name: 'Боевая система',
                link: 'google.com',
            },
            {
                name: 'Штраф смерти',
                link: 'google.com',
            },
            {
                name: 'Умения',
                link: 'google.com',
            },
            {
                name: 'Группа',
                link: 'google.com',
            },
            {
                name: 'Игровой форум',
                link: 'google.com',
            },
            {
                name: 'Помощь новичкам',
                link: 'google.com',
            },
            {
                name: 'Почтовая система',
                link: 'google.com',
            },
            {
                name: 'Система слуг',
                link: 'google.com',
            },
            {
                name: 'Макросы',
                link: 'google.com',
            },
            {
                name: 'PvP',
                link: 'google.com',
            },
        ]
    },
    library: {
        name: 'Библиотека',
        links: [
            {
                name: 'Кланы',
                link: 'google.com',
            },
            {
                name: 'Арена Кланов',
                link: 'google.com',
            },
            {
                name: 'Альянсы',
                link: 'google.com',
            },
            {
                name: 'Осады Замков',
                link: 'google.com',
            },
            {
                name: 'Налоги',
                link: 'google.com',
            },
            {
                name: 'Обители кланов',
                link: 'google.com',
            },
            {
                name: 'Временные обители кланов',
                link: 'google.com',
            },
            {
                name: 'Великая Олимпиада',
                link: 'google.com',
            },
            {
                name: 'Модификация предметов',
                link: 'google.com',
            },
            {
                name: 'Руны',
                link: 'google.com',
            },
            {
                name: 'Система стихий',
                link: 'google.com',
            },
            {
                name: 'Зачарование предметов',
                link: 'google.com',
            },
            {
                name: 'Создание предметов',
                link: 'google.com',
            },
            {
                name: 'Заряды Души и Духа',
                link: 'google.com',
            },
            {
                name: 'Торговая лавка',
                link: 'google.com',
            },
            {
                name: 'Рыбалка',
                link: 'google.com',
            },

        ]
    },
    raceAndClasses: {
        name: 'Расы и классы',
        links: [
            {
                name: 'Расы',
                link: 'google.com',
            },
            {
                name: 'Классы в Lineage 2',
                link: 'google.com',
            },
            {
                name: 'Татуировки',
                link: 'google.com',
            },
            {
                name: 'Краски',
                link: 'google.com',
            },
            {
                name: 'Люди',
                link: 'google.com',
            },
            {
                name: 'Эльфы',
                link: 'google.com',
            },
            {
                name: 'Темные Эльфы',
                link: 'google.com',
            },
            {
                name: 'Орки',
                link: 'google.com',
            },
            {
                name: 'Гномы',
                link: 'google.com',
            },
        ]
    },
    location: {
        name: 'Локации',
        links: [
            {
                name: 'Земли',
                link: 'google.com',
            },
            {
                name: 'Зоны Охоты',
                link: 'google.com',
            },
            {
                name: 'Города',
                link: 'google.com',
            },
            {
                name: 'Временные Зоны',
                link: 'google.com',
            },
            {
                name: 'Рейдовые Боссы',
                link: 'google.com',
            },
            {
                name: 'Сад Чудовищ',
                link: 'google.com',
            },
            {
                name: 'Горячие Источники',
                link: 'google.com',
            },
            {
                name: 'Стена Аргоса',
                link: 'google.com',
            },
            {
                name: 'Логово Короля Петрама',
                link: 'google.com',
            },
            {
                name: 'Сады Богини Евы',
                link: 'google.com',
            },
            {
                name: 'Логово Королевы Небулы',
                link: 'google.com',
            },
            {
                name: 'Кузница Богов',
                link: 'google.com',
            },
            {
                name: 'Логово Короля Игниса',
                link: 'google.com',
            },
            {
                name: 'Земля Ветров',
                link: 'google.com',
            },
            {
                name: 'Логово Короля Прочеллы',
                link: 'google.com',
            },
            {
                name: 'Рыцари Балтуса - Закен',
                link: 'google.com',
            },
            {
                name: 'Некрополь Апостолов',
                link: 'google.com',
            },
            {
                name: 'Рейдовая Зона: Лилит',
                link: 'google.com',
            },
            {
                name: 'Катакомбы Темного Пророчества',
                link: 'google.com',
            },
            {
                name: 'Рейдовая Зона: Анаким',
                link: 'google.com',
            },
            {
                name: 'Стартовые деревни',
                link: 'google.com',
            },
            {
                name: 'Земли Глудио',
                link: 'google.com',
            },
            {
                name: 'Земли Диона',
                link: 'google.com',
            },
            {
                name: 'Земли Гирана',
                link: 'google.com',
            },
            {
                name: 'Земли Орена',
                link: 'google.com',
            },
            {
                name: 'Земли Адена',
                link: 'google.com',
            },
            {
                name: 'Земли Годдарда',
                link: 'google.com',
            },
            {
                name: 'Земли Шутгарта',
                link: 'google.com',
            },
        ]
    }
};
const pagesBottom = {
    items: {
        name: 'Предметы',
        links: [
            {
                name: 'Общие сведения',
                link: 'google.com',
            },
            {
                name: 'Комплекты брони',
                link: 'google.com',
            },
            {
                name: 'Рецепты',
                link: 'google.com',
            },
            {
                name: 'Оружие',
                link: 'google.com',
            },
            {
                name: 'Броня',
                link: 'google.com',
            },
            {
                name: 'Аксессуары',
                link: 'google.com',
            },
            {
                name: 'Легендарные аксессуары',
                link: 'google.com',
            },
            {
                name: 'Украшения',
                link: 'google.com',
            },
            {
                name: 'Браслеты',
                link: 'google.com',
            },
            {
                name: 'Талисманы',
                link: 'google.com',
            },
            {
                name: 'Агатионы',
                link: 'google.com',
            },
            {
                name: 'Броши',
                link: 'google.com',
            },
            {
                name: 'Монстры',
                link: '/interlude/monsters',
            },
        ]
    },
    quests: {
        name: 'Квесты',
        links: [
            {
              name: 'Квесты',
              link: 'google.com',
            },
            {
                name: 'Ежедневные задания',
                link: 'google.com',
            },
            {
                name: 'Определяющие квесты',
                link: 'google.com',
            },
            {
                name: 'Квесты на первую профессию',
                link: 'google.com',
            },
            {
                name: 'Квесты на вторую профессию',
                link: 'google.com',
            },
            {
                name: 'Квесты на третью профессию',
                link: 'google.com',
            },
            {
                name: 'Квесты для игроков 1—40 уровней',
                link: 'google.com',
            },
            {
                name: 'Квесты для игроков 41—75 уровней',
                link: 'google.com',
            },
            {
                name: 'Квесты для игроков 76—80 уровней',
                link: 'google.com',
            },
            {
                name: 'Земли Глудио - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Диона - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Иннадрила - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Гирана - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Орена - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Адена - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Годдарда - квесты',
                link: 'google.com',
            },
            {
                name: 'Земли Шутгарта - квесты',
                link: 'google.com',
            },
        ]
    },
    updates: {
        name: 'Обновления',
        links: [
            {
                name: 'Игровые обновления',
                link: 'google.com',
            },
        ]
    },
    other: {
        name: 'Прочее',
        links: [
            {
                name: 'Ивенты',
                link: 'google.com',
            },
        ]
    },
};

const HomePage = () => (
    <section className={'homePage-container'}>
        <div className={'homePage-container__top'}>
            {Object.values(pagesTop).map((page, key) =>
                <div key={key} className={'suggestions'}>
                    <h2>{page.name}</h2>
                    <ul>
                        {(page.links).map((link, key) => <li key={key}><NavLink to={link.link}>{link.name}</NavLink></li>)}
                    </ul>
                </div>)}
        </div>

        <div className={'homePage-container__bottom'}>
            {Object.values(pagesBottom).map((page, key) =>
                <div key={key} className={'suggestions'}>
                    <h2>{page.name}</h2>
                    <ul>
                        {(page.links).map((link, key) => <li key={key}><NavLink to={link.link}>{link.name}</NavLink></li>)}
                    </ul>
                </div>)}
        </div>
    </section>
);

export default HomePage