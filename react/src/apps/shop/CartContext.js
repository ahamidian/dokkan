import React, {createContext, useState, useContext} from 'react';

const StateContext = createContext();
export const CartProvider = ({children}) => {
    let [cart, setCart] = useState({});

    const updateItem = (product, amount) => {
        if (amount === 0) {
            delete cart[product.id];
        } else {
            cart[product.id] = {amount: amount, product: product};
        }
        setCart({...cart});

        localStorage.setItem('cart',JSON.stringify(cart))



    };

    const store = React.useMemo(() => ({ cart, setCart,updateItem }), [cart])

    return (
        <StateContext.Provider value={store}>
            {children}
        </StateContext.Provider>
    );
};
export const useCart = () => useContext(StateContext);

