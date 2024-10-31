import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue, useRecoilValueLoadable} from "recoil";
import {imageData} from "../../../recoil/selectors/imageSelector.ts";
import {pageState} from "../../../recoil/atoms/pageState.ts";
import styles from './CommonFooter.module.scss'
import {searchState} from "../../../recoil/atoms/searchState.ts";

const CommonFooter = () => {

    const imgSelector = useRecoilValueLoadable(imageData);
    const search = useRecoilValue(searchState);
    const [page, setPage] = useRecoilState(pageState);
    const [step, setStep] = useState(0);

    const newArr: number[] = [];
    for(let i = 1; i<= imgSelector.contents.total_pages; i++) {
        newArr.push(i);
    }

    const length = newArr.length;
    const divide = Math.floor(length/10) + (Math.floor(length % 10) > 0 ? 1 : 0);
    const res = [];

    for(let i = 0; i <= divide; i++) {
        res.push(newArr.splice(0, 10));
    }

    const moveToPage = (page: number) => {
        setPage(page);
    }

    const moveToPrev = () => {
        if(step === 0) {
            return
        } else {
            setStep(step - 1);
            setPage(res[step - 1][0]);
        }
    }
    const moveToNext = () => {
        if(step < res.length -2) {
            setStep(step + 1);
            setPage(res[step + 1][0]);
        }
    }

    useEffect(() => {
        setStep(0);
    }, [search]);

    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button}>
                    <img src="/src/assets/icons/icon-arrowLeft.svg" alt="" onClick={moveToPrev}/>
                </button>
                {res[step] &&
                    res[step].map((item:number, index:number) => {
                        if(item < 11) {
                            return (
                                <button className={index === page - 1 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => {moveToPage(item)}}>
                                    {item}
                                </button>
                            )
                        } else {
                            return (
                                <button className={index === page - 1 - step * 10 ? `${styles.pagination__button} ${styles.active}` : `${styles.pagination__button} ${styles.inactive}`} key={item} onClick={() => {moveToPage(item)}}>
                                    {item}
                                </button>
                            )
                        }
                    })
                }
                <button className={styles.pagination__button}>
                    <img src="/src/assets/icons/icon-arrowRight.svg" alt="" onClick={moveToNext}/>
                </button>
            </div>
        </footer>
    );
};

export default CommonFooter;