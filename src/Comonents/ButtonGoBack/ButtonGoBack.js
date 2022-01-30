


import PropTypes from 'prop-types';


export const ButtonGoBack = ({onClick}) => {
    return (
        <button onClick={onClick} type='button'>Go back </button>
    )
    
}

ButtonGoBack.prototype = {
    onClick: PropTypes.func.isRequired,
}
