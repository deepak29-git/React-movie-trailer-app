const api_key="8b223fd242923d60b37199b3a69e000d";

const requests={
    fetchTrending:`/trending/all/day?api_key=${api_key}`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}`,
    fetchDrama:`/discover/movie?api_key=${api_key}&with_genres=18&primary_release_year=2014`,
    fetchPopular:`/movie/popular?api_key=${api_key}&sort_by=popularity.desc`,
    fetchComedy:`/discover/movie?api_key=${api_key}&with_genres=35&with_cast=23659&sort_by=revenue.desc`,
    fetchTheatres:`/movie/popular?api_key=${api_key}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
    fetchKidMovies:`/discover/movie?api_key=${api_key}&certification_country=US&certification.lte=G&sort_by=popularity.desc`,
};

export default requests;