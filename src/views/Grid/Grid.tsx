import { News } from '../../types'
import GridItem from '../../components/GridItem/GridItem'
import Article from '../../components/Article/Article'
import MyPopover from '../../components/MyPopover/MyPopover'
import styles from './Grid.module.css'

interface GridProps {
  news: News[]
}

const Grid = ({ news }: GridProps) => {
  return (
    <div className={styles.container}>
      {
        news.map((el: any, index: number) => <MyPopover button={<GridItem key={index} news={el} />} content={<Article news={el} />} />)
      }
    </div>
  )
}

export default Grid

{/*  */ }