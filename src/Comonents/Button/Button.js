

import PropTypes from 'prop-types';
 import style from '../Style/Style.module.css';




export const Button = ({ nextPage, children, loading }) => {
    return (
        <>

            {loading && <div> {children}</div>}

            <button type="button" onClick={nextPage} disabled={loading} className={style.Button} >
                {loading && <span>Loading...</span>}
                {!loading && <span>Load More</span>}
            </button>
        </>)
}

Button.propTypes = {
    nextPage: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,

}



///