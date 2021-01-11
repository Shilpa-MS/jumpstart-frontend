import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = (props) => {
    const validation=()=>{
        if(localStorage.getItem("email"))
        return true;
        else
        return false;
    }
    const condition = validation();

    return  condition ? (<Route  path={props.path}  exact={props.exact} render={props.render} />) : 
        (<Redirect  to="/"  />);
};
export  default  PrivateRoute;