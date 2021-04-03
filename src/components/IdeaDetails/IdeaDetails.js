import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai/index'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

const IdeaDetails = () => {
	const { id } = useParams()
	const [ideas, setIdeas] = useState([]);
	const [like, setLike] = useState(false)
	const [count, setCount] = useState(0)


	const deleteIdea = useHistory();


	useEffect(() => {
		const data = localStorage.getItem("count")
		if (data) {
			Number(setCount(+data))
		}
	}, [])


	useEffect(() => {
		localStorage.setItem("count", count)
	}, [count])

	useEffect(() => {


		fetch('http://localhost:8000/ideas/' + id)
			.then((res) => res.json())
			.then(data => {

				setIdeas(data)

			})
			.catch(erorr => {
				console.log(erorr.message)
			})
	}, [])

	const handleDelete = () => {
		fetch('http://localhost:8000/ideas/' + id, {
			method: 'DELETE',

		}).then(() => {
			deleteIdea.push('/')
		})
	}


	return (
		<div className="ideas-details" style={{
			overflow: 'hidden',
			position: 'relative'
		}}>

			<img src={ideas.file} alt="Idea " style={{
				opacity: '0.2',
				position: 'absolute',
				left: '0',
				top: '0',
				width: '100%',
				height: 'auto'
			}}
			/>

			<article style={{ position: 'relative' }}>
				<h2>{ideas.title}</h2>

				<p>Writen by {ideas.author}</p>
				<p className="content-body">{ideas.body}</p>
				<button onClick={handleDelete}>Delete</button>

				<div className="reviwe-part">

					<p id="count">{count}</p>
					{!like && <AiOutlineHeart className={like ? 'like-button' : 'unlike'} onClick={() => { setLike(!like); setCount(count + 1) }} />}
					{like && <AiFillHeart style={{ color: 'red', size: '50px' }} className={like ? 'like-button' : 'unlike'} onClick={() => { setLike(!like); setCount(count - 1) }} />}
				</div>
			</article>






		</div>
	)
}

export default IdeaDetails
