import "./Card.css";

interface CardProps {
  cardInfo: {
    id: number;
    name: string;
    imageUrl: string;
  };
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ cardInfo, onClick }) => {
  const { id, name, imageUrl } = cardInfo;

  return (
    <div className="card" onClick={onClick}>
      <img
        className="card__image"
        src={imageUrl}
        alt={name}
        width="90px"
        height="120px"
      />
    </div>
  );
};

export default Card;
