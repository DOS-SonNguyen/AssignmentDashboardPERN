import "./note.css";

const Note = ({ assignments }) => {

    function getMinIndex(assignments) {
        let dateNow = new Date();
        let min = Number.MAX_VALUE;
        let index = 0;
        for (let i = 0; i < assignments.length; i++) {
            if (assignments[i].status === "Not Done") {
                let date = new Date(assignments[i].due_date);
                let seconds = Math.floor((date - dateNow) / 1000);
                let minutes = Math.floor(seconds / 60);
                if (minutes < min) {
                    min = minutes;
                    index = i;
                }
            }

        }
        return index;
    }

    let minIndex = getMinIndex(assignments);


    return (
        <div className="note">
            <div className="note-title">
                <span>{assignments[minIndex].name}</span>
                <div className="note-title-date">
                    ~ <span>{assignments[minIndex].hour}</span>:<span>{assignments[minIndex].minute}</span> <span>{assignments[minIndex].month}</span>/<span>{assignments[minIndex].day}</span>
                </div>
            </div>
            <hr />
            <div className="note-content">
                <h5>Note</h5>
                <p>{assignments[minIndex].description}</p>
            </div>
        </div>
    )
}
export default Note;