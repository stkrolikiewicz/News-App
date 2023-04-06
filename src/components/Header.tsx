import {
  Bars3Icon,
} from '@heroicons/react/24/outline'
import { BellAlertIcon, Squares2X2Icon, QueueListIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../features/mobileMenuOpen'
import { RootState } from '../app/store'
import clsx from 'clsx'
import { setGrid, setList } from '../features/mainContentDisplay'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom'
import MyPopover from './MyPopover/MyPopover'
import Summary from './Summary'

const Header = () => {
  const dispatch = useDispatch()
  const mobileMenuOpen = useSelector((state: RootState) => state.mobileMenuOpen.value)
  const mainContentDisplay = useSelector((state: RootState) => state.mainContentDisplay.value)
  return (
    <header className="backdrop-blur-lg z-50 sticky top-0">
      <nav className="flex items-center border-b justify-between p-6 max-h-[var(--header-h)] h-[var(--header-h)] lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/"><h1 className="font-bold text-xl">gnNews</h1></Link>
        </div>
        <div className="flex bg-slate-100 rounded-md">
          <button onClick={() => dispatch(setGrid())} className={clsx("text-sm font-semibold leading-6 text-gray-900 rounded-md p-2.5 hover:bg-slate-300", mainContentDisplay === "grid" && "bg-slate-300")}>
            <Squares2X2Icon className='h-6' />
          </button>
          <button onClick={() => dispatch(setList())} className={clsx("text-sm font-semibold leading-6 text-gray-900 rounded-md p-2.5 hover:bg-slate-300", mainContentDisplay === "list" && "bg-slate-300")}>
            <QueueListIcon className='h-6' />
          </button>
        </div>
        <div className="flex gap-5 lg:flex-1 lg:justify-end">
          <MyPopover button={<button className="text-sm font-semibold leading-6 text-gray-900 p-2.5 -mx-2.5 rounded-md hover:bg-slate-200"><BellAlertIcon className='h-6 ' /></button>} content={
            <Summary />
          } />

          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2.5 -mx-2.5 hover:bg-slate-200 inline-flex items-center justify-center rounded-md text-gray-700"
              onClick={() => {
                dispatch(toggleMenu())
              }}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header