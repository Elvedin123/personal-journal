import api from "../services/apiConfig.js"
import { useNavigate } from "react-router-dom"
export default function Deletebutton(props) {
  const navigate = useNavigate()
  const handleDelete = async () => {
    const res = await api.delete(`${props.id}`)
    navigate(`/`)
  }
  return <button onClick={handleDelete}>Delete Entry</button>
}
