import React from 'react'
import { Link } from 'react-router-dom'

const IdeaList = ({ ideas, title }) => {
  return (
    <div className="idea-list">
      <h1>{title}</h1>
      {ideas.map((idea) => {
        return (
          <div className="ideas-preview" key={idea.id}>
            <Link to={`/ideas/${idea.id}`}>
              <h2>{idea.title}</h2>
              <img src={idea.file} alt={idea.id}/>
              <p>This Idea is By {idea.author}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default IdeaList
