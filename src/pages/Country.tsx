import Layout from '../components/Layout';
import { Grid, List } from '../views';
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store';
import { useParams, useNavigate } from 'react-router-dom';
import { countries } from '../data/countries';
import useCountryNews from '../hooks/useCountryNews';
import Loader from '../components/Loader/Loader';
import { setCount } from '../features/newsCount';

function Country() {
  const countryName = useParams().countryName
  const countryCode: string = countries.find(el => el.name === countryName)?.code || ""
  const navigate = useNavigate()
  if (countryCode === "") navigate("/NotFound")

  const { data, isLoading, isValidating, error } = useCountryNews(countryCode)

  const mainContentDisplay = useSelector((state: RootState) => state.mainContentDisplay.value)
  const dispatch = useDispatch()
  data && data.articles ? dispatch(setCount(data.articles?.length)) : dispatch(setCount(0))

  return (
    <Layout>
      {(isLoading || isValidating) && <Loader />}
      {data && data.articles && (mainContentDisplay === "list"
        ? <List news={data.articles} />
        : <Grid news={data.articles} />)}
      {data && data.message && <h1>{data.message}</h1>}
      {error && <h1>Error: {error.message}</h1>}
    </Layout >
  );
}

export default Country;