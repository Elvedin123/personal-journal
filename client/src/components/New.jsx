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
  const [input, setInput] = useState(default_input)
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
    const fields = input;
    console.log(fields)
    const res = await api.post("/", { fields });
    console.log(res.data);
    setInput(default_input);
    navigate("/")

  }
  return (
    <div>
      <h1>New Entry</h1>
      <Form
        input={input}
        handleTextInput={handleTextInput}
        handleSubmit={handleSubmit}
        type="Create Entry"
      />
    </div>
  )
}
