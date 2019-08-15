import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/actionsIndex';

const AddedFeature = props => {

  const removeFeature = event => {
    event.preventDefault();
    props.removeFeature(props.id)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
              onClick={ removeFeature }
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
