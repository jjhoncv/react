var React = require("react");
var ReactDOM = require("react-dom");

var ContadorComponent = React.createClass({
	getInitialState : function(){
		return {count: this.props.initialCount}
	},

	addToCount : function(delta){
		// cambiar un estado
		this.setState({count: this.state.count + delta});
	},

	render : function(){
		return(
			<div>
				<h3>Contador: {this.state.count}</h3>
				<button onClick={this.addToCount.bind(this, 1)}> +1</button>
				<button onClick={this.addToCount.bind(this, -1)}> -1</button>
			</div>
		);
	}
});

ReactDOM.render(<ContadorComponent initialCount={4}/>, document.getElementById("contenedor"))