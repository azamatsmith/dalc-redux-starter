import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCount, subtractFromCount} from '../actions/actions_counter';

class Counter extends Component {
  render() {
    return(
      <div className="col-sm-8 col-sm-offset-2">
				<div className="well text-center">
          <h3>Counting the number of rubber bands shot at Terry</h3>
          <h1>Number Shot: {this.props.count}</h1>
          <div className="row">
            <button 
              className="btn btn-default"
              onClick={this.props.addToCount}
              >Hit
            </button>
            <button 
              className="btn btn-default"
              onClick={() => this.props.subtractFromCount(this.props.count)}
              >Miss
            </button>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps({counter}) {
  return {count: counter.count};
}

export default connect(mapStateToProps, {addToCount, subtractFromCount})(Counter);