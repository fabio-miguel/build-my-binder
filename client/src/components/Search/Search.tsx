import { useState } from "react";
import axios from "axios";
import {
  setLoading,
  updateList,
  moreListCardsToLoad,
  nextListPageToLoad,
} from "../../redux/reducers/listSlice";
import { useDispatch } from "react-redux";
import "./Search.css";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${query}`
      );
      const data = response.data.data;
      const cardData = data.map((card: any) => ({
        id: card.id,
        name: card.name,
        imageUrls: card.card_images.map((image: any) => ({
          id: image.id,
          imageUrl: image.image_url_small,
        })),
      }));

      dispatch(updateList(cardData));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search card name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="search__button search__button--large"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
