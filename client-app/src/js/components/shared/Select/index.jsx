import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Select = ({ options, isMultiSelect }) => {
    const select = (<div className="Field" >
        <div className="Select">
            <select id="selector">
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
                <select id="sampleMultiselect" multiple size="3">
                    {options.map((item, index) =>
                        (<option key={`${index}`} value={item.value}>{item.label}</option>)
                    )}
                </select>
            </div>
        </div>
    );
    const renderSelect = isMultiSelect ? multiSelect : select;

    return (renderSelect);
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    isMultiSelect: PropTypes.bool.isRequired,
};

export default Select;
