import { FilterProducts } from './components/FilterProducts/FilterProducts';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { SortProducts } from './components/SortProducts/SortProducts';
import { ProductProvider } from './context/ProductContext';

// import './App.scss';
import style from './App.module.scss';
import { CategoryDescription } from './components/CategoryDescription/CategoryDescription';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <>
                <ProductProvider>
                    <Header />
                    <main className={style.main}>
                        <p className={style.gridItem}>
                            <CategoryDescription />
                        </p>

                        <p className={style.gridItem}>
                            <SortProducts />
                        </p>

                        <p className={style.gridItem}>
                            <FilterProducts />
                        </p>

                        <p className={style.gridItem}>
                            <ProductList />
                        </p>
                    </main>
                    {/* <Footer /> */}
                </ProductProvider>
        </>
    );
};

export default App;
