import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <>
            <ProductProvider>
                <ProductList />
            </ProductProvider>
        </>
    );
};

export default App;
