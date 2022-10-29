import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

// LOCAL IMPORTS
import Navigation from './components/Navigation/Navigation.js';
import Main from './pages/Main.js';
import Trips from './pages/Trips.js';
import CreateTrip from './pages/CreateTrip.js';
import AboutTeam from './pages/AboutTeam.js';
import ViewTrips from './pages/ViewTrips.js';
import ContactForm from './pages/ContactForm';
import api from './utils/api';

function App() {

  const [userState, setUserState] = useState({
    token: "",
    user: {

    }
  });

  useEffect(() => {
    document.title = "WHOW TRIP";
    const userId = localStorage.getItem('userId');
    if (userId) {
      api.getUser(userId).then(res => {
        setUserState({
          user: {
            email: res.data.email,
            id: res.data.id,
            username: res.data.username,
            trips: res.data.Trips
          }
        })
      }).catch(err => {
        console.log('no logged in user');
        setUserState({
          user: {}
        })
      })
    }
  }, []);

  const handleLogout = () => {
    setUserState({
        user: {}
    });
    localStorage.removeItem('userId');
    window.location = '/';
};

  return (
    <div style={{ minHeight: '100vh', background: '#202530', overflowX: 'hidden' }}>
      <Navigation setUserState={setUserState} userState={userState} user={userState.user} handleLogout={handleLogout}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main setUserState={setUserState} userState={userState} user={userState.user} handleLogout={handleLogout}/>
            <ScrollToTop smooth />
          </Route>
          <Route path="/trips/:id">
            <Trips user={userState.user} />
          </Route>
          <Route path="/createTrip">
            <CreateTrip setUserState={setUserState} userState={userState} user={userState.user}/>
          </Route>
          <Route path="/viewTrips">
            <ViewTrips setUserState={setUserState} userState={userState} user={userState.user} trips={userState.user.trips}/>
          </Route>
          <Route path="/about">
            <AboutTeam/>
          </Route>
          <Route path="/contactForm">
            <ContactForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;