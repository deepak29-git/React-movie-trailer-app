const api_key="8b223fd242923d60b37199b3a69e000d";

const requests={
    fetchTrending:`/trending/all/day?api_key=${api_key}`,
    fetchAction:`/discover/movie/?api_key=${api_key}&with_genres=28`,
    fetchComedy:`/discover/movie/?api_key=${api_key}&with_genres=35`,
    fetchCrime:`/discover/movie/?api_key=${api_key}&with_genres=80`,
    fetchHorror:`/discover/movie/?api_key=${api_key}&with_genres=27`,
    fetchRomance:`/discover/movie/?api_key=${api_key}&with_genres=10749`,
    fetchThriller:`/discover/movie/?api_key=${api_key}&with_genres=53`,
    fetchFamily:`/discover/movie/?api_key=${api_key}&with_genres=10751`,
    fetchAdventure:`/discover/movie/?api_key=${api_key}&with_genres=12`,
    fetchAnimation:`/discover/movie/?api_key=${api_key}&with_genres=16`,
    fetchDrama:`/discover/movie/?api_key=${api_key}&with_genres=18`,
    fetchPopular:`/discover/movie/?api_key=${api_key}&sort_by=popularity.desc`,
    fetchDocumentary:`/discover/movie/?api_key=${api_key}&with_genres=99`,
    fetchWar:`/discover/movie/?api_key=${api_key}&with_genres=10752`,
    fetchTvMovies:`/discover/movie/?api_key=${api_key}&with_genres=10770`,
    fetchScienceFriction:`/discover/movie/?api_key=${api_key}&with_genres=878`,
    fetchMystery:`/discover/movie/?api_key=${api_key}&with_genres=9648`,
    fetchKidMovies:`/discover/movie?api_key=${api_key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
};

export default requests;