import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import WorkerMap from './components/WorkerMap';
import WorkerProfile from './components/WorkerProfile';
import WorkerSchedule from './components/WorkerSchedule';
import WorkerMessages from './components/WorkerMessages';
import WorkerChat from './components/WorkerChat';
import DispatcherChat from './components/DispatcherChat';
import Settings from './components/Settings';
import SearchOrder from './components/SearchOrder';
import CurrentOrder from './components/CurrentOrder';
import RateTrip from './components/RateTrip';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/map" component={WorkerMap} />
                <Route path="/profile" component={WorkerProfile} />
                <Route path="/schedule" component={WorkerSchedule} />
                <Route path="/messages" component={WorkerMessages} />
                <Route path="/chat" component={WorkerChat} />
                <Route path="/dispatcher-chat" component={DispatcherChat} />
                <Route path="/settings" component={Settings} />
                <Route path="/search-order" component={SearchOrder} />
                <Route path="/current-order" component={CurrentOrder} />
                <Route path="/rate-trip" component={RateTrip} />
            </Switch>
        </Router>
    );
}

export default App;
