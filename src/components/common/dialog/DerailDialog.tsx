import styles from './DetailDialog.module.scss';
import {CardDTO} from "@pages/index/types/card";
import {Tag} from "../../../pages/index/types/card.ts";
import {useState} from "react";
import toast, {toastConfig} from "react-simple-toasts";

toastConfig({ theme: 'dark' })

interface Props {
    data: CardDTO,
    handelDialog:(eventValue: boolean) => void
}

const DerailDialog = ({data, handelDialog}: Props) => {

    const [checkBookmark, setCheckBookmark] = useState<boolean>(false);

    const closeDialog = () => {
        handelDialog(false);
    }

    const clickBookmark = () => {
        setCheckBookmark(!checkBookmark)
        toast('dd')
    }

    return (
        <div className={styles.container}>
            <div className={styles.container__dialog}>
                <div className={styles.container__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.button__button} onClick={closeDialog}>
                            <span className="material-symbols-outlined" style={{fontSize: 28 + 'px'}}>close</span>
                        </button>
                        <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" className={styles.close__authorImage}/>
                        <span className={styles.close__authorName}>{data.user.name}</span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button} onClick={clickBookmark}>
                            {!checkBookmark
                            ? <span className="material-symbols-outlined" style={{fontSize: 16 + 'px'}}>favorite</span>
                            : <span className="material-symbols-outlined" style={{fontSize: 16 + 'px', color: 'red'}}>favorite</span>
                            }
                            북마크
                        </button>
                        <button className={styles.bookmark__button}>다운로드</button>
                    </div>
                </div>
                <div className={styles.container__dialog__body}>
                    <img src={data.urls.small} className={styles.image}/>
                </div>
                <div className={styles.container__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>이미지 크기</span>
                            <span className={styles.infoBox__item__value}>{data.width} X {data.height}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>업로드</span>
                            <span className={styles.infoBox__item__value}>{data.created_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>마지막 업데이트</span>
                            <span className={styles.infoBox__item__value}>{data.updated_at.split("T")[0]}</span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>다운로드</span>
                            <span className={styles.infoBox__item__value}>{data.likes}</span>
                        </div>
                    </div>
                    <div className={styles.tagBox}>
                        <div className={styles.tagBox__tag}>
                            {/* unsplash Api 에서 더이상 태그 정보를 제공하지 않음.*/}
                            {
                                data.tags
                                    ? data.tags.map((tag: Tag) => {
                                        return (
                                            <div className={styles.tagBox__tag} key={tag.title}>{tag.title}</div>
                                        )
                                    })
                                    : <div className={styles.tagBox__tag}>태그없음</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DerailDialog;