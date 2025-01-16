import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
      <>
            <Header />
        
              <Outlet/>
            <Footer>
            </Footer>
            
      </>
    );
}
export default App