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
        list.map((card) => <p key={card.id}>{card.name}</p>)
      )}
    </div>
  );
};

export default List;
