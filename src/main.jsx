import React from 'react';
import LoginIn from './components/app/loginin'
import { Route, Switch } from 'react-router-dom';
import Register from './components/app/register';
function Main() {
    return (
        <>
            <Switch>
                <Route exact path='/login' component={LoginIn} />
                <Route component={Register} />
            </Switch>
        </>
    );
}

export default Main;