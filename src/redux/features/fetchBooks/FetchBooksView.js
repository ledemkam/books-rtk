import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Jumbotron from "../../../components/Jumbotron"
import Spinner from "../../../common/Spinner"
import Alerts from "../../../common/Alerts"
import Cards from "../../../common/Cards"
import {fecthBooks as fetchBooksAction} from "./FetchbooksSlice"

const FetchBooksView = () => {
  const dispatch = useDispatch()
  const booksSliceData = useSelector(state=>state.search)


  const [title,setTitle]=useState(" ")
  const handlerSubmit = e => {
    e.preventDefault()
    dispatch(fetchBooksAction(title))
  }
  return (
    <>
       <Jumbotron subtitle="Gibt das Thema des Buches an, das bei Google gesucht werden soll">
          <form  className="form-inline d-flex flex-row " onSubmit={handlerSubmit}>
          <div className="form-group w-50 m-2 ">
                    <input 
                    value={title}
                    type="text" 
                    className="form-control"
                    placeholder="suchen..."
                    required
                    onChange={e=>setTitle(e.target.value)}
                    />
         </div>
         <div className="form-group w-25 m-2">
         <button className="btn btn-warning">Nach Buch suchen ...</button>

         </div>

        </form>
        
       </Jumbotron>
       <main className="container mb-3">
          <div id="accordion">
          {
            booksSliceData.isLoading ? <Spinner/>
            : booksSliceData.error !=="" ? <Alerts>{booksSliceData.error}</Alerts>
            : <Cards booksArray={booksSliceData.fetchedBooks} />
          
           }
          </div>
       </main>
    </>
  )
}

export default FetchBooksView