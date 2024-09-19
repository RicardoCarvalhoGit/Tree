import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/pages/home/HomePageComponent';
import Footer from './components/layout/FooterComponent';
import SignIn from './components/pages/signIn/SignInComponent';
import SignUp from './components/pages/signUp/SignUpComponent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
