import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleTest} from '../actions/index';

class Landing extends Component {
	render() {
		return (
			<div className="col-sm-8 col-sm-offset-2">
				<div className="well text-center">
					<h3>This is the landing page</h3>	
					<h4>Test is {this.props.test ? 'TRUE' : 'FALSE'}</h4>
					<button className="btn btn-default" onClick={() => this.props.handleTest(!this.props.test)}>Toggle Test</button>
				</div>	
			</div>
		);	
	}
}

function mapStateToProps({main}) {
	return {test: main.test};
}

export default connect(mapStateToProps, {handleTest})(Landing);
