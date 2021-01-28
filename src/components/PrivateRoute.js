import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute = (props) => {
    const validation=()=>{
        if(localStorage.getItem("email"))
        return true;
        else
        return false;
    }

    const adminValidation=()=>{
        if(localStorage.getItem("role")==="admin")
        return true;
        else
        return false;
    }
    const condition = validation();
    const adminCondition=adminValidation();

   if(condition){
       console.log("Pth is...",props.path)
       if(props.path==="/admin"){
           if(adminCondition)
           return <Route  path={props.path}  exact={props.exact} render={props.render} />
           else
           return <Redirect  to="/home"  />
       }
       else{
        return <Route  path={props.path}  exact={props.exact} render={props.render} />

       }
   }
   else{
       return  <Redirect  to="/"  />
   }

    // return  condition ? (<Route  path={props.path}  exact={props.exact} render={props.render} />) : 
    //     (<Redirect  to="/"  />);
};
export  default  PrivateRoute;