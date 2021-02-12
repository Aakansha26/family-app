import './App.css';
import Home from './Home';
import Header from './Header'

const routing = (

  <Router>
      <div className="app">
          <Header />
          <main>
              <Switch>

                  <Route exact
                      path="/home"
                      component={Home}
                  />
              
                
              </Switch>
          </main>
      </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'))