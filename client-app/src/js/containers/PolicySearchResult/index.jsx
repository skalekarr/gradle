import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from 'react-calendar';
import Select from 'react-select';
import moment from 'moment';

/* eslint-disable */
const mapStateToProps = ({ }) => ({

});

const mapDispatchToProps = dispatch => (
  bindActionCreators({

  },
    dispatch)
);

const options = [{ value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
{ value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
{ value: 'victoria', label: 'Victoria', className: 'State-Vic' },
{ value: 'queensland', label: 'Queensland', className: 'State-Qld' },
{ value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
{ value: 'south-australia', label: 'South Australia', className: 'State-SA' },
{ value: 'tasmania', label: 'Tasmania', className: 'State-Tas' },
{ value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' }];

class PolicySearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dod: moment(new Date()).format('DD/MM/YYYY'),
      dop: moment(new Date()).format('DD/MM/YYYY'),
      showDateOfDeath: false,
      showDateOfProof: false,
      selectValue: 'new-south-wales'
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
      selectValue: newValue,
    });
  }

  handleDOD(date) {
    this.setState({ dod: moment(date).format('DD/MM/YYYY') })
    this.setState({ showDateOfDeath: false });
  }

  handleDOP(date) {
    this.setState({ dop: moment(date).format('DD/MM/YYYY') })
    this.setState({ showDateOfProof: false });
  }

  render() {
    return (
      <div className="u-before4of12 u-size5of12 u-after5of12" style={{ 'padding-top': '20px' }}>
        <div className="Container">
          <div className="Grid">
            <div className="Grid-cell u-size1of2">Policy Number:</div>
            <div className="Grid-cell u-size1of2">12345678</div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of2">Paid to Date:</div>
            <div className="Grid-cell u-size1of2">01/22/17</div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of2">Insurance:</div>
            <div className="Grid-cell u-size1of2">
              <Select
                id="state-select"
                ref={(ref) => { this.select = ref; }}
                autoFocus
                options={options}
                simpleValue
                name="selected-state"
                value={this.state.selectValue}
                onChange={this.updateValue}
                searchable={this.state.searchable}
              />
            </div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of2">Date of Death:</div>
            <div className="Grid-cell u-size1of2">
              <input type="text" value={this.state.dod} onFocus={() => { this.setState({ showDateOfDeath: true }) }} />
              {this.state.showDateOfDeath ?
                <Calendar
                  onChange={this.handleDOD}
                  value={new Date(this.state.dod)}
                /> : ''
              }
            </div>
          </div>
          <div className="Grid">
            <div className="Grid-cell u-size1of2">Date of Proof:</div>
            <div className="Grid-cell u-size1of2">
              <input type="text" value={this.state.dop} onFocus={() => { this.setState({ showDateOfProof: true }) }} />
              {this.state.showDateOfProof ?
                <Calendar
                  onChange={this.handleDOP}
                  value={new Date(this.state.dop)}
                /> : ''
              }
            </div>
          </div>
          <div className="Grid">
            <div>Select a Rider to Pay Today</div>
            <div className="radio">
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
            <div className="radio">
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
          <div className="Grid">
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
