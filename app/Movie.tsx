import Link from "next/link";

type MovieProps = {
    id : number
    title : string,
    poster_path: string,
    release_date: string,
}

const Movie = ({id, title, poster_path, release_date} : MovieProps) => {
    const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`

    return (
        <div className="col p-3 movie-item">
            <Link href={`./${id}`} >
                <div className="card text-bg-dark">
                    <img src={imagePath} className="card-img" alt={title} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small>{release_date}</small></p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Movie;