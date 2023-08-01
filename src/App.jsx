import { CategoryDescription } from './components/CategoryDescription/CategoryDescription';
import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SortProducts } from './components/SortProducts/SortProducts';
import { ProductProvider } from './context/ProductContext';

import style from './App.module.scss';

function App() {
    return (
        <>
            <ProductProvider>
                <Header />
                <main className={style.main}>
                    <div className={style.gridItem}>
                        <CategoryDescription />
                    </div>

                    <div className={style.gridItem}>
                        <SortProducts />
                    </div>

                    <div className={style.gridItem}>
                        <FilterProducts />
                    </div>

                    <div className={style.gridItem}>
                        <ProductList />
                    </div>
                </main>
            </ProductProvider>
        </>
    );
};

export default App;
