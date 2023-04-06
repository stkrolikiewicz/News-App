import { UserCircleIcon } from '@heroicons/react/24/outline'
import { News } from '../../types'
import styles from './Article.module.css'

interface ArticleProps {
  news: News
}

const Article = ({ news }: ArticleProps) => {
  return (
    <div className={styles.container}>
      <img src={news.urlToImage} alt='' className={styles.image} />
      <h1 className='text-3xl font-semibold'>{news.title}</h1>
      <div className='flex gap-2 items-center'>
        <UserCircleIcon className='h-6' />
        <h1 className='text-gray-700 font-semibold'>{news.author}</h1>
      </div>
      <p className='text-xl'>{news.content}</p>
      <h1>See more at:</h1>
      <a href={news.url} className="text-blue-900 hover:underline break-all">{news.url}</a>
    </div>
  )
}

export default Article