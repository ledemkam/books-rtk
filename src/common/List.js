import { useDispatch } from 'react-redux'
import {deleteBook as deleteBookAction} from '../redux/features/librairy/LibrairySlice'

const List = ({data}) => {
  const dispacth =  useDispatch()
  return (
    <ul className="list-group">
      {
         data.length > 0 ?
          data.map((data)=>{
              return(
                  <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
                         <span>Titel: <strong className='p-2'>{data.title}</strong></span>
                         <span>Author:<strong className='p-2'>{data.author}</strong></span>
                         <button className="btn btn-danger" onClick={()=>dispacth(deleteBookAction(data.id))}>x</button>
                  </li>
              )
          })
          :
          <p className="text-center">keine Daten</p>
      }
    </ul>
  )
}

export default List
