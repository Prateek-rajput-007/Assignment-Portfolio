'use client';
import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import { projects } from '../utils/projectsdb';

function ShowProjects() {
  const [showAll, setShowAll] = useState(false);

  // Control the number of displayed projects (initially 6)
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((project, index) => (
          <PortfolioCard key={index} project={project} />
        ))}
      </div>

      {/* Conditionally render "Show More" button if there are more than 6 projects */}
      {projects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-grad"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
}

export default ShowProjects;
