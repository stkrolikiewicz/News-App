import useNews from '../hooks/useNews';
import { Grid, List } from '../views';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import Loader from '../components/Loader/Loader';
import { setCount } from '../features/newsCount';

interface SearchResultsProps {
  searchInput: string
}

const SearchResults = ({ searchInput }: SearchResultsProps) => {
  const { data, isLoading, isValidating, error } = useNews(searchInput)



  const mainContentDisplay = useSelector((state: RootState) => state.mainContentDisplay.value)
  const dispatch = useDispatch()
  data && data.articles ? dispatch(setCount(data.articles?.length)) : dispatch(setCount(0))

  return (
    <>
      {(isLoading || isValidating) && <Loader />}
      {data && data.articles && (mainContentDisplay === "list"
        ? <List news={data.articles} />
        : <Grid news={data.articles} />)}
      {searchInput !== "" && data && data.message && <h1>
        {data.message}</h1>}
      {error && <h1>Error: {error.message}</h1>}
    </>
  )
}

export default SearchResults