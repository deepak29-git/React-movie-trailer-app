import './App.css';
import Row from './Components/Row'
import requests from './Components/requests';
import Navbar from './Components/Navbar'
import Baner from './Components/Baner'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Baner/>
      <Row title="Top Trending" fetchUrl={requests.fetchTrending} isLargerRow/>
      <Row title="Action Movies" fetchUrl={requests.fetchAction}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
      <Row title="Crime Movies" fetchUrl={requests.fetchCrime}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance}/>
      <Row title="Thriller Movies" fetchUrl={requests.fetchThriller}/>
      <Row title="Family Movies" fetchUrl={requests.fetchFamily}/>
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventure}/>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation}/>
      <Row title="Drama Movies" fetchUrl={requests.fetchDrama}/>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular}/>
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentary}/>
      <Row title="War Movies" fetchUrl={requests.fetchWar}/>
      <Row title="Tv Movies" fetchUrl={requests.fetchTvMovies}/>
      <Row title="Science Friction Movies" fetchUrl={requests.fetchScienceFriction}/>
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery}/>
      <Row title="Kid Movies" fetchUrl={requests.fetchKidMovies}/>
    </div>
  );
}

export default App;