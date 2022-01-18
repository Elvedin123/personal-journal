import Calendar from 'react-calendar'

export default function Form(props) {
  const { title, topic, info } = props.input
  // console.log(props.value.tolocalestring())
  return (
    <div className='form-container'>
      <form className='form' onSubmit={props.handleSubmit}>
        <label className='new-title'>Title</label>
        <input
          id="title"
          value={title}
          placeholder="Add a Title"
          onChange={props.handleTextInput}>
        </input>

        <label className='new-topic'>Topic</label>
        <input
          id="topic"
          value={topic}
          placeholder="Add a Topic"
          onChange={props.handleTextInput}>
        </input>

        <label className='new-info'>Info</label>
        <input
          id="info"
          value={info}
          placeholder="Add your Info"
          onChange={props.handleTextInput}>
        </input>
        <label className='new-date'>Date</label>
        <Calendar value={props.value} onChange={props.onChange} />
        <button>{props.type}</button>
      </form>
    </div>
  )
}
