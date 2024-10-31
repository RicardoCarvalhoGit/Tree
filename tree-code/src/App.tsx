import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/pages/home/HomePageComponent';
import Footer from './components/layout/footer/FooterComponent';
import SignIn from './components/pages/signIn/SignInComponent';
import SignUp from './components/pages/signUp/SignUpComponent';
import NavBar from './components/layout/navBar/NavBarComponent';
import Ranking from './components/pages/ranking/RankingComponents';
import Certification from './components/pages/certification/certificationComponent';
import LandingPage from './components/pages/landingPage/LandingPageComponent';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp />}/>
        <Route path='/ranking' element={<Ranking />}/>
        <Route path='/certification' element={<Certification />}/>
        <Route path='/about' element={<HomePage />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
