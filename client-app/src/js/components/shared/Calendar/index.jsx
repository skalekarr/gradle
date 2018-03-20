import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';

/* eslint-disable */
class CustomCalendar extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            calendarIsVisible: false
        };
    }

    handleClick() {
        if (!this.state.calendarIsVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            calendarIsVisible: !prevState.calendarIsVisible,
        }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            this.setState(prevState => ({
                calendarIsVisible: !prevState.calendarIsVisible,
            }));
        }

        this.handleClick();
    }

    handleChange(date) {
        const { handleDateChange } = this.props;
        handleDateChange(date);
    }

    render() {
        const { selectedDate } = this.props;

        return (
            <div className="popover-container" ref={node => { this.node = node; }}>
                <div className="Field">
                    <input type="text" className="Input" value={selectedDate} onClick={this.handleClick} />                    
                </div>
                {this.state.calendarIsVisible ?
                    <div className="Field">
                        <Calendar
                        onChange={this.handleChange}
                        value={new Date(selectedDate)}
                        />
                    </div> : ''
                }
            </div>
        );
    }
}

CustomCalendar.propTypes = {
    handleDateChange: PropTypes.func.isRequired,
    selectedDate: PropTypes.string.isRequired,
};

export default CustomCalendar;
