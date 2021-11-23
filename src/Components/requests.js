const api_key="8b223fd242923d60b37199b3a69e000d";

const requests={
    fetchTrending:`/trending/all/day?api_key=${api_key}`,
    fetchAction:`/discover/movie/?api_key=${api_key}&with_genres=28`,
    fetchComedy:`/discover/movie/?api_key=${api_key}&with_genres=35`,
    fetchCrime:`/discover/movie/?api_key=${api_key}&with_genres=80`,
    fetchHorror:`/discover/movie/?api_key=${api_key}&with_genres=27`,
    fetchRomance:`/discover/movie/?api_key=${api_key}&with_genres=10749`,
    fetchKidMovies:`/discover/movie?api_key=${api_key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
};

export default requests;