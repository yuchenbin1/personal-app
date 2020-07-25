import React, { lazy, Suspense } from 'react';
import {Route,Switch} from 'react-router-dom';
import { Spin } from 'antd';
import styles from './index.module.less';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
//import Setting from '../pages/Setting';

const Home=lazy(()=>import('../pages/Home'));
const Login=lazy(()=>import('../pages/Login'));
const Register=lazy(()=>import('../pages/Register'));
const Setting =lazy(()=>import('../pages/Setting'));


const Router=()=>(
    <Suspense 
        fallback={
            <div className={styles.spinWrap}>
                <Spin size="large"/>
            </div>
        }
    >
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/setting" component={Setting}/>
        </Switch>
    </Suspense>
)

export default Router;