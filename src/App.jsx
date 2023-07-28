import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SortProducts } from './components/SortProducts/SortProducts';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <>
            <ProductProvider>
                <Header />
                <SortProducts />
                <ProductList />
            </ProductProvider>
        </>
    );
};

export default App;
