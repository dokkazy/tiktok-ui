import PropTypes from 'prop-types';
import Header from "../components/Header";
import Siderbar from "./Sidebar";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Siderbar />
            </div>
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