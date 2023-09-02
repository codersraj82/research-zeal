//Cards//
import Cards from "../cards/cards";
import { cardData } from "../cards/cardData";
const HireCar = () => {
  return (
    <div className="card-container">
      <Cards cardData={cardData} />
    </div>
  );
};
export default HireCar;
