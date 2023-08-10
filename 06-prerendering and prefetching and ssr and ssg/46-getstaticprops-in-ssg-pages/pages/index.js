
import styles from '@/styles/Home.module.css'

export default function Home({data}) {
  
  return (
    <div className={styles.main}>
      <h3>Next.js Course</h3>
      <h1>{data}</h1>
    </div>
  )
}

export async function getStaticProps() {
  // fetch data from api
  const data="Azam Golestan"

  return {
    props: {
      data
    }
  }
}