import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Select = ({ options, isMultiSelect, selectID }) => {
    const select = (<div className="Field" >
        <div className="Select">
            <select id={selectID} autoFocus>
                <option selected disabled>&mdash; Select One &mdash;</option>
                {options.map((item, index) =>
                    (<option key={`${index}`} value={item.value}>{item.label}</option>)
                )}
            </select>
        </div>
    </div >);
    const multiSelect = (
        <div className="Field">
            <div className="Multiselect">
                <select id={selectID} multiple size="3" autoFocus>
                    {options.map((item) =>
                        (<option key={`${item.value}`} value={item.value}>{item.label}</option>)
                    )}
                </select>
            </div>
        </div>
    );

    return (isMultiSelect ? multiSelect : select);
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    isMultiSelect: PropTypes.bool.isRequired,
    selectID: PropTypes.string.isRequired,
};

export default Select;
