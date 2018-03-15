import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestPolicySearch } from '../../actions/action-creators/policyLookUp';
import { addErrors, toggleModal } from '../../actions/action-creators/app';

const mapStateToProps = ({ policyLookUp }) => ({
  policyLookUp,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addErrors,
    toggleModal,
    requestPolicySearch,
  },
    dispatch)
);

class PolicyLookUp extends Component {
  constructor(props) {
    super(props);

    this.showError = this.showError.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearField = this.clearField.bind(this);
  }

  showError(message) {
    const { addErrors: addingErrors, toggleModal: togglingModal } = this.props;

    addingErrors({
      message,
    });
    togglingModal({
      modal: 'errorModal',
      active: true,
      properties: { messages: message },
    });
  }

  handleSearch() {
    const { requestPolicySearch: requestingPolicySearch } = this.props;
    const policyNumber = this.textInput.value;
    const regExpPattern = new RegExp('(?:([A-Z]{2}[0-9]{7}[A-Z]{1})|([A-Z]{2}[0-9]{7}))');

    if (policyNumber === undefined || policyNumber === '') {
      this.showError('Policy Number cannot be Empty. Please Enter a Valid Policy Number');
    } else if (!regExpPattern.test(policyNumber)) {
      this.showError('Please Enter a Valid Policy Number');
    } else {
      requestingPolicySearch(policyNumber);
    }
  }

  clearField() {
    this.textInput.value = '';
  }

  render() {
    return (
      <div className="u-before4of12 u-size5of12 u-after5of12 u-mT5">
        <form>
          <div className="Grid">
            <div className="Grid-cell u-pA0 u-size1of3">Policy Number</div>
            <div className="Grid-cell u-size2of3">
              <input
                className="Input"
                ref={(input) => { this.textInput = input; return this.textInput; }}
                type="text"
              />
              <div className="u-mT5">
                <button className="Button Button--outline" onClick={this.clearField}>Clear</button>
                <button className="Button u-floatRight" onClick={this.handleSearch}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

PolicyLookUp.propTypes = {
  addErrors: PropTypes.func.isRequired,
  requestPolicySearch: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicyLookUp);
