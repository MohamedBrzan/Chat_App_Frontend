import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Title from './common/Title/Title';
import AppLayout from './pages/Layout/AppLayout';

const App = () => {
  const condition =
    !window.location.pathname.includes('login') &&
    !window.location.pathname.includes('register');
  return (
    <>
      <Title title='Chat App' desc='Chat App Tutorial' />
      {condition && <Header />}

      <AppLayout />

      {condition && <Footer />}
    </>
  );
};

export default App;
