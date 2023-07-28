import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <>
            <ProductProvider>
                <Header />
                <ProductList />
            </ProductProvider>
        </>
    );
};

export default App;
