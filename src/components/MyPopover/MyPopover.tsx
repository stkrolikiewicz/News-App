import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import styles from './MyPopover.module.css'

interface PopoverProps {
  button: JSX.Element
  content: JSX.Element
}

const MyPopover = ({ button, content }: PopoverProps) => {
  return (
    <Popover>
      <Popover.Button className='h-full w-full text-letf'>
        {button}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className={styles.panel}>
          <Popover.Button className="fixed z-40 w-full h-full top-0 left-0" />
          <div className="z-50 overflow-y-auto scrollbar-hide rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-6 m-6 max-h-full">
            {content}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MyPopover