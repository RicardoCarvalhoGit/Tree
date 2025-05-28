import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomePage from './components/pages/home/HomePageComponent';
import Footer from './components/layout/footer/FooterComponent';
import SignIn from './components/pages/signIn/SignInComponent';
import SignUp from './components/pages/signUp/SignUpComponent';
import NavBar from './components/layout/navBar/NavBarComponent';
import Ranking from './components/pages/ranking/RankingComponents';
import Certification from './components/pages/certification/certificationComponent';
import LandingPage from './components/pages/landingPage/LandingPageComponent';
import CertificateRequestForm from './components/pages/certificationRequest/CertificateRequestForm';
import RequestViewComponent from './components/pages/requestView/RequestViewComponent';
import SecretLoginModal from './components/layout/secretLogin/SecretLoginModal';


function AppContent() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "q") {
        event.preventDefault();
        setIsModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const IsLandingPage = ["/", "/signIn", "/signUp"].includes(location.pathname);

  return (
    <> 
      {IsLandingPage && <NavBar />}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/certification' element={<Certification />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/certificationRequest' element={<CertificateRequestForm />} />
        <Route path='/requestView' element={<RequestViewComponent />} />
      </Routes>
      <Footer />
      <SecretLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
