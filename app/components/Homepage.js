
import "./Homepage.css";
import Row_Container from "./RowContainer.js";
import { dumyData } from "./data.js"; 
const Homepage = () => {
    return (
        <div className="divBox">
            <Row_Container data={dumyData[0]} data1={dumyData[1]} data2={dumyData[2]} /> 
            <Row_Container data={dumyData[3]} data1={dumyData[4]} data2={dumyData[5]} /> 
            <Row_Container data={dumyData[6]} data1={dumyData[7]} data2={dumyData[8]} /> 
        </div>
    );
};

export default Homepage;

