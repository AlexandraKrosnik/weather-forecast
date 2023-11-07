import './Header.scss';
import ModeSwitcher from './ModeSwitcher/ModeSwitcher';

const Header: React.FC = () => (
    <div className="header-wrapper">
        <ModeSwitcher />
    </div>
);
export default Header;
