import Calendar from 'react-calendar'

export default function Form(props) {
  const { title, topic, info } = props.input
  console.log(props.value)
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Title</label>
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

      <label>Info</label>
      <input
        id="info"
        value={info}
        placeholder="Add your Info"
        onChange={props.handleTextInput}>
      </input>
      <label>Date</label>
      <Calendar value={props.value} onChange={props.onChange} />
      <button>{props.type}</button>
    </form>

  )
}
