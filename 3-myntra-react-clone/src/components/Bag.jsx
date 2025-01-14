import Header from "./Header"
import Footer from "./Footer"
const Bag = () => {
    return (
        <>
           <Header></Header>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container"></div>
            
                    <div className="bag-summary"></div>

                </div>
            </main>
           <Footer></Footer>
        </>
    );
}
export default Bag