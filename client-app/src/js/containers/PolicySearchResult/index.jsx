import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import Select from '../../components/shared/Select';
import CustomCalendar from '../../components/shared/Calendar';

/* eslint-disable */

const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  },
    dispatch)
);

class PolicySearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insuranceSelected: 'new-south-wales'
    }
    this.handleDOD = this.handleDOD.bind(this);
    this.handleDOP = this.handleDOP.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  updateValue(newValue) {
    this.setState({
      insuranceSelected: newValue,
    });
  }

  handleDOD(date) {
    this.setState({ dod: moment(date).format('MM/DD/YYYY')});
  }

  handleDOP(date) {
    this.setState({ dop: moment(date).format('MM/DD/YYYY')});
  }

  render() {
    return (
      <div className="u-before4of12 u-size6of12 u-after5of12" style={{ 'padding-top': '20px' }}>
        <div className="Container">
          <div className="Grid">
            <div className="Grid-cell u-size1of3">Policy Number:</div>
            <div className="Grid-cell u-size2of3">12345678</div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of3">Paid to Date:</div>
            <div className="Grid-cell u-size2of3">01/22/17</div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of3">Insured:</div>
            <div className="Grid-cell u-size2of3">
              <Select
                options={[{ 'value': 'Value1', 'label': 'Label1' }, { 'value': 'Value2', 'label': 'Label2' }]}
                value={this.state.insuranceSelected}
                isMultiSelect={false}
                onChange={this.updateValue}
              />
            </div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of3">Date of Death:</div>
            <div className="Grid-cell u-size2of3 u-mT1">
              <CustomCalendar
                handleDateChange={date => this.handleDOD(date)}
                selectedDate={moment(this.state.dod).format('MM/DD/YYYY')}
              />
            </div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of3">Date of Proof:</div>
            <div className="Grid-cell u-size2of3 u-mT1">
              <CustomCalendar
                handleDateChange={date => this.handleDOP(date)}
                selectedDate={moment(this.state.dop).format('MM/DD/YYYY')}
              />
            </div>
          </div>
          <div className="Grid u-pL4">
            <div>Select a Rider to Pay Today</div>
            <div className="radio u-pL4">
              <label className="Radio">
                <input type="radio" name="option" value="accidentalDeath"
                  /* checked={this.state.selectedOption === 'accidentalDeath'} */
                  onChange={this.handleOptionChange} />
                <div class="Radio-wrapper">
                  <div class="Radio-span">
                    <span class="Radio-select"></span>
                  </div>
                  <span class="Radio-label">Accidental Death</span>
                </div>              </label>
            </div>
            <div className="radio u-pL4">
              <label className="Radio">
                <input type="radio" name="option" value="heartStroke"
                  /* checked={this.state.selectedOption === 'heartStroke'} */
                  onChange={this.handleOptionChange} />
                <div class="Radio-wrapper">
                  <div class="Radio-span">
                    <span class="Radio-select"></span>
                  </div>
                  <span class="Radio-label">Heart Stroke</span>
                </div>
              </label>
            </div>
          </div>
          <div className="Grid u-pL4 u-mT4">
            <button className="Button">Back</button>
            <button className="Button u-floatRight">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

PolicySearchResult.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(PolicySearchResult);
