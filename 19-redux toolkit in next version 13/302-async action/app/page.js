import Image from 'next/image'
import styles from './page.module.css'
import Counter from '@/components/Counter'
import Users from '@/components/Users'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next - Redux toolkit</h1>
      <Counter />
      <Users />
    </main>
  )
}
