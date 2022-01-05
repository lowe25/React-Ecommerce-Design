import {
  LandingContainer,
  StyleLanding,
  StyleRyzenBuild,
  StyleIntelBuilds,
  StyleButtonDiv,
  Links
} from "./Landing.style";
function Landing() {
  return (
    <>
    <LandingContainer>
    <StyleLanding>
        <h1>Start Your Dream Build With Us!</h1>
      </StyleLanding>

      <StyleRyzenBuild>
        <h1>Boost your productivity with our Ryzen PC Builds</h1>
        <Links to="/ryzenPage">
        <StyleButtonDiv>
         <input type="button" className="btn-build" value="View All Ryzen Builds"></input>
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
        <input type="button" className="btn-build" value="View All Intel Builds"></input>
        </StyleButtonDiv>
        </Links>
      </StyleIntelBuilds>
    </LandingContainer>
    </>
  );
}

export default Landing;
