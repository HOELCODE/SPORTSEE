import '../css/Indicator.css';

const IndicatorBlock = ({color, logo, span, number}) => {
    return (
        <div className="indicator">
            <div className="indicator-logo" style={{ background: color }}>
                <img src={logo} alt="logo" />
            </div>
            <div className="indicator-content">
                <p>{number}</p>
                <span>{span}</span>
            </div>
        </div>

    )

}

export default IndicatorBlock;
