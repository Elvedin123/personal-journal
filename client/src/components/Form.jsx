
export default function Form(props) {
  const { title, topic, info, date } = props.input
  return (
    <form onSubmit={props.handleSubmit}>
      <lable>Title</lable>
      <input
        id="title"
        value={title}
        placeholder="Add a Title"
        onChange={props.handleTextInput}>
      </input>

      <label>Topic</label>
      <input
        id="topic"
        value={topic}
        placeholder="Add a Topic"
        onChange={props.handleTextInput}>
      </input>
    </form>
  )
}
