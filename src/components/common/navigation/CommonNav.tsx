import styles from './CommonNav.module.scss'
import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import navJson from './nav.json';
import {useRecoilState} from "recoil";
import {pageState} from "../../../recoil/atoms/pageState.ts";
import {searchState} from "../../../recoil/atoms/searchState.ts";

interface Navigation {
    index : number,
    path : string,
    label: string,
    searchValue: string,
    isActive: boolean
}

const CommonNav = () => {
    const location = useLocation();
    const [navigation] = useState<Navigation[]>(navJson);
    const [page, setPage] = useRecoilState(pageState);
    const [search, setSearch] = useRecoilState(searchState);

    const naviLinks = navigation.map((item: Navigation) => {
        return (
            <Link to={item.path} className={item.isActive ? `${styles.navigation__menu} ${styles.active}` : `${styles.navigation__menu} ${styles.inactive}`} key={item.path}>
                <span className={styles.navigation__menu__label}>{item.label}</span>
            </Link>
        )
    });

    useEffect(() => {
        navigation.forEach((nav: Navigation) => {
            nav.isActive = false;

            if(nav.path === location.pathname || location.pathname.includes(nav.path)) {
                nav.isActive = true;
                setPage(1);
                setSearch(nav.searchValue);
            }
        })
    }, [location.pathname]);

    return (
        <nav className={styles.navigation}>
            {naviLinks}
        </nav>
    );
};

export default CommonNav;