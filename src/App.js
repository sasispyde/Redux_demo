import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Apps from "./js/components/App";

class App extends React.Component{

	render() {
		return(
			<Provider store={store}>
		    	<Apps />
		  	</Provider>
		);
	}
}

export default App;
