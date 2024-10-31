import styles from './CommonSearchBar.module.scss'
import {useState} from "react";
import {useRecoilState} from "recoil";
import {searchState} from "../../../recoil/atoms/searchState.ts";
import {pageState} from "../../../recoil/atoms/pageState.ts";

const CommonSearchBar = () => {

    const [search, setSearch] = useRecoilState(searchState);
    const [page, setPage] = useRecoilState(pageState);

    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSearch = () => {
        if(text === "") {
            setSearch('korea');
        } else {
            setSearch(text);
        }
        setPage(1);
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            if(text === "") {
                setSearch('korea');
            } else {
                setSearch(text);
            }
            setPage(1);
        }
    }

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__search}>
                <input type="text" placeholder="찾으실 이미지를 검색하세요" className={styles.searchBar__search__input} onChange={onChange} onKeyDown={handleKeyDown}/>
                <img src="/src/assets/icons/icon-search.svg" onClick={onSearch} />
            </div>
        </div>
    );
};

export default CommonSearchBar;