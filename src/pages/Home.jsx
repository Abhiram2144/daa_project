import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
        <div className='flex items-center justify-center mt-52'>
            <div>
                <h1 className="text-5xl mt-5">Minor Project </h1>
                <p className='mt-3'>Subject: Design and Analysis of Algorightms </p>
                <p>Done by <span className='font-bold'>Abhiram(21BCS2647) & Ankur (21BCS2649)</span>  </p>
            </div>
        </div>
    </Layout>
  )
}

export default Home;