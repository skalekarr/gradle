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

  handleSearch = () => {
    const { requestPolicySearch: requestingPolicySearch } = this.props;
    const policyNumber = this.textInput.value;
    const regExpPattern1 = new RegExp('[A-Z]{2}[0-9]{7}');
    const regExpPattern2 = new RegExp('[A-Z]{2}[0-9]{7}[A-Z]{1}');

    if (policyNumber === undefined || policyNumber === '') {
      this.showError('Policy Number cannot be Empty. Please Enter a Valid Policy Number');
    } else if (!regExpPattern1.test(policyNumber) || !regExpPattern2.test(policyNumber)) {
      this.showError('Please Enter a Valid Policy Number');
    } else {
      requestingPolicySearch(policyNumber);
    }
  }

  clearField = () => {
    this.textInput.value = '';
  }

  render() {
    return (
      <div className="u-before4of12 u-size5of12 u-after5of12" style={{ 'padding-top': '20px' }}>
        <form>
          <FormGroup
            controlId="policyLookUp"
          >
            <Row>
              <Col md={6} xs={6}>
                <ControlLabel>Policy Number</ControlLabel>
              </Col>
              <Col md={6} xs={6}>
                <FormControl
                  inputRef={(input) => { this.textInput = input; return this.textInput; }}
                  type="text"
                />
                <Row style={{ 'padding-top': '20px' }}>
                  <Col md={6} xs={6}>
                    <Button className="Button Button--outline" onClick={this.clearField}>Reset</Button>
                  </Col>
                  <Col md={6} xs={6}>
                    <Button className="Button pull-right" onClick={this.handleSearch}>Submit</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </FormGroup>
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
