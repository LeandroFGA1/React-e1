import MainLayout from './layout/Layout'
import { BrowserRouter as Router} from 'react-router-dom';
import MainRoutes from './routes/Routes';


function App() {
  return (
    <Router>
      <MainLayout>
        <MainRoutes/>
      </MainLayout>
    </Router>
  )
}

export default App
