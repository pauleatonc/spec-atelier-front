import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    TableInput
} from './styles';

const CurrentInputTable = ({
        value,
        type,
        disabled,
        ...restProps
    }) => {
    return(
        <TableInput
            value={value} 
            {...restProps}
        />
    )
};

CurrentInputTable.defaultProps = {
	type: 'number',
	disabled: false
};
CurrentInputTable.propTypes = {
    value: PropTypes.string,
	type: PropTypes.oneOf(['number', 'underline', 'form']),
	disabled: PropTypes.bool,
};


export default CurrentInputTable;