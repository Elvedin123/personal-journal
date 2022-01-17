import { useState } from "react"
import api from "../services/apiConfig.js"
import { useNavigate } from "react-router-dom"
import Form from "./Form.jsx"
const default_input = {
  title: "",
  topic: "",
  info: "",

}
export default function New() {
  const [input, setInput] = useState(default_input);
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const handleTextInput = (event) => {
    const { id, value } = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const fields = { ...input, date: value };
    console.log(fields)
    const res = await api.post("/", { fields });
    console.log(res.data);
    setInput(default_input);
    navigate("/")

  }
  return (
    <div>
      <h1 className="new">New Entry</h1>
      <Form
        className='form'
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        value={value}
        onChange={onChange}
        type="Create Entry"
      />
    </div>
  )
}
