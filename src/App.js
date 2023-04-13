import './App.css';
import { AuthProvider } from './context/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
    
  );
}

export default App;
