import { AuthProvider } from './context/authContext'
import Router from './routes'
import './App.css'

function App() {
  return (
    <AuthProvider>
       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;