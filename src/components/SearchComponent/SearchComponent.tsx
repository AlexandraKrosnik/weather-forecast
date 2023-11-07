// import style from  "./SearchComponent.module.scss";
import "./SearchComponent.scss"
import { SearchProps } from "antd/es/input";
// import type { SearchProps } from '../Search';
import { Input, Space } from 'antd';
import { NavigateFunction, useNavigate } from "react-router-dom";
const { Search } = Input;

const SearchComponent: React.FC = () => {   
    const navigate: NavigateFunction = useNavigate() 
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => navigate(`/${value}`);
    return <Search className="search" placeholder="input search text" allowClear onSearch={onSearch} />}
export default SearchComponent;