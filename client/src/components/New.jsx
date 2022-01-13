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
  return (
    <div>
      <h1>New Entry</h1>
      <Form input={input} />
    </div>
  )
}
