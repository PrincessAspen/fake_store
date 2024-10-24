import Routes from './routes/Routes'
import AuthProvider from './AuthContext'
import styles from './App.module.css'

function App() {

  return (
    <>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </>
  );
};

export default App
