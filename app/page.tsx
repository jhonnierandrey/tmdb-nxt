import Movie from "./Movie";

type MovieType = {
  id : number
  title : string,
  poster_path: string,
  release_date: string,
}

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {
          res.results.map((movie : MovieType) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))
        }
      </div>
    </main>
  )
}
