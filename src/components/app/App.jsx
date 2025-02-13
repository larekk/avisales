import SideBar from '../side-bar/SideBar'
import Tabs from '../tabs/Tabs'
import Tickets from '../tickets/Tickets'

import styles from './app.module.scss'

const App = () => {
  return (
    <>
      <main className={styles.app}>
        <SideBar />
        <div className={styles.content}>
          <Tabs />
          <Tickets />
        </div>
      </main>
    </>
  )
}

export default App
