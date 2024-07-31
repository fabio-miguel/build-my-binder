import "./Card.css";

interface CardProps {
  cardInfo: {
    name: string;
    card_images: { image_url_small: string }[];
  };
}

const Card: React.FC<CardProps> = ({ cardInfo }) => {
  const { name, card_images } = cardInfo;
  const img_url = card_images[0]?.image_url_small || "";

  return (
    <div className="card">
      <img
        className="card__image"
        src={img_url}
        alt={name}
        width="90px"
        height="120px"
      />
    </div>
  );
};

export default Card;
