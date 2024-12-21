import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.css'
import { Journey } from './components/Journey/Journey'
import {Hero} from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contacts } from './components/Contacts/Contacts'
import {AllProjects} from './components/Projects/AllProjects'
function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Journey />
                <Experience />
                <Projects />
                <Contacts />
              </>
            }
          />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
