import "./reminder.css";

const Reminder = ({assignments}) => {

    function getTime(assignments) {
        let dateNow = new Date();
        let min = Number.MAX_VALUE;
        for (let i = 0; i < assignments.length; i++) {
            if (assignments[i].status === "Not Done") {
                let date = new Date(assignments[i].due_date);
                let seconds = Math.floor((date - dateNow) / 1000);
                let minutes = Math.floor(seconds / 60);
                if (minutes < min) {
                    min = minutes;
                }
            }
        }
        let hours = Math.floor(min / 60);
        let days = Math.floor(hours / 24);

        hours = hours - days * 24;
        let minutes = min - days * 24 * 60 - hours * 60;
        return [days, hours, minutes];
    }

    let [day, hour, minute] = getTime(assignments);

        return (
            <div className="reminder">
                <div className="reminder-title">
                    <p>Please finish your assignment</p>
                </div>
                <div className="reminder-time">
                    <div className="reminder-time-day">
                        <div>
                            <span>{Math.floor(day / 10)}</span>
                            <span>{day % 10}</span>
                        </div>
                        <p>days</p>
                    </div>
                    <div className="reminder-time-hour">
                        <div>
                            <span>{Math.floor(hour / 10)}</span>
                            <span>{hour % 10}</span>
                        </div>
                        <p>hours</p>
                    </div>
                    <div className="reminder-time-minute">
                        <div>
                            <span>{Math.floor(minute / 10)}</span>
                            <span>{minute % 10}</span>
                        </div>
                        <p>minutes</p>
                    </div>
                </div>
            </div>
        );
}

export default Reminder;