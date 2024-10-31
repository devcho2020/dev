import styles from './CommonHeader.module.scss'
import {Link, useLocation} from "react-router-dom";
import {useRecoilState} from "recoil";
import {pageState} from "../../../recoil/atoms/pageState.ts";
import {searchState} from "../../../recoil/atoms/searchState.ts";
import {useEffect} from "react";

const CommonHeader = () => {

    const location = useLocation();
    const [page, setPage] = useRecoilState(pageState);
    const [search, setSearch] = useRecoilState(searchState);
    useEffect(() => {
        setPage(1);
        setSearch('korea');
    }, [location.pathname]);

    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox}>
                <Link to="/" className={styles.header__logoBox__title}>PhotoSplash</Link>
            </div>
            <div className={styles.header__profileBox}>
                <button className={styles.header__profileBox__button}>사진제출</button>
                <button className={styles.header__profileBox__button}>북마크</button>
                <span className={styles.header__profileBox__userName}>jhcho</span>
            </div>
        </header>
    );
};

export default CommonHeader;