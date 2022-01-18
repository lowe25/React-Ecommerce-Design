//PC Images
import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
import intelPc from "assets/img/intelGaming-pc.jpg";
//Page CSS
import {
  GamingContainer,
  StyleRyzenBuild,
  StyleIntelBuilds,
  StyleButtonDiv,
  Links,
} from "./gamingPCstyle";

//Product List

function gamingPC() {
  return (
    <GamingContainer>
      <StyleRyzenBuild>
        <h1>Boost your productivity with our Ryzen PC Builds</h1>
        <Links to="/ryzenPage">
          <StyleButtonDiv>
            <input
              type="button"
              className="btn-build"
              value="View All Ryzen Builds"
            ></input>
          </StyleButtonDiv>
        </Links>
      </StyleRyzenBuild>

      <StyleIntelBuilds>
        <h1>
          Enhance your gaming experience with the latest Intel CPU'S View All
          Intel Builds
        </h1>
        <Links to="/intelPage">
          <StyleButtonDiv>
            <input
              type="button"
              className="btn-build"
              value="View All Intel Builds"
            ></input>
          </StyleButtonDiv>
        </Links>
      </StyleIntelBuilds>
    </GamingContainer>
  );
}

export default gamingPC;
