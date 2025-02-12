import React from 'react';
import { Outlet } from 'react-router-dom';

const Educator = () => {
    return (
        <div>
        <div>
            <h1>Educator Page</h1>
        </div>
        <div>
            <Outlet/>
        </div>
        </div>
    );
};

export default Educator;