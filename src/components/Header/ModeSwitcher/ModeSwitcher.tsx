import DarkModeToggle from 'react-dark-mode-toggle';
import useThemeContext from '../../../context/theme';
const ModeSwitcher: React.FC = () => {
    const {themeMode, darkTheme, defaultTheme} = useThemeContext();
    console.log(themeMode);
    const onThemeChange = (isDark: boolean) => {
        if (isDark) {
            darkTheme();
        } else {
            defaultTheme();
        }
    };
    return <DarkModeToggle onChange={onThemeChange} checked={themeMode === 'dark'} size={60} />;
};

export default ModeSwitcher;
