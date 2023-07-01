import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import DeleteAllBtn from "../../../common/DeleteAllBtn"
import List from "../../../common/List"
import Jumbotron from "../../../components/Jumbotron"
import { addBook as addBookAction } from "./LibrairySlice"


const LibrairyView = () => {
 
 const librairyData = useSelector(state => state.librairy.books)
 const dispatch = useDispatch()

  const initialState = {
     title :"",
     author :"",
  }
   
  const [newData,setNewData] = useState(initialState)

  const handleSubmit = e => {
        e.preventDefault()
        dispatch(addBookAction(newData))
        setNewData(initialState)

  }
  return (
    <>
      <Jumbotron subtitle='ein Buch in unserer Bibliothek hinzufügen'>
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row justify-content-center">
                   <div className="col-lg-4 m-2">
                    <input 
                    value={newData.title}
                    type="text" 
                    className="form-control"
                    placeholder="Titel"
                    required
                    onChange={e => setNewData({...newData,title: e.target.value})}
                    />
                   </div>
                   <div className="col-lg-4 m-2">
                    <input 
                    value={newData.author}
                    type="text" 
                    className="form-control"
                    placeholder="Author"
                    required
                    onChange={e => setNewData({...newData,author: e.target.value})}
                    />
                   </div>
                  </div>
                <div className="justify-content-center mt-2">
                     <button className="btn btn-warning">Ein Buch hinzufügen</button>
                </div>
              </div>
            </form>
      </Jumbotron>
      <main className="container mt-5">
        <List data={librairyData}/>
         {librairyData.length > 0 &&  <DeleteAllBtn/>}
      </main>
    </>
  )
}

export default LibrairyView
