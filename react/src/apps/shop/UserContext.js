import React, {createContext, useState, useContext} from 'react';

const StateContext = createContext();
export const UserProvider = ({children}) => {
    let [user, setUser] = useState({});

    const store = React.useMemo(() => ({ user,setUser}), [user])

    return (
        <StateContext.Provider value={store}>
            {children}
        </StateContext.Provider>
    );
};
export const useUser = () => useContext(StateContext);

