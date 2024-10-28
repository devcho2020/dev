import styles from './Card.module.scss'
import {CardDTO} from "../../types/card.ts";

interface Props {
    data : CardDTO,
    handleDialog:(eventValue: boolean) => void,
    handleSetData:(eventValue: CardDTO) => void
}

const Card = ({data, handleDialog, handleSetData}: Props) => {

    const opendialog = () => {
        handleDialog(true);
        handleSetData(data);
    }

    return (
        <div className={styles.card} onClick={opendialog}>
            <img src={data.urls.small} alt={data.alt_description} className={styles.card__image}/>
        </div>
    );
};

export default Card;