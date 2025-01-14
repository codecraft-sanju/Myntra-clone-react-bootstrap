import Header from './components/Header';
import Footer from './components/Footer';
import HomeItem from './components/HomeItem';

function App() {
  const item = {
    id: '1',
    image: 'images/1.jpg',
    company: 'Carlton London',
    item_name: 'Rhodium-Plated CZ Floral Studs',
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: '1 January 2025',
    rating: {
      stars: 4.5,
      count: 1400,
    },
  };

  return (
    <>
      <Header />
      <main>
        <div className="items-container">
          <HomeItem item={item} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
