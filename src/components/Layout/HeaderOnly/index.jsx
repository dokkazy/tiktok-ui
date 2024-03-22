import PropTypes from 'prop-types';
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">
                {children}
            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};


export default DefaultLayout