import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import BasePage from '../pages/mainPage/BasePage'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Switch>
            <Route path='/' component={BasePage} exact={true}/>
        </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;