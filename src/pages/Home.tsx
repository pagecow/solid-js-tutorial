import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

const Home: Component = () =>  {
    const [pageName, setPageName] = createSignal('Settings');

    createEffect(() => setPageName('Home'));

    return <h1>This is the {pageName()} page.</h1>
}

export default Home;