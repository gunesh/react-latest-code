import React, {  createContext } from "react";
import templateConfig from '../templateConfig';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const AppContext = createContext({});
const user = JSON.parse(window.localStorage.getItem("user") || '');


class AppProvider extends React.Component<any, any> {
    state = {
        auth: !user || user === null ? false : true,
        isAuthenticated: !user || user === null ? false : true,
        info: {},
        login: () => {
            this.setState(
                (prevState: any) => ({
                    auth: true,
                    isAuthenticated: true,
                }),
                () => {
                    console.log(this.state);
                }
            );
        },
        logout: () => {
            this.setState((prevState: any) => ({
                auth: false,
                isAuthenticated: false,
            }));
        },
        updateInfo: (label: any, value: any) => {
            this.setState((prevState: any) => ({
                info: {
                    ...this.state.info,
                    [label]: value,
                },
            }));
        },
        foldedContent: templateConfig.sidebar.collapsed,
        makeFullContent: () => {
            this.setState((prevState: any) => ({
                foldedContent: true,
            }));
        },
        makeNormalContent: () => {
            this.setState((prevState: any) => ({
                foldedContent: false,
            }));
        },
    };
    render() {
        return (
            <AppContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
const AppConsumer = AppContext.Consumer;
export { AppConsumer, AppProvider };