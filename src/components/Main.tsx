import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode,
}


const Main = ({ children }: MainProps) => {
  return (
    <main className='h-[var(--main-h)] flex flex-col w-full items-center p-6 gap-3 backdrop:lg:px-8 scrollbar-hide overflow-auto'>
      {children}
    </main>
  )
}

export default Main