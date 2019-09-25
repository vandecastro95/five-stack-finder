import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Header from '../components/Header/Header';
import HomePage from '../pages/HomePage/HomePage';

const AppRouter = () => (
    <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' component={HomePage} exact={true}/>
                </Switch>
    </BrowserRouter>
)

export default AppRouter;