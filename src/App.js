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
      <Row title="Kid Movies" fetchUrl={requests.fetchKidMovies}/>
      <Row title="Drama Movies" fetchUrl={requests.fetchDrama}/>
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
      <Row title="Theatres Movies" fetchUrl={requests.fetchTheatres}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    </div>
  );
}

export default App;