import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { configureStore} from "./store";
import { Provider } from "react-redux";
import Header from "./components/Header";

function App() {
  return ( 
    
    <Provider store={configureStore}>
      <BrowserRouter>
      <Header/>
             <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:companyName" element={<CompanySearchResults />} />
        </Routes>
      </BrowserRouter>
     
    </Provider>
  );
}

export default App;
