import React from 'react'
import { News } from '../../types'
import ListItem from '../../components/ListItem/ListItem'
import Article from '../../components/Article/Article'
import MyPopover from '../../components/MyPopover/MyPopover'
import styles from './List.module.css'

interface ListProps {
  news: News[]
}

const List = ({ news }: ListProps) => {
  return (
    <div className={styles.container}>{
      news.map((el: any, index: number) => <MyPopover button={<ListItem key={index} news={el} />} content={<Article news={el} />} />)
    }</div>
  )
}

export default List