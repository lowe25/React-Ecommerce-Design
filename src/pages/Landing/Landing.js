import {
  LandingContainer,
  StyleLanding,
  BuildContainer,
  BuildList,
  BuildBox,
  BuildSpecs,
  StyleButtonDiv,
  Links,
  BuildImage,
} from "./Landing.style";
//Gaming Pc data
import { gamingPCs } from "pages/StoreData/gamingPc";

//PC Images
import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
import intelPc from "assets/img/intelGaming-pc.jpg";
function Landing() {
  return (
    <>
      <LandingContainer>
        <StyleLanding>
          <h1>Start Your Dream Build With Us!</h1>
        </StyleLanding>
        <BuildContainer>
          <BuildList>
            {gamingPCs.map((item, index) => {
              const cpu = item.tag;
              if (cpu === "ryzen") {
                return (
                  <BuildBox>
                    <BuildImage>
                      <img
                        src={ryzenPc}
                        alt="Gaming Pc's"
                        className="ryzen-img"
                      ></img>
                    </BuildImage>
                    <BuildSpecs>
                      <ul>
                        <li>{item.cpu}</li>
                        <li>{item.ram}</li>
                        <li>{item.gpu}</li>
                      </ul>
                    </BuildSpecs>
                    <StyleButtonDiv>
                      <Links to={item.link}>
                        <input type="button" value="View Build" className="btn-build"></input>
                      </Links>
                      <input type="button" value="Add to Cart" className="btn-cart"></input>
                    </StyleButtonDiv>
                  </BuildBox>
                );
              } else {
                return (
                  <BuildBox>
                    <BuildImage>
                      <img
                        src={intelPc}
                        alt="Gaming Pc's"
                        className="intel-img"
                      ></img>
                    </BuildImage>
                    <BuildSpecs>
                      <ul>
                        <li>{item.cpu}</li>
                        <li>{item.ram}</li>
                        <li>{item.gpu}</li>
                      </ul>
                    </BuildSpecs>
                    <StyleButtonDiv>
                      <Links to={item.link}>
                        <input type="button" value="View Product" className="btn-build"></input>
                      </Links>
                      <input type="button" value="Add to Cart" className="btn-cart"></input>
                    </StyleButtonDiv>
                  </BuildBox>
                );
              }
            })}
          </BuildList>
        </BuildContainer>
      </LandingContainer>
    </>
  );
}

export default Landing;
