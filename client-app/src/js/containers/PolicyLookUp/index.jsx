import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

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
  showError = (message) => {
    addErrors({
      message,
    });
    toggleModal({
      modal: 'errorModal',
      active: true,
      properties: { messages: message },
    });
  }

  handleSearch = () => {
    const policyNumber = this.textInput.value;

    if (policyNumber === undefined || policyNumber === '') {
      this.showError('Policy Number cannot be Empty. Please Enter a Valid Policy Number');
    } else if (isNaN(policyNumber)) {
      this.showError('Policy Number can be only Numbers. Please Enter a Valid Policy Number');
    } else if (policyNumber.length !== 8) {
      this.showError('Policy Number should be of 8 characters. Please Enter a Valid Policy Number');
    } else {
      requestPolicySearch(policyNumber);
    }
  }

  clearField = () => {
    this.textInput.value = '';
  }

  render() {
    return (
      <div className="u-before4of12 u-size3of12 u-after5of12">
        <hr />
        <form>
          <FormGroup
            controlId="policyLookUp"
          >
            <Row>
              <Col md={6} xs={6}>
                <ControlLabel>PolicyNumber</ControlLabel>
              </Col>
              <Col md={6} xs={6}>
                <FormControl
                  inputRef={this.textInput}
                  type="text"
                />
              </Col>
            </Row>
          </FormGroup>
        </form>
        <Row>
          <Col md={6} xs={6}>
            <Button className="Button Button--outline" onClick={this.clearField}>Clear</Button>
          </Col>
          <Col md={6} xs={6}>
            <Button className="Button" onClick={this.handleSearch}>Submit</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

PolicyLookUp.propTypes = {
  requestPolicySearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PolicyLookUp);
