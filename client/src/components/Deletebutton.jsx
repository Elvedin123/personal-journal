import api from "../services/apiConfig.js"
import { useNavigate } from "react-router-dom"
export default function Deletebutton(props) {
  const navigate = useNavigate()
  const handleDelete = async () => {
    await api.delete(`${props.entry.id}`)
    navigate(`/`)
  }
  return <button className='delete' type="button" onClick={handleDelete}>Delete Entry</button>
}
