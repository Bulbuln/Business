import React, { useState } from "react";
import { useHistory } from "react-router";

const AddIdea = () => {

	const [ title, setTitle] = useState('')
	const [ author, setAuthor] = useState('')
	const [ body, setBody] = useState('');
	const [file, setFile] = useState(null)
	const [isPending, setPending ] = useState(false)

	const added = useHistory()

	const handleSubimit = (e) => {

		e.preventDefault();

		setPending(true)
		const idea = {title, author, body, file}
		fetch('http://localhost:8000/ideas', {
			method:'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(idea)
			
		}).then(() => {
			setPending(false)

			added.push('/')
		})


		
		setTitle('')
		setAuthor('')
		setBody('')
	}

  return (
    <div className="create">
      <h2>Add a New Idea</h2>
      <form onSubmit={handleSubimit}>
        <label htmlFor="Ttle">Idea Title :</label>
        <input type="text" required  value={title}
					onChange={(e) => {
						setTitle( e.target.value)
					}}
				/>
        <label htmlFor="Author">Name:</label>
        <input type="text" required 
					value={author}
					onChange={(e) => {
						setAuthor( e.target.value)
					}}
				/>

        <label htmlFor="Idea">Your Idea:</label>
        <textarea required  value={body} onChange={(e) => {
						setBody( e.target.value)

					}}>

		</textarea>
		<label htmlFor="Image">Idea Image:</label>
		<input type="file" onChange={(e)=> {setFile(URL.createObjectURL(e.target.files[0]))}}/>
			

        

        { !isPending &&<button>Add Idea</button>}
        { isPending &&<button disabled style={{backgroundColor:"green"}}>Added</button>}
      </form>
    </div>
  );
};

export default AddIdea;
