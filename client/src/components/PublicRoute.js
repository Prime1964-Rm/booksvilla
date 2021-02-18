import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({component:Component,restricted,...rest}) => (
        <Route {...rest} render={props=>(
            localStorage.getItem('booksVillaAuthToken')&&restricted?
            <Redirect to={{pathname:"/",state: { from: props.location } }}/>:
            <Component {...props}/>
        )}
        />     
    );

export default PublicRoute;    