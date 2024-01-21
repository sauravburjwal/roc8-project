import SearchBox from './SearchBox';

const Home = () => {
  return (
    <>
      <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[78px] leading-10 md:leading-12 lg:leading-14 text-center mt-8 sm:mt-12">
        Discover over 2,000,000 <br />
        free Stock Images
      </h1>
      <SearchBox showTrending />
    </>
  );
};

export default Home;
