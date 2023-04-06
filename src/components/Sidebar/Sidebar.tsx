import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { toggleMenu } from '../../features/mobileMenuOpen'
import styles from "./Sidebar.module.css"
import { Link } from 'react-router-dom'
import { countries } from '../../data/countries'

const Sidebar = () => {
  const mobileMenuOpen = useSelector((state: RootState) => state.mobileMenuOpen.value)
  const dispatch: AppDispatch = useDispatch()

  return (
    <>
      <nav className={styles.nav}>
        {countries.map((country => (
          <Link to={`/country/${country.name}`} key={country.code} className={styles.link}>
            <img src={`https://newsapi.org/images/flags/${country.code}.svg`} className={styles.flague} alt='' />
            <li className={styles.name}>{country.name}</li>
          </Link>
        )))}
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => dispatch(toggleMenu())}>
        <Dialog.Panel className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className="flex lg:flex-1">
              <Link to="/">
                <h1 className="font-bold text-xl">gnNews</h1>
              </Link>
            </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-slate-200"
              onClick={() => dispatch(toggleMenu())}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className='flex flex-col gap-2 py-6'>
            {countries.map((country => (
              <Link to={`/country/${country.name}`} key={country.code} className={styles.link}>
                <img src={`https://newsapi.org/images/flags/${country.code}.svg`} className={styles.flague} alt='' />
                <li className={styles.name}>{country.name}</li>
              </Link>
            )))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}


export default Sidebar