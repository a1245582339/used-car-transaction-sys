import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Layout: React.FC = () => {
    useEffect(() => {

    })
    return (
        <BrowserRouter basename="/">
			<Switch>
				<Route path="" >
				</Route>
			</Switch>
		</BrowserRouter>
    )
}
export default Layout