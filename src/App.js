import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Crypto from './components/Crypto';
import Premium from './components/Premium';
import Tnc from './components/Tnc';
import Footer from './components/Footer';
import Error404 from './components/error404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

function App() {
    return (
        <Router>
            <div className="App">
            
                <Header></Header>

                <main>
                    <AnimatePresence>
                        <Switch>

                            <Route exact path="/">
                                <Landing></Landing>
                            </Route>

                            <Route exact path="/about">
                                <About></About>
                            </Route>

                            <Route exact path="/crypto">
                                <Crypto></Crypto>
                            </Route>

                            <Route exact path="/premium">
                                <Premium></Premium>
                            </Route>

                            <Route exact path="/tnc">
                                <Tnc></Tnc>
                            </Route>

                            <Route exact path="/error">
                                <Error404></Error404>
                            </Route>

                            <Route component={Error404} />

                        </Switch>
                    </AnimatePresence>
                </main>

                <Footer></Footer>
                
            </div>
        </Router>
    );
}

export default App;
