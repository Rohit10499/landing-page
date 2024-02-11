const SectionHeader = ({ title, start }) => {
    return (
        <div className={start ? "align-items-start" : "align-items-center"}>
            <h3 className="text-centen section-header">{title}</h3>
            <div className="deals-of-day-border"></div>
        </div>
    );
};

export default SectionHeader;
