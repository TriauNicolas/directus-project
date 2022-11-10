const trailer = ({ dataTrailer }) => {
  console.log(dataTrailer)

  return (
    <div>
      <h1>{dataTrailer.title}</h1>
    </div>
  )
}

export default trailer;

export const getStaticPaths = async () => {
  const res = await fetch('https://ia47fgbo.directus.app/items/trailers/');
  const dataTrailers = await res.json();

  const paths = (dataTrailers.data).map(trailer => {
    return {
      params: { slug: trailer.slug }
    }
  })
  
  console.log(paths)

  return { paths, fallback: false }
}

export const getStaticProps = async ( context ) => {
  const res = await fetch(`https://ia47fgbo.directus.app/items/trailers/?filter[slug][_eq]=${context.params.slug}`);
  const dataTrailer = await res.json();

  return {
    props: {
      dataTrailer: dataTrailer.data[0]
    }
  }
}