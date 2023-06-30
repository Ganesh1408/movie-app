import {Redirect, Switch, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import Popular from './components/Popular'
import MovieDetailView from './components/MovieDetailView'
import NotFound from './components/NotFound'
import Account from './components/Account'
// import ProfilePage from './components/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute'
import SearchFilter from './components/SearchResults'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetailView} />

    <ProtectedRoute exact path="/account" component={Account} />

    <ProtectedRoute exact path="/search" component={SearchFilter} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
