import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SortProducts } from './components/SortProducts/SortProducts';
import { ProductProvider } from './context/ProductContext';

import './App.css';

function App() {
    return (
        <>
            <ProductProvider>
                <Header />
                <SortProducts />
                <FilterProducts />
                <ProductList />
            </ProductProvider>
        </>
    );
};

export default App;
