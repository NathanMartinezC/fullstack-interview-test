import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView'
import CommitView from './views/CommitView'
import PulllRequestListView from './views/PullRequestListView';
import PullRequestCreateView from './views/PullRequestCreateView';

function App() {
  return (
    <Router>
      <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeView} exact />
            <Route path='/commits/:branch/:sha' component={CommitView} />
            <Route path='/pullrequests/add' component={PullRequestCreateView} exact />
            <Route path='/pullrequests' component={PulllRequestListView} exact />
          </Container>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
