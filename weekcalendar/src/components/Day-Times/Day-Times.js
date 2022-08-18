import './Day-Times.css';

const TimeTable = () => {

    const renderTimeRow = () => {
        const timeRow = [];
        for (let i = 0; i < 7; i++) {
            timeRow.push(
                <div className="timeCell" key={`timeCell-${i}`}>

                </div>
            );
        }
        return <div className="timeRow">{timeRow}</div>;
    };

    const renderTimeTable = () => {
        const table = [];
        let time = 0;
        for (let i = 8; i < 21; i++) {

            if (i < 10) {
                time = `0${i}`;
            } else {
                time = i;
            }

            table.push(
                <div className="timeTable">
                    <div class="time-start">{time}:00</div>
                    {renderTimeRow()}
                </div>
            );
        }
        return <>
            {table}
        </>
    }

    return (
        <div>
            {renderTimeTable()}
        </div>
    );
};


export default TimeTable;