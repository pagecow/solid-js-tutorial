import type { Component } from 'solid-js';
import { createEffect } from 'solid-js';
import { useGlobalContext } from '../GlobalContext/store';

const Home: Component = () =>  {
    const { count, setCount, pageName, setPageName } = useGlobalContext();

    createEffect(() => {
        setCount(1);
        setPageName('Home');
    })

    return (
        <div>
            <h1>This is the {pageName} page.</h1>
            <p>This is the count: {count}</p>
        </div>
    )
}

export default Home;