import { Outlet, Route, Routes } from 'react-router';
import BaseLayout from './views/BaseLayout.jsx';
import Home from './views/Home.jsx';
import AvailableCats from './views/AvailableCats.jsx';
import ContactUs from './views/ContactUs.jsx'
import AboutUs from './views/AboutUs.jsx'

function App() {
  return (
    <Routes>
      <Route
        element={
          <BaseLayout>
            <Outlet />
          </BaseLayout>
        }
      >
        <Route path={'/'} element={<Home />} />
        <Route path={'/available-cats'} element={<AvailableCats />} />
        <Route path={'/contact-us'} element={<ContactUs />} />
        <Route path={'/about-us'} element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
