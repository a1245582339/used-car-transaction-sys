import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import View from '@/view'
const App: React.FC = () => {
	useEffect(() => {

	}, [])
	return (
		<BrowserRouter basename="/">
			<Switch>
				<Route path="/login" >
					<View.Login />
				</Route>
				<Route path="/layout" >
					<View.Layout />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
