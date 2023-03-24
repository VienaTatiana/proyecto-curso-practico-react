import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import Login from '@pages/Login';
import RecoveryPass from '@pages/RecoveryPass';
import CreateNewPass from '@pages/CreateNewPass';
import MyAccount from '@pages/MyAccount';
import NotFound from '@pages/NotFound';
import '@styles/global.css';

const App = () => {
    return(
        <BrowserRouter>
        <Layout>
        <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/login" component = {Login} />
                <Route exact path = "/create-new-pass" component = { CreateNewPass} />
                <Route exact path = "/recovery-pass" component = { RecoveryPass } />
                <Route exact path = "/account" component = {MyAccount} />
                <Route path = "*" component = { NotFound } />
        </Switch>
        </Layout>
        </BrowserRouter>
    );
}

export default App;