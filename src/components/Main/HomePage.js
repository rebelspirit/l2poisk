import React from 'react'

const pages = {
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
    }
};

const HomePage = () => (
    <section className={'homePage-container'}>
        <div className={'homePage-container__top'}>
            {Object.values(pages).map((page, key) =>
                <div key={key} className={'suggestions'}>
                    <h2>{page.name}</h2>
                    <ul>
                        {(page.links).map((link, key) => <li key={key}><a href={link.link}>{link.name}</a></li>)}
                    </ul>
                </div>)}

            <div className={'suggestions'}>
                <h2>Расы и классы</h2>
                <ul>
                    <li>Расы</li>
                    <li>Классы в Lineage 2</li>
                    <li>Татуировки</li>
                    <li>Краски</li>
                    <li>Люди</li>
                    <li>Эльфы</li>
                    <li>Темные Эльфы</li>
                    <li>Орки</li>
                    <li>Гномы</li>
                </ul>
            </div>
            <div className={'suggestions'}>
                <h2>Локации</h2>
                <ul>
                    <li>Земли</li>
                    <li>Зоны Охоты</li>
                    <li>Города</li>
                    <li>Временные Зоны</li>
                    <li>Рейдовые Боссы</li>
                    <li>Сад Чудовищ</li>
                    <li>Горячие Источники</li>
                    <li>Стена Аргоса</li>
                    <li>Логово Короля Петрама</li>
                    <li>Сады Богини Евы</li>
                    <li>Логово Королевы Небулы</li>
                    <li>Кузница Богов</li>
                    <li>Логово Короля Игниса</li>
                    <li>Земля Ветров</li>
                    <li>Логово Короля Прочеллы</li>
                    <li>Рыцари Балтуса - Закен</li>
                    <li>Некрополь Апостолов</li>
                    <li>Рейдовая Зона: Лилит</li>
                    <li>Катакомбы Темного Пророчества</li>
                    <li>Рейдовая Зона: Анаким</li>
                    <li>Стартовые деревни</li>
                    <li>Земли Глудио</li>
                    <li>Земли Диона</li>
                    <li>Земли Гирана</li>
                    <li>Земли Орена</li>
                    <li>Земли Адена</li>
                    <li>Земли Годдарда</li>
                    <li>Земли Шутгарта</li>
                </ul>
            </div>
        </div>
        <div className={'homePage-container__bottom'}>
            <div className={'suggestions'}>
                <h2>Предметы</h2>
                <ul>
                    <li>Общие сведения</li>
                    <li>Комплекты брони</li>
                    <li>Рецепты</li>
                    <li>Оружие</li>
                    <li>Броня</li>
                    <li>Аксессуары</li>
                    <li>Легендарные аксессуары</li>
                    <li>Украшения</li>
                    <li>Браслеты</li>
                    <li>Талисманы</li>
                    <li>Агатионы</li>
                    <li>Броши</li>
                </ul>
            </div>
            <div className={'suggestions'}>
                <h2>Квесты</h2>
                <ul>
                    <li>Квесты</li>
                    <li>Ежедневные задания</li>
                    <li>Определяющие квесты</li>
                    <li>Квесты на первую профессию</li>
                    <li>Квесты на вторую профессию</li>
                    <li>Квесты на третью профессию</li>
                    <li>Квесты для игроков 1—40 уровней</li>
                    <li>Квесты для игроков 41—75 уровней</li>
                    <li>Квесты для игроков 76—80 уровней</li>
                    <li>Земли Глудио - квесты</li>
                    <li>Земли Диона - квесты</li>
                    <li>Земли Иннадрила - квесты</li>
                    <li>Земли Гирана - квесты</li>
                    <li>Земли Орена - квесты</li>
                    <li>Земли Адена - квесты</li>
                    <li>Земли Годдарда - квесты</li>
                    <li>Земли Шутгарта - квесты</li>
                </ul>
            </div>
            <div className={'suggestions'}>
                <h2>Обновления</h2>
                <ul>
                    <li>Игровые обновления</li>
                </ul>
            </div>
            <div className={'suggestions'}>
                <h2>Прочее</h2>
                <ul>
                    <li>Ивенты</li>
                </ul>
            </div>
        </div>
    </section>
);

export default HomePage