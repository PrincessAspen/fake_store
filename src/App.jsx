import Routes from './routes/Routes'
import AuthProvider from './AuthContext'
import CartProvider from './CartContext'

function App() {

  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <Routes/>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App
