import styles from './CommonHeader.module.scss'

const CommonHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__logoBox}>
                <span className={styles.header__logoBox__title}>PhotoSplash</span>
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