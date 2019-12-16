import React from 'react';

class ProjectSummary extends React.Component {

    render() {
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">Project Title</span>
                    <p>Posted by Afzal Zubair</p>
                    <p className="grey-text">12th Dec, 2019, 6pm</p>
                </div>
            </div>
        )
    }
}

export default ProjectSummary;