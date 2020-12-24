import React from 'react';
import { connect } from 'react-redux';
import { History } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import { EROUT } from '../../../config/route/routes';
import { RouteLayoutMain } from './routeLayputMain';
import { IReduxState } from '../../../redux/appState';
import { IUser } from '../../../model/model.user';
import { Profile } from '../../pages/profile/profile';
import {Notes} from "../../pages/note/notes"

const appValidUserRoutes = (
    <HashRouter>
        <Switch>
            <Route exact path={EROUT.MAIN} component={() => <Redirect to={EROUT.NOTES} />} />
            <RouteLayoutMain exact path={EROUT.PROFILE} component={Profile} />
            <RouteLayoutMain exact path={EROUT.NOTES} component={Notes} />
        </Switch>
    </HashRouter>
);

interface IProps {
    history: History;
    match: any;
    logged_in_user: IUser | null
}

class LayoutValidUserComponent extends React.Component<IProps> {

    componentDidMount() {
        if (!this.props.logged_in_user) {
            this.props.history.push(EROUT.LOGIN);
        }
    }


    render() {
        return (
            <>
                <Router>{appValidUserRoutes}</Router>
            </>
        )

    }
}

const state2props = (state: IReduxState) => {
    return {
        logged_in_user: state.logged_in_user
    }
}

export const Layout = connect(state2props)(LayoutValidUserComponent);
