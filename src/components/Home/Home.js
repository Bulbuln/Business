import React, { useEffect, useState } from 'react'
import IdeaList from '../IdeaList/IdeaList'

const Home = () => {

    const [ideas, setIdeas] = useState(null);
		const [isPending, setPending ] = useState(true)


    useEffect(() => {
			fetch('http://localhost:8000/ideas' )
			.then((res) => res.json())
			.then(data => {
				
				setIdeas(data)
				setPending(false)
			})
			.catch( erorr => {
				console.log(erorr.message)
			})
    },[])

    return (
        <div className="home">

					{isPending && <p>Loading....</p>  }
          { ideas && <IdeaList ideas={ideas}  title="	The Ideas " />}
            
        </div>
    )
}

export default Home
