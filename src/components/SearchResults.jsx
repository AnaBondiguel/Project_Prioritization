import React, { useState } from "react";
// import { getFilteredProjects } from './Header';
import {Link} from "react-router-dom";

  function SearchResults(){
    let initialData = {
        projects: [],
        userInput: "",
      };
    
      const [data] = useState(initialData);

    function getFilteredProjects() {
        if(!data.userInput) {
            return data.projects;
        }
        let filteredProjects = data.projects.filter((project) => {
            return project.includes(data.userInput);
        });
        return filteredProjects;
      }

    return (
        <div>
            <h1>Search Results</h1>
                <ul>
                    {getFilteredProjects().map((project, index) => {
                        return <li key={index}><Link to={project}>{project}</Link></li>;
                    })}
                </ul>
        </div>
    );
}

export default SearchResults;