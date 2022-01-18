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
import MyAccount from "pages/MyAccount/myAccount";

import IntelPage from "pages/BuildPage/intelPage";
import ryzenPage from  "pages/BuildPage/ryzenBuild";
import laptopPage from "pages/ViewProduct/Laptops/ViewLaptop1";

//Ryzen Units
import ryzenUnit1 from "pages/ViewProduct/RyzenBuilds/ViewProductRyzen1";
import ryzenUnit2 from "pages/ViewProduct/RyzenBuilds/ViewProductRyzen2";
import ryzenUnit3 from "pages/ViewProduct/RyzenBuilds/ViewProductRyzen3";
import ryzenUnit4 from "pages/ViewProduct/RyzenBuilds/ViewProductRyzen4";
import ryzenUnit5 from 'pages/ViewProduct/RyzenBuilds/ViewProductRyzen5';
import ryzenUnit6 from "pages/ViewProduct/RyzenBuilds/ViewProductRyzen6";

//Intel Units 
import intelUnit1 from "pages/ViewProduct/IntelBuilds/ViewProductIntel1";
import intelUnit2 from "pages/ViewProduct/IntelBuilds/ViewProductIntel2";
import intelUnit3 from "pages/ViewProduct/IntelBuilds/ViewProductIntel3";
import intelUnit4 from "pages/ViewProduct/IntelBuilds/ViewProductIntel4";
import intelUnit5 from "pages/ViewProduct/IntelBuilds/ViewProductIntel5";
import intelUnit6 from "pages/ViewProduct/IntelBuilds/ViewProductIntel6";
import intelUnit7 from "pages/ViewProduct/IntelBuilds/ViewProductIntel7";

//Laptops
import laptop1 from "pages/ViewProduct/Laptops/ViewLaptop1";
import laptop2 from "pages/ViewProduct/Laptops/ViewLaptop2";
import laptop3 from "pages/ViewProduct/Laptops/ViewLaptop3";
import laptop4 from "pages/ViewProduct/Laptops/ViewLaptop4";
import laptop5 from "pages/ViewProduct/Laptops/ViewLaptop5";
import laptop6 from "pages/ViewProduct/Laptops/ViewLaptop6";
import laptop7 from "pages/ViewProduct/Laptops/ViewLaptop7";
import laptop8 from "pages/ViewProduct/Laptops/ViewLaptop8";
import laptop9 from "pages/ViewProduct/Laptops/ViewLaptop9";
import laptop10 from "pages/ViewProduct/Laptops/ViewLaptop10";
import laptop11 from "pages/ViewProduct/Laptops/ViewLaptop11";

//Periperals

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
         <Route path="/viewLaptop" component={laptopPage} />

         <Route path="/viewRyzen1" component={ryzenUnit1} />
         <Route path="/viewRyzen2" component={ryzenUnit2} />
         <Route path="/viewRyzen3" component={ryzenUnit3} />
         <Route path="/viewRyzen4" component={ryzenUnit4} />
         <Route path="/viewRyzen5" component={ryzenUnit5} />
         <Route path="/viewRyzen6" component={ryzenUnit6} />

         <Route path="/viewIntel1" component={intelUnit1} />
         <Route path="/viewIntel2" component={intelUnit2} />
         <Route path="/viewIntel3" component={intelUnit3} />
         <Route path="/viewIntel4" component={intelUnit4} />
         <Route path="/viewIntel5" component={intelUnit5} />
         <Route path="/viewIntel6" component={intelUnit6} />
         <Route path="/viewIntel7" component={intelUnit7} />

         <Route path="/viewLaptop1" component={laptop1} />
         <Route path="/viewLaptop2" component={laptop2} />
         <Route path="/viewLaptop3" component={laptop3} />
         <Route path="/viewLaptop4" component={laptop4} />
         <Route path="/viewLaptop5" component={laptop5} />
         <Route path="/viewLaptop6" component={laptop6} />
         <Route path="/viewLaptop7" component={laptop7} />
         <Route path="/viewLaptop8" component={laptop8} />
         <Route path="/viewLaptop9" component={laptop9} />
         <Route path="/viewLaptop10" component={laptop10} />
         <Route path="/viewLaptop11" component={laptop11} />
       </Switch>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
