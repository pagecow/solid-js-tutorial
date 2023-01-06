import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";

interface ContextProps {
    count: Accessor<number>,
    setCount: Setter<number>,
    pageName: Accessor<string>,
    setPageName: Setter<string>
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {
    const [count, setCount] = createSignal(0);
    const [pageName, setPageName] = createSignal('');
    
    return (
      <GlobalContext.Provider value={{ count, setCount, pageName, setPageName }}>
        {props.children}
      </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)!;