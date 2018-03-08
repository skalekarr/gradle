import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* eslint-disable */
const mapStateToProps = ({  }) => ({
  
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    
  },
    dispatch)
);

class PolicySearchResult extends Component {

  render() {
    return (
      <div className="u-before4of12 u-size5of12 u-after5of12" style={{ 'padding-top': '20px' }}>
        'Policy Details goes here'
      </div>
    );
  }
}

PolicySearchResult.propTypes = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicySearchResult);
