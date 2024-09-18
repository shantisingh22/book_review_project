import "./Homepage.css";
import Col_Container from "./ColContainer.js";

const Row_Container = ({ data, data1, data2}) => {
    return (
        <div className="row-container">
            <div className="divBox1">
                <Col_Container details={data} />
                <Col_Container details={data1} />
                <Col_Container details={data2} />
            </div>
        </div>
    );
};

export default Row_Container;


