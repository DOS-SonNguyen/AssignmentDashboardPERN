import "./tracking.css";
const Tracking = ({ assignments }) => {

    function getTracking(assignments) {
        let completed = 0;
        let inProgress = 0;
        for (let i = 0; i < assignments.length; i++) {
            if (assignments[i].status === "Done") {
                completed++;
            } else {
                inProgress++;
            }
        }
        return { completed, inProgress };
    }

    let tracking = getTracking(assignments);

    return (
        <div className="tracking">
            <div className="tracking-title">
                <h5>Assignments</h5>
                <p>Week</p>
            </div>
            <div className="tracking-content">
                <div className="tracking-content-completed">
                    <span>{tracking.completed}</span>
                    <p>Completed</p>
                </div>
                <div className="tracking-content-todo">
                    <span>{tracking.inProgress}</span>
                    <p>To do</p>
                </div>
            </div>
        </div>
    )
}

export default Tracking;