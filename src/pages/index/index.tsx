import styles from './styles/index.module.scss';
import CommonHeader from "@components/common/header/CommonHeader.tsx";
import CommonSearchBar from "@components/common/searchBar/CommonSearchBar.tsx";
import CommonNav from '@components/common/navigation/CommonNav';
import CommonFooter from "@components/common/footer/CommonFooter.tsx";
import Card from '@pages/index/components/common/Card'
import DetailDialog from '@components/common/dialog/DerailDialog.tsx'
import {useMemo, useState} from "react";
import {CardDTO} from "./types/card.ts";
import {useRecoilValueLoadable} from "recoil";
import {imageData} from '../../recoil/selectors/imageSelector.ts'

const index = () => {

    // const imgSelector = useRecoilValue(imageData);
    const imgSelector = useRecoilValueLoadable(imageData);
    const [imgData, setImgData] = useState<CardDTO>();

    const [open, setOpen] = useState<boolean>(false);

    const CARD_LIST = useMemo(() => {

        if (imgSelector.state === 'hasValue') {
            const result = imgSelector.contents.results.map((card: CardDTO) => {
                return (
                    <Card data={card} key={card.id} handleDialog={setOpen} handleSetData={setImgData}/>
                )
            })
            return result;
        } else {
            return <div>loging....</div>
        }
    }, [imgSelector])

    return (
        <div className={styles.page}>
            <CommonHeader/>
            <CommonNav/>
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhtoSplash</span>
                        <span className={styles.wrapper__desc}>
                                구디사는 개발자님에게 배우는 react
                            </span>
                        <CommonSearchBar/>
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
            </div>
            <CommonFooter/>
            {open && <DetailDialog data={imgData} handelDialog={setOpen}/>}
        </div>
    );
};

export default index;