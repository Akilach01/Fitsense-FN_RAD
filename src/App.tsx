import { AuthProvider } from './context/authContext'
import Router from './routes'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;