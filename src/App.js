//React Router
import {BrowserRouter, Route, Switch} from 'react-router-dom';

//Styled Components Reset
import GlobalStyle from "GlobalStyle";

import Navbar from 'components/navbar/navbar';
import Footer from 'components/footer/footer';
//Components
import Landing from "pages/Landing/Landing";
import gamingPC from 'pages/GamingPC/gamingPC';
import gamingLaptop from 'pages/GamingLaptops/gamingLaptop';
import gamingPeriperals from 'pages/GamingPeriperals/gamingPeriperals';
import CartPage from "pages/CartPage/cartPage";
import CheckoutPage from "pages/CheckoutPage/checkoutPage";
import ViewRyzen from "pages/ViewProduct/ViewProductRyzen";
import ViewIntel from "pages/ViewProduct/ViewProductIntel";
import MyAccount from "pages/MyAccount/myAccount";
import IntelPage from "pages/BuildPage/intelPage";
import ryzenPage from  "pages/BuildPage/ryzenBuild";
import laptopPage from "pages/ViewProduct/ViewLaptop";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
     <BrowserRouter>
     <Navbar />
       <Switch>
         <Route path="/" component={Landing} exact />
         <Route path="/gamingpc" component={gamingPC} />
         <Route path="/gaminglaptop" component={gamingLaptop} />
         <Route path="/gamingPerip" component={gamingPeriperals} />
         <Route path="/myAccount" component={MyAccount} />
         <Route path="/checkoutpage" component={CheckoutPage} />
         <Route path="/cartpage" component={CartPage} />
         <Route path="/intelPage" component={IntelPage} />
         <Route path="/ryzenPage" component={ryzenPage} />
         <Route path="/viewProduct" component={ViewRyzen} />
         <Route path="/viewProduct1" component={ViewIntel} />
         <Route path="/viewLaptop" component={laptopPage} />
       </Switch>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
