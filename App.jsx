import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>My Products App</h1>
            </header>
            <main>
                <ProductList />
            </main>
        </div>
    );
};

export default App;
