import yoga from '../assets/yoga.png';
import swim from '../assets/swim.png';
import cicle from '../assets/cicle.png';
import alter from '../assets/alter.png';
import '../css/Aside.css';

const Aside = () => {
    return (
        <div className="aside">
            <ul>
                <li><img src={yoga} alt="Yoga logo"/></li>
                <li><img src={swim} alt="Swim logo"/></li>
                <li><img src={cicle} alt="Cicle logo"/></li>
                <li><img src={alter} alt="Alter logo"/></li>
            </ul>
            <span>Copiryght, SportSee 2020</span>
        </div>    
    );
};

export default Aside;