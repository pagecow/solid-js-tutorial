import type { Component } from 'solid-js';
import { For, onMount } from 'solid-js';
import Store from '../store';
import styles from '../App.module.css';
import { useGlobalContext } from '../GlobalContext/store';

const Users: Component = () =>  {
    const { pageName } = useGlobalContext();
    const [store, setStore] = Store;

    onMount(() => {
        if(store.users.length < 4) {
            setStore('users', [...store.users, 'user-4'])
        }
    })

    return (
        <div class={styles.padding}>
            <h1>The previous page name was: {pageName}</h1>
            <p>List of users:</p>
            <For each={store.users}>
                {(user, i) => <p class={styles.paddingLeft}>{i() + 1}: {user}</p>}
            </For>
        </div>
    )
}

export default Users;