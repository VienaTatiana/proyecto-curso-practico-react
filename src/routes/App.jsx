import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateNewPass from '../containers/CreateNewPass';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPass from '../containers/RecoveryPass';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
    return(
        <BrowserRouter>
        <Layout>
        <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/create-new-pass" component = { CreateNewPass} />
                <Route exact path = "/recovery-pass" component = {RecoveryPass} />
                <Route path = "*" component = { NotFound } />
        </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default App;