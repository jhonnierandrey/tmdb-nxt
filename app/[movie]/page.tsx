export async function generateStaticParams(){
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    
    return res.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

const MovieDetail = async ({params}) => {
    const { movie } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next : {revalidate : 0}})
    const res = await data.json()
    const imagePath = `https://image.tmdb.org/t/p/original${res.backdrop_path}`;

    return (
        // <div>
        //     <h2 className="text-2x1">{res.title}</h2>
        //     <h2 className="text-lg">{res.release_date}</h2>
        //     <h2>Runtime: {res.runtime} minutes</h2>
        //     <h2 className="text-small bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
        //     <Image className="my-12" src={imagePath} width={1000} height={1000} alt={res.title} priority/>
        //     <p>{res.overview}</p>
        // </div>
        <div className="container p-4">
            <div className="card text-bg-dark">
                <img src={imagePath} className="card-img" alt={res.title} />
                <div className="card-img-overlay movie-item-information">
                    <h2 className="card-title">{res.title}</h2>
                    <p className="card-text"><span className="badge text-bg-success">{res.status}</span> <small>{res.release_date}</small></p>
                    <p className="card-text">Runtime: {res.runtime} minutes</p>
                    <p className="card-text">{res.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;