import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const List: React.FC = () => {
  const { isLoading, list } = useSelector((state: RootState) => state.list);

  if (isLoading) {
    return <p data-testid="loading">Loading...</p>;
  }

  return (
    <div data-testid="list">
      {list.length === 0 ? (
        <p>No cards available</p>
      ) : (
        <div className="card-list">
          {list.map((card) => (
            <div key={card.id} className="card">
              {card.imageUrls.map((imageUrlSmall: string, index: number) => (
                <img
                  key={index}
                  src={imageUrlSmall}
                  alt={`${card.name} ${index + 1}`}
                />
              ))}
              <p>{card.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
