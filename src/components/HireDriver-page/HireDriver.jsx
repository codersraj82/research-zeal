import DriverCards from "../cards/DiverCards";
import { driverData } from "../cards/driverData";

const HireDriver = () => {
  return (
    <div className="card-container">
      <DriverCards driverData={driverData} />
    </div>
  );
};

export default HireDriver;
