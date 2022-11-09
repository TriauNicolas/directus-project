import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import TrailerCard from './components/trailerCard'

export default function Home({ trailers }) {
  const trailersData = trailers.data;

  return (
    <div>
      <h1>HEADER</h1>
      <div className={styles.grid}>
        {trailersData.map((trailer) => {
          return(
            // <h1>{trailer.title}</h1>
            <TrailerCard DTrailer={trailer} />
          )
        })}
      </div>
    </div>
  )
  
}

export async function getStaticProps() {
  const res = await fetch(process.env.DBTRAILERS)
  const trailers = await res.json();

  return {
    props: {
      trailers
    },
  }
}