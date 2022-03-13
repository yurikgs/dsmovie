import axios from "axios"
import MovieCard from "components/MovieCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react"
import { BASE_URL } from "utils/requests"
import { Movie, MoviePage } from "types/movie"

function Listing() {

   const [pageNumber, setPageNumber] = useState(0)

   const [page, setPage] = useState<MoviePage>({      
   content: [],
   last: true,
   totalPages: 0,
   totalElements: 0,
   size: 0,
   number: 0,
   first: true,
   numberOfElements: 0,
   empty: true
   })


   useEffect(() => {
      axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then(response => {
         const data = response.data as MoviePage
         setPage(data)
      })
   }, [pageNumber])
  

  return (
    <>
    <Pagination/>

        <div className="container mt-5">
          <div className="row">
    {/* Renderização dinâmica de coleção abaixo (via .map):
         * Precisa conter o atributo "key", e este deve ser algum atributo único de cada elemento renderizado. (Característica do React)
    */}

             {page.content.map( movie => (
                 <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">              
                    <MovieCard movie = {movie}/>
                 </div>
             ))}
            
          </div>
        </div>
 
    </>
    
  )
} 

export default Listing