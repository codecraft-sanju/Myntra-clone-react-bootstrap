import Header from "../components/Header"
import Footer from "../components/Footer"
import HomeItem from "../components/HomeItem";
import FetchItems from "./components/FetchItems"
import { Outlet } from "react-router-dom";

const App = () => {
    return (
      <>
            <Header />
        <FetchItems/>
              <Outlet/>
            <Footer>
            </Footer>
            
      </>
    );
}
export default App