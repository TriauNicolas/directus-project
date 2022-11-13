import styles from '../../styles/Home.module.css';
import Link from 'next/link';

const TrailerCard = ({DTrailer}) => {
  const imageConcat = `https://ia47fgbo.directus.app/assets/${DTrailer.image}`;

  return (
    <div>
      <Link href={'/' + DTrailer.slug} className={styles.card} >
        <img src={imageConcat} className={styles.backgroundImg} alt={DTrailer.title}></img>
        {/* <img src={imageConcat} class="card-img-top" alt="..." /> */}
        <div className={styles.contentCard}>
          <h2>{DTrailer.title}</h2>
          <p>{DTrailer.synopsis}</p>
          <p>The note : {DTrailer.note} / 5</p>
        </div>
      </Link>
    </div>
  )
}

export default TrailerCard;