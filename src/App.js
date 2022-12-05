import { useEffect, useState } from "react";
import Card from "./Card";
import CustomHook from "./customHook";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [finalData, error] = CustomHook(
    "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=las-vegas&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334"
  );
  // console.log("data", finalData);
  const handleInputChange = (text) => {
    setInputValue(text);
  };

  useEffect(() => {
    let timer;
    const search = async () => {
      await new Promise((resolve) => {
        timer = setTimeout(resolve, 1000);
      });
      const result = finalData.filter((hotel) => {
        return hotel.company
          .toLowerCase()
          .includes(inputValue.toLocaleLowerCase());
      });
      setSearchResult(result);
      // console.log(inputValue);
    };
    search();
    return () => {
      return clearTimeout(timer);
    };
  }, [inputValue, finalData]);

  let dataSource = [];
  if (searchResult?.length > 0) {
    dataSource = searchResult;
  } else {
    dataSource = finalData;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div className="App">
      <input
        type="search"
        placeholder="Search for a hotel..."
        value={inputValue}
        onChange={(event) => handleInputChange(event.target.value)}
      />
      <Card hotels={dataSource} />
    </div>
  );
}

export default App;
