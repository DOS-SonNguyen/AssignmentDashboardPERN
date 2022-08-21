import Calendar from "react-calendar";
import { useState } from 'react';

import "./calendar.css";
const CalendarBox = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Calendar onChange={setDate} value={date} />
        </div>

    );
}
export default CalendarBox;