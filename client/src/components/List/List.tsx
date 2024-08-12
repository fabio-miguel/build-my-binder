import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectedCard } from "../../redux/reducers/listSlice";
import Card from "../Card/Card";
import "./List.css";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { isLoading, list, moreListCardsToLoad, nextListPageToLoad } =
    useSelector((state: RootState) => state.list);

  const cardImages = list.flatMap((card) =>
    card.imageUrls.map((image) => ({
      id: image.id,
      name: card.name,
      imageUrl: image.imageUrl,
    }))
  );

  const handleCardClick = (card: {
    id: number;
    name: string;
    imageUrl: string;
  }) => {
    dispatch(selectedCard(card));
  };

  return (
    <div className="card-list" data-testid="list">
      {isLoading ? (
        <p>Loading...</p>
      ) : cardImages.length === 0 ? (
        <p className="card-list__empty">No cards available</p>
      ) : (
        cardImages.map((image) => (
          <Card
            cardInfo={{
              id: image.id,
              name: image.name,
              imageUrl: image.imageUrl,
            }}
            onClick={() => handleCardClick(image)}
          />
        ))
      )}
      {/* render more cards or a "Load More" button here */}
    </div>
  );
};

export default List;
