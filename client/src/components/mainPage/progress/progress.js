import "./progress.css";

const Progress = ({ assignments }) => {

    return (
        <div className="progress">
            <div className="progress-title">
                <h5>Assignments</h5>
            </div>
            <div className="progress-content">
                <div className="progress-content-subject1">
                    <div className="progress-content-subject1-title">
                        <span>{assignments[0].name}</span>
                        <div>
                            <span>{assignments[0].progress}%</span>
                        </div>
                    </div>
                    <div className="progress-content-subject1-container">
                        <div className="progress-content-subject1-container-bar" style={{ width: assignments[0].progress + "%" }}>
                        </div>
                    </div>
                </div>
                <div className="progress-content-subject2">
                    <div className="progress-content-subject2-title">
                        <span>{assignments[1].name}</span>
                        <div>
                            <span>{assignments[1].progress}%</span>
                        </div>
                    </div>
                    <div className="progress-content-subject2-container">
                        <div className="progress-content-subject2-container-bar" style={{ width: assignments[1].progress + "%" }}>
                        </div>
                    </div>
                </div>
                <div className="progress-content-subject3">
                    <div className="progress-content-subject3-title" >
                        <span>{assignments[2].name}</span>
                        <div>
                            <span>{assignments[2].progress}%</span>
                        </div>
                    </div>
                    <div className="progress-content-subject3-container">
                        <div className="progress-content-subject3-container-bar" style={{ width: assignments[2].progress + "%" }}>
                        </div>
                    </div>
                </div>
                <div className="progress-content-subject4">
                    <div className="progress-content-subject4-title">
                        <span>{assignments[3].name}</span>
                        <div>
                            <span>{assignments[3].progress}%</span>
                        </div>
                    </div>
                    <div className="progress-content-subject4-container">
                        <div className="progress-content-subject4-container-bar" style={{ width: assignments[3].progress + "%" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress;