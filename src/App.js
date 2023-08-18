import Card from "./Components/ProfileCard/card";
import userImg from "./Components/assets/img/user.png";

function App() {
  const cardData = {
    userImg: userImg,
    pName: "Johnny’s Cash",
    tUserN: "@degenjohndoe",
    Fvalu: 545,
  };

  const cardData2 = {
    userImg: userImg,
    pName: "Johnny’s Cash",
    tUserN: "@degenjohndoe",
    Fvalu: 545,
  };

  return (
    <>
      <div className="App flex items-center justify-center h-screen gap-5">
        <div className="">
          <Card
            userImg={cardData.userImg}
            pName={cardData.pName}
            tUserN={cardData.tUserN}
            Fvalu={cardData.Fvalu}
            variant="outline"
          />
        </div>
        <div className="">
          <Card
            userImg={cardData2.userImg}
            pName={cardData2.pName}
            tUserN={cardData2.tUserN}
            Fvalu={cardData2.Fvalu}
            variant="shadow"
          />
        </div>
      </div>
    </>
  );
}

export default App;
