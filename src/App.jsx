import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SortProducts } from './components/SortProducts/SortProducts';
import { ProductProvider } from './context/ProductContext';

import './App.css';
import { CategoryDescription } from './components/CategoryDescription/CategoryDescription';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
            <ProductProvider>
                <Header />
                <CategoryDescription />
                <SortProducts />
                <FilterProducts />
                <ProductList />
                <Footer />
            </ProductProvider>
        </>
    );
};

export default App;
