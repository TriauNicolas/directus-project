import styles from '../styles/Home.module.css';
import TrailerCard from './components/trailerCard';

const Home = ({ trailers }) => {
  const trailersData = trailers.data;

  return (
    <div className={styles.mainContainer}>
      <h1>HEADER</h1>
      <div className={styles.grid}>
        {trailersData.map((trailer, key) => {
          return (
            <TrailerCard DTrailer={trailer} key={key} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const res = await fetch(process.env.DBTRAILERS);
  const trailers = await res.json();

  console.log(trailers)

  return {
    props: {
      trailers
    },
  }
}