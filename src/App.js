import { AuthProvider } from './context/auth';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <AuthProvider>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer autoClose={2500} position={toast.POSITION.BOTTOM_LEFT} />
    </AuthProvider>

  );
}

export default App;
