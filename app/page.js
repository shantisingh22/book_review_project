import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { dumyData } from "./components/data";
import Footer from './components/Footer';

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Homepage data={dumyData[0]} data1={dumyData[1]} data2={dumyData[2]} />
      <Footer />
    </div>
  );
};
export default Page;
