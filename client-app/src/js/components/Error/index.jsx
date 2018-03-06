import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, Modal } from 'react-bootstrap';

import { toggleModal, clearErrors } from '../../actions/action-creators/app';

const mapStateToProps = ({ app: { modals: { errorModal: modal }, errors } }) => ({
  modal,
  errors,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleModal, clearErrors }, dispatch)
);

class ErrorModal extends Component {
  close = () => {
    const { clearErrors: clearingErrors, toggleModal: togglingModal } = this.props;
    const modal = this.props;

    togglingModal({
      modal: 'errorModal',
      active: false,
      properties: modal.properties,
    });

    clearingErrors();
  }

  render() {
    const { errors } = this.props;
    return (
      <Modal show={this.props.modal.active} onHide={this.close}>
        <Modal.Header>
          <Modal.Title className="modal-title" style={{ display: 'inline-block' }}>Policy Error{errors.length > 1 && <span>s</span>}</Modal.Title>
          <Button className="close" bsStyle="link" onClick={this.close} style={{ display: 'inline-block', float: 'right' }}>
            <span>&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          { Object.keys(errors).map((error, i, arr) => (
            <div key={error}>
              {errors[error].error &&
              <h4 id="default_error_text" className="zone-red-bold">{errors[error].error}</h4>
                  }
              {errors[error].message &&
              <p>{errors[error].message}</p>
                  }
              {errors[error].exception &&
              <p>{errors[error].exception}</p>
                  }
              {(arr.length - 1) !== i &&
              <hr />
                  }
            </div>
              ),
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close} className="Button">OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ErrorModal.defaultProps = {
  errors: {},
  modal: {
    active: false, // modal closed by default
    properties: {
      message: 'An error occured.',
    },
  },
};

ErrorModal.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  modal: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
