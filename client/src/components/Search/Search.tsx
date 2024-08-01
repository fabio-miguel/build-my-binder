import { useState } from "react";
import axios from "axios";
import { updateList, setLoading } from "../../redux/reducers/listSlice";
import { useDispatch } from "react-redux";

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

      // Extract card data with image URLs
      const transformedData = data.map((card: any) => ({
        id: card.id,
        name: card.name,
        imageUrls: card.card_images.map((img: any) => img.image_url_small),
      }));
      dispatch(updateList(transformedData));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search card name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
