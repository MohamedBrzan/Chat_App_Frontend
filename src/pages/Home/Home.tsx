import AppLayout from '../Layout/AppLayout';

const Home = () => {
  return <>Home</>;
};

const HomeHOC = AppLayout()(Home);

export default HomeHOC;
