import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./List.css"; // Make sure to import the CSS file

const List: React.FC = () => {
  const { isLoading, list } = useSelector((state: RootState) => state.list);

  if (isLoading) {
    return (
      <p className="list__loading" data-testid="loading">
        Loading...
      </p>
    );
  }

  return (
    <div className="card-list" data-testid="list">
      {list.length === 0 ? (
        <p className="card-list__empty">No cards available</p>
      ) : (
        list.map((card) => (
          <div key={card.id} className="card">
            {card.imageUrls.map((imageUrlSmall: string, index: number) => (
              <img
                key={index}
                className="card__image"
                src={imageUrlSmall}
                alt={`${card.name} ${index + 1}`}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default List;
