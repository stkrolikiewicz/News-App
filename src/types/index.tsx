export type News = {
  author: string
  content: string
  description: string
  publishedAt: string
  source: { id: string, name: string }
  title: string
  url: string
  urlToImage: string
}

export type Data = {
  code?: string,
  message?: string,
  status: string,
  articles?: Array<News>
  totalResults?: number
}


