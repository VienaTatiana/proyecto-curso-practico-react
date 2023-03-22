import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateNewPass from '../containers/CreateNewPass';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPass from '../containers/RecoveryPass';
import '../styles/global.css';

const App = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Layout>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/Login" component = {Login} />
                <Route exact path = "/CreateNewPass" component = { CreateNewPass} />
                <Route component = { NotFound } />
            </Layout>
        </Switch>
        </BrowserRouter>
    );
}

export default App;