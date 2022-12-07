import type { Component } from 'solid-js';
import { lazy, onMount } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import styles from './App.module.css';
import Store from './store';

// import Home from './pages/Home';
// import Users from './pages/Users';

// lazy load components
const Home = lazy(() => import('./pages/Home'));
const Users = lazy(() => import('./pages/Users'));

const { localStorage } = window;

const App: Component = () => {
  const [store, setStore] = Store;

  onMount(() => {
    if(store.users.length === 0) {
      // save to localStorage
      const users = JSON.stringify([ 'user-1', 'user-2', 'user-3' ]);
      localStorage.setItem('users', users);

      // save to Store (Global State)
      const usersStringified = localStorage.getItem('users');
      if(usersStringified !== null) {
        setStore('users', JSON.parse(usersStringified));
      }
    }
  })

  return <>
    <nav class={styles.navigation}>
      <A href='/'>Home</A>
      <A href='/sign-up'>Sign Up</A>
      <A href='/users'>Users</A>
    </nav>
    <Routes>
      <Route path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path={['login', 'sign-up']} element={<h1>This is the login/sign up screen.</h1>} />
    </Routes>
  </>
};

export default App;
