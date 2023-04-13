type MovieDetailProps = {
    params: {
        movie: number
    }
}

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return res.results.map((movie: any) => ({
        movie: movie.id.toString(),
    }))
}

const MovieDetail = async ({ params }: MovieDetailProps) => {
    const { movie } = params
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 0 } })
    const res = await data.json()
    const imagePath = `https://image.tmdb.org/t/p/original${res.backdrop_path}`;

    return (
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