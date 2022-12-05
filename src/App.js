import Card from "./Card";
import CustomHook from "./customHook";

function App() {
  const [finalData, error] = CustomHook(
    "https://travpro.yourworldapps.nl/API/app/v2/listings.php?app=las-vegas&lat1=36.5098445064823&lat2=35.74337885497288&lon1=-114.83208606646728&lon2=-115.48191020892334"
  );
  // console.log("data", finalData);
  if (error) {
    return <p>Error...</p>;
  }
  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search for a hotel..."
        />
      </form>
      <Card finalData={finalData} />
    </>
  );
}

export default App;
