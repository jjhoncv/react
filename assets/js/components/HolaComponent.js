var React = require("react");
var ReactDOM = require("react-dom");

var HolaComponent = React.createClass({
	render : function(){
		return (<div>
			<p>Hola mundo de react {this.props.name}</p>
		</div>);
	}
});

ReactDOM.render(<HolaComponent name="Jhonnatan"/>, document.getElementById("contenedor"));