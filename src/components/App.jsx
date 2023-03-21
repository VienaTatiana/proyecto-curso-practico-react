import React from 'react';
import CreateNewPass from '../containers/CreateNewPass';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPass from '../containers/RecoveryPass';
import '../styles/global.css';

const App = () => {
    return(
        <Layout>
            <Login />
            <CreateNewPass />
        </Layout>
    );
}

export default App;