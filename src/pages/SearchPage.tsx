import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import SearchComponent from '../components/SearchComponent/SearchComponent';

import "./style/SearchPage.scss"

const SearchPage: React.FC = () => (
    <Container>
        <div className="searchPage-wrapper">
            <Header />
            <SearchComponent />
        </div>
    </Container>
);

export default SearchPage;
