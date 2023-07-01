 import { useDispatch } from 'react-redux'
import {allDeleteBook as allDeleteBooksAction} from '../redux/features/librairy/LibrairySlice'

 const Deleteallbtn = () => {
    const dispacth =  useDispatch()

   return (
     <div className="d-flex justify-content-center mb-5">
        <button className="btn btn-danger mt-4 mb-5" onClick={()=>dispacth(allDeleteBooksAction())}>alle bücher löschen</button>
    </div>
   )
 }

 export default Deleteallbtn
