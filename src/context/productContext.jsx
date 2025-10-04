import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/productReducer'

const Appcontext = createContext();

const API = "https://raw.githubusercontent.com/AbhishekID01/products.json/refs/heads/main/products.json"

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featureProducts : []
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {
        dispatch({type:"SET_LOADING"})
       try {
         const res = await axios.get(url);
         const products = await res.data;
         dispatch({type:"SET_API_DATA", payload: products});
       } catch (error) {
         dispatch({type:"API_ERROR"})
       }
    }

    useEffect(() => {
        getProducts(API);
    },[])


    return <Appcontext.Provider value={{ ...state }} >
        {children}
    </Appcontext.Provider>
}

const useProductContext = () => {
    return useContext(Appcontext)
}

export { AppProvider, useProductContext, Appcontext  };