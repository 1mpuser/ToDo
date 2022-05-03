import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AboutStartPage from "../../../pages/AboutStartPage";
import ToDoPage from "../../../pages/ToDoPage";
import ErrorPage from "../../../pages/ErrorPage";
const Router = () => {    
    return (	
        <Switch>
            <Route path='/about'>
                <AboutStartPage />
            </Route>
            <Route path='/todos'>
                <ToDoPage />
            </Route>
            <Route path="/error">
                <ErrorPage/>
            </Route>
            <Redirect to="/error"/>
        </Switch>
    );
}

export default Router;