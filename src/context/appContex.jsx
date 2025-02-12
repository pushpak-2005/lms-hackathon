import React, { createContext, useContext, useEffect, useState } from 'react';
import { dummyCourses } from '../assets/assets';

const AppContext = createContext();

 const AppContexProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const[allCourses, setAllCourses] = useState([]) 

    const fetchAllCourses = async ()=>{
        setAllCourses(dummyCourses)
    }
    useEffect(()=>{
        fetchAllCourses()
    },[])

    const value = {
       currency, allCourses
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContexProvider };