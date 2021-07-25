import { useState } from "react";
import Landing from "./components/Landing";
import Game from "./components/Game";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	const [options, setOptions] = useState({
		level: "",
		size: "",
	});
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Landing options={options} setOptions={setOptions} />
					</Route>
					<Route exact path="/game">
						<Game options={options} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
