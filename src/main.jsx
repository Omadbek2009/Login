import React from 'react';
import LoginIn from './components/app/loginin'
import { Route, Switch } from 'react-router-dom';
import Register from './components/app/register';
import Api from './components/app/api';
function Main() {
    return (
        <>
            <Switch>
                <Route exact path='/login' component={LoginIn} />
                <Route exact path='/api' component={Api} />
                <Route  component={Register} />
            </Switch>
        </>
    );
}

export default Main;