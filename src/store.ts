import { createStore } from 'solid-js/store';

interface AppStore {
    users: string[]
}

export default createStore<AppStore>({
    users: []
})