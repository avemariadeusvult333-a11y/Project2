/*
    ========================================
    REACT
    ========================================

    React — это библиотека JavaScript для создания интерфейсов.

    Главная идея React:

    страница = набор компонентов

    Компоненты — это небольшие части интерфейса,
    которые можно переиспользовать.

    Например сайт с играми:

    App
    ├ Header
    ├ GameList
    │   ├ GameCard
    │   ├ GameCard
    │   └ GameCard
    └ Footer
    */


    /*
    ========================================
    1. JSX
    ========================================

    React использует  расширение JSX.

    JSX — это синтаксис, который выглядит как HTML,
    но пишется внутри JavaScript.

    Пример компонента:
    */

    function App() {
    return (
        <div>
        <h1>Мои любимые игры</h1>
        </div>
    )
    }



    /*
        Важно:

        JSX обязательно должен возвращать
        ОДИН родительский элемент.
    */

    function Example() {
        return (
            <div>
            <h1>Заголовок</h1>
            <p>Текст</p>
            </div>
        )
    }



    /*
        ========================================
        2. КОМПОНЕНТЫ
        ========================================

        Компонент — это функция,
        которая возвращает JSX.
    */

    function GameCard() {
        return (
            <div>
                <h3>Witcher 3</h3>
                <p>⭐ 9.5</p>
            </div>
        )
    }



    /*
        Использование компонента:
    */

    function App() {
        return (
            <div>
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        )
    }



    /*
        ========================================
        3. PROPS
        ========================================

        Props — это параметры компонента, как в функции

        Они позволяют передавать данные
        в компонент.
    */

    function GameCard(props) {
        return (
            <div>
                <h3>{props.name}</h3>
                <p>⭐ {props.rating}</p>
            </div>
        )
    }



    /*
        Использование props:
    */

    function App() {
        return (
            <div>
                <GameCard name="Witcher 3" rating={9.5} />
                <GameCard name="Cyberpunk" rating={8.5} />
                <GameCard name="Minecraft" rating={9} />
            </div>
        )
    }



    /*
        ========================================
        4. ВЫВОД СПИСКОВ
        ========================================

        В React массивы выводят через map().
    */

    const games = [
        { name: "Witcher 3", rating: 9.5 },
        { name: "Cyberpunk", rating: 8.5 },
        { name: "Minecraft", rating: 9 }
    ]

    function App() {
        return (
            <div>
                {games.map((game) => (
                    <GameCard
                        name={game.name}
                        rating={game.rating}
                    />
                ))}
            </div>
        )
    }



    /*
        ========================================
        5. STATE
        ========================================

        State — это данные, которые могут изменяться.

        Для работы со state используется хук useState.
    */

    import { useState } from "react"

    function Counter() {
        const [count, setCount] = useState(0)

        return (
            <div>

            <p>Клики: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Нажми
            </button>

            </div>
        )
    }



    /*
        Разбор:

        useState(0) — начальное значение

        count — текущее значение

        setCount — функция изменения значения
    */



    /*
        ========================================
        6. СОБЫТИЯ
        ========================================

        React обрабатывает события
        через props.

        Например click.
    */

    function ButtonExample() {

    function handleClick() {
        console.log("Кнопка нажата")
    }

    return (
        <button onClick={handleClick}>
            Нажми
        </button>
    )

    }

/*
    ========================================
    7. ЗАДАНИЕ
    ========================================

    перенести весь функционал и дизайн сайта на реакт

    1 - создаем новый репозиторий, в нем -
    npm create vite@latest . 

    После запуска мастер спросит параметры проекта.

    Выбрать:

    Framework: React
    Variant: TypeScript

    дальше
    npm install
    npm run dev

    После этого в терминале появится адрес:

    http://localhost:5173

    Открыв его в браузере, вы увидите стартовое React-приложение.

    2 - дальше созвон, немного расскажу про структуру
    3 - перенос на реакт проекта 

*/