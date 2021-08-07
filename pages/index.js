import Head from 'next/head'
import Banner from './components/Banner'
import Footer from './components/Footer';
import Header from './components/Header'
import LargeCard from './components/LargeCard';
import MediumCard from './components/MediumCard';
import SmallCard from './components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Advait Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />

      {/* main section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold">Explore Nearby</h2>

          {/* pull some data from server endpoint from API */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({img, location, distance})=>(
              <SmallCard 
              key={img}
              img={img}
              location={location}
              distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -ml-3
          ">
              {cardsData?.map(({img,title})=>(
                <MediumCard 
                key={img}
                img = {img}
                title={title}
                />
              ))}
          </div>
          
        </section>

        <LargeCard 
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlist cureated by Airbnb"
        buttonText="Get Inspired"
        />
      </main>
      <Footer/>
    </div>
  )
}

//whatever we do here will happend seerver side
export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    (res)=>res.json()

  );

  const cardsData = await fetch('https://links.papareact.com/zp1')
  .then(
    (res)=>res.json()
  
  );


  //this we have to return it to compennet
  return{
    props:{
      exploreData,
      cardsData
    }
  }
}