import Card from "../Card/Card";

interface CardInfo {
  name: string;
  card_images: { image_url_small: string }[];
}

interface BinderProps {
  cards: CardInfo[];
}

const Binder: React.FC<BinderProps> = ({ cards }) => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index} cardInfo={card} />
      ))}
    </div>
  );
};

export default Binder;

/**
 * The CardInfo interface is defined. This interface specifies the structure of a card object, which includes a name property of type string and a card_images property. The card_images property is an array of objects, each containing a single property image_url_small of type string. This structure ensures that each card has a name and one or more associated images, with each image having a small URL.
 *
 * Next, the BinderProps interface is defined. This interface specifies the props that the Binder component will accept. It includes a single property cards, which is an array of CardInfo objects. This means that the Binder component expects to receive a list of cards, each conforming to the CardInfo structure.
 *
 * Finally, the Binder component is defined as a React functional component. It uses the React.FC (React Function Component) type with the BinderProps interface, indicating that this component will receive props matching the BinderProps interface. The component destructures the cards prop from its arguments, making it available for use within the component. This setup ensures that the Binder component can effectively manage and render a collection of cards, each with a name and associated images.
 */
