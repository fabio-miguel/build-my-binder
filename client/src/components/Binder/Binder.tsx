import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Binder.css";
import { RootState } from "../../redux/store";

const Binder: React.FC = () => {
  const selectedCards = useSelector(
    (state: RootState) => state.list.selectedCards
  );
  return (
    <div className="binder">
      {selectedCards.length === 0 ? (
        <p className="binder__empty">No cards selected</p>
      ) : (
        <div className="binder__grid">
          {selectedCards.map((card, index) => (
            <div key={card.id} className="binder__card">
              <Card cardInfo={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Binder;
