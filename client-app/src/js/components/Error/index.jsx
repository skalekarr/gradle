import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
    const { errors, modal: { active } } = this.props;
    const activeClass = active ? 'is-open' : '';
    const errorOverlay = (<div className={`Overlay ${activeClass}`} id="overlayerror" role="dialog" data-aria-modal="true">
      <div className="Overlay-body Container" style={{ width: '50%' }}>
        <div>
          <label htmlFor="policyerror">Policy Error{errors.length > 1 && <span>s</span>}</label>
          <button className="Overlay-close u-floatRight" onClick={this.close} data-overlay-trigger="close" />
        </div>
        <hr className="u-mT5 u-mB5" />
        <div>
          {Object.keys(errors).map((error, i, arr) => (
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
        </div>
        <hr className="u-mT5 u-mB5" />
        <button onClick={this.close} className="Button u-floatRight">OK</button>
      </div>
    </div>);

    return (
      active && errorOverlay
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
