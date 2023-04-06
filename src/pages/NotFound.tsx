import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
  const navigate = useNavigate()
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-full h-full gap-3'>
        <h1 className='text-3xl font-semibold'>Page not found!</h1>
        <button className='p-3 bg-slate-200 rounded-md hover:bg-slate-300' onClick={() => navigate("/")}>Back home</button>
      </div>
    </Layout>
  );
}

export default Home;