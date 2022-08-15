import './Day-Times.css';

const DayTimes = () => {
    const renderTimeTable = () => {
        const timeCell = [];
        for (let i = 0; i < 24 * 7; i++) {
            timeCell.push(
                <div className="timeCell" key={`timeCell-${i}`}></div >
            );
        }
        return <div className="table">{timeCell}</div>;
    }

    return (
        <>
            {renderTimeTable()}
        </>
    );
};

export default DayTimes;