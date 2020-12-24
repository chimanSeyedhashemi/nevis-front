import React from "react";
import { MapDispatchToProps, connect } from "react-redux";
import { Dispatch } from "redux";
import { IReduxState } from "../../../redux/appState";
import { BaseComponent } from "../../base/baseComponent";
import { AppButton } from "../../form/button";
import { History } from "history"
interface IProps {
    history: History
}

interface IState { }

class NotesComponent extends BaseComponent<IProps, IState> {

    render() {
        return (
            <>
                <div>
                    notes
             </div>
            </>
        );
    }
}

const dispatch2props: MapDispatchToProps<{}, {}> = (dispatch: Dispatch) => {
    return {};
};

const state2props = (state: IReduxState) => {
    return {};
};

export const Notes = connect(state2props, dispatch2props)(NotesComponent);
