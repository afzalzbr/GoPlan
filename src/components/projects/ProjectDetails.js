import React from 'react'

class ProjectDetails extends React.Component {

    render() {
        var id = this.props.match.params.id
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem Ipsum</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by Afzal Zubair</div>
                        <div>16th Dec, 2019</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetails
