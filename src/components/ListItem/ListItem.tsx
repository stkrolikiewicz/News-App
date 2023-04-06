import React from 'react'
import { News } from '../../types'
import styles from './ListItem.module.css'
interface ListItemProps {
  news: News
}

const ListItem = ({ news }: ListItemProps) => {
  return (
    <div className={styles.container}>
      <h1 className='font-semibold text-2xl'>{news.title}</h1>
      <div className={styles.info}>
        {news.source && <h2 className='px-2 bg-slate-300 rounded-md font-medium'>{news.source.name}</h2>}
        <h2>{news.publishedAt.replace('T', ", ").split('Z')}</h2>
      </div>
    </div >
  )
}

export default ListItem