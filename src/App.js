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
      <Row title="Kid Movies" fetchUrl={requests.fetchKidMovies}/>
    </div>
  );
}

export default App;