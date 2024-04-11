import React, {useState} from "react";

function CreateArea(props) {
  const [title, changeTitle] = useState("")
  const [note, changeNote] = useState("")
  function titleInput(event){
    let {key, value} = event.target;
    console.log(value);
    changeTitle(value);
  }
  function noteInput(event){
    let {key, value} = event.target;
    console.log(value);
    changeNote(value);
  }
  
  return (
    <div>
      <form>
        <input name="title" placeholder="Title" value={title} onChange={titleInput} />
        <textarea name="content" placeholder="Take a note..." value={note} rows="3" onChange={noteInput} />
        <button onClick={(e)=>{e.preventDefault(); changeTitle(""); changeNote(""); props.addNote(title,note)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
