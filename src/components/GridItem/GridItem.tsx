import { News } from '../../types'
import styles from './GridItem.module.css'

interface GridItemProps {
  news: News
}

const GridItem = ({ news }: GridItemProps) => {
  return (
    <div className={styles.card}>
      {news.urlToImage && <img src={news.urlToImage} alt={news.urlToImage} className={styles.image} />}
      <div className={styles.container}>
        <h1 className='font-semibold text-xl'>{news.title}</h1>
        {news.description && <h2>{news.description}</h2>}
        <div className={styles.info}>
          {news.source && <h2 className={styles.source}>{news.source.name}</h2>}
          <h2>{news.publishedAt.replace('T', ", ").split('Z')}</h2>
        </div>
      </div >
    </div>
  )
}

export default GridItem