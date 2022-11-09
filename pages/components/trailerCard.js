import styles from '../../styles/Home.module.css';

export default function TrailerCard({DTrailer}) {
  const imageConcat = `https://ia47fgbo.directus.app/assets/${DTrailer.image}`;

  return (
    <a href="#" className={styles.card} style={{
        backgroundImage: `url(${imageConcat})`,
        backgroundSize: 'cover',
        filter: 'blur(10px)'
        }}>
      {/* <img src={imageConcat} class="card-img-top" alt="..." /> */}
      <div>
        <h2>{DTrailer.title}</h2>
        <p>{DTrailer.synopsis}</p>
        <p>The note : {DTrailer.note} / 5</p>
        <a href="#">See the trailer</a>
      </div>
    </a>
  )
}