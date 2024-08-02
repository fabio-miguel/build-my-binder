import Card from "../Card/Card";
import "./Binder.css";

interface CardInfo {
  name: string;
  card_images: { image_url_small: string }[];
}

interface BinderProps {
  cards: CardInfo[];
}

const Binder: React.FC<BinderProps> = ({ cards }) => {
  return (
    <div className="binder">
      {cards.length === 0 ? (
        <p className="binder__empty">No cards selected</p>
      ) : (
        <div className="binder__grid">
          {cards.map((card, index) => (
            <div key={index} className="binder__card">
              <Card cardInfo={card} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Binder;
