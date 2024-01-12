import { BrowserRouter } from 'react-router-dom'
import RoutesMain from "./routes/Routes"
import MainLayout from './layout/MainLayout'

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <RoutesMain/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
