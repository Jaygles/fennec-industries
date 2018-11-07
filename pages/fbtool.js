import * as React from 'react';
import styled, { css } from 'react-emotion';
import Nav from '../Components/Nav/Nav';
import FBToolTables from '../Components/FBTool/FBToolTables';
import Footer from '../Components/Footer/Footer';

const locations = [
  ['BallPark', '108445589219717'],
  ['Desert', '155931864437705'],
  ['Diablo', '136167159763749'],
  ['H&M', '165741680109850'],
  ['South Street', '114181878642980'],
  ['Alpine BLVD', '152295991475580'],
  ['Alpine Tavern', '139604816086166'],
  ['Brawley', '164591300224673'],
  ['Calexico', '1785119295092889'],
  ['Chula Vista', '1185018034872548'],
  ['El Cajon', '163248387034095'],
  ['El Centro', '1056878801043419'],
  ['Hill Street', '451432478393432'],
  ['Homeland', '157401384280911'],
  ['Menifee', '170204326340252'],
  ['Murrieta', '131378830247095'],
  ['Portico', '400677350056460'],
  ['San Marcos', '155967321103535'],
  ['San Ysidro', '543515735791441'],
  ['Sun City', '279844829067465'],
  ['3009 & FM78', '156463154792391'],
  ['Airport', '289418834765733'],
  ['Babcock', '223767437955400'],
  ['Bandera', '1296574810375457'],
  ['Boerne', '162515880444927'],
  ['Converse', '1793967857502240'],
  ['Crestway', '168276076933518'],
  ['Culebra', '101533486968423'],
  ['De Zavala', '1021806337891559'],
  ['Encino', '276841656008122'],
  ['Evans', '1148141978585216'],
  ['FM1976', '594609750718096'],
  ['FM471', '547465178788539'],
  ['Garden', '1383339545014539'],
  ['Goliad', '288884298147684'],
  ['Harry Wurzbach', '301966076990861'],
  ['Huebner', '163388917022492'],
  ['Hwy 46', '1083874128392372'],
  ['Loop 410', '160939997259697'],
  ['Military', '606880549498278'],
  ['Nacogdoches', '672216666265475'],
  ['Nash', '1653516194886465'],
  ['New Boston Rd', '565046860349026'],
  ['North 281', '271060373267109'],
  ['OConnor', '1582231815406095'],
  ['Pleasant Grove', '778399482297455'],
  ['Randolph', '258315901233674'],
  ['Rittiman', '1810727139158876'],
  ['Schertz', '620816411393051'],
  ['Shaenfield', '1350738981633664'],
  ['Texarkana', '158820347484416'],
  ['Wake Village', '1724169357856359'],
  ['West Ave', '1815742728669997'],
  ['Woodlake', '1765584263680282'],
  ['WW White', '1180793245269054'],
];

const FBToolSection = styled('section')`
  min-height: calc(100vh - 168px);
`;

class FBTool extends React.Component {
  state = {
    reviewArr: [],
  };

  componentDidMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: '118727588774483',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10',
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id) {
      let js;

      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  myFacebookLogin = () => {
    FB.login(
      response => {
        // Note: The call will only work if you accept the permission request
        console.log(response);
        // FB.api('/me/feed', 'post', { message: 'Hello, world!' });
      },
      { scope: 'manage_pages' }
    );
  };

  startFBApiCalls = () => {
    let iterator = 0;
    const resultsArr = [];
    const recurseThis = () => {
      console.log(this);
      const pageId = locations[iterator][1];
      const tokenUrl = `${pageId}?fields=access_token`;
      FB.api(tokenUrl, 'get', response => {
        const pageToken = response.access_token;
        const apiUrl = `/${pageId}/ratings`;
        FB.api(apiUrl, 'get', { access_token: pageToken }, response => {
          if (response && !response.error) {
            const newLocationObj = {};
            newLocationObj.name = locations[iterator][0];
            newLocationObj.data = response.data;
            resultsArr.push(newLocationObj);
            this.setState({ reviewArr: resultsArr });
          } else {
            console.log(response);
          }
          iterator += 1;
          if (iterator < locations.length - 1) {
            recurseThis();
          } else {
          }
        });
      });
    };
    recurseThis();
  };

  render() {
    return (
      <main>
        <Nav />
        <FBToolSection className="section">
          <div className="container content">
            <h1 className="has-text-centered">Facebook Tool</h1>
            <div className="columns">
              <div className="column buttons is-flex is-centered">
                <button
                  onClick={() => this.myFacebookLogin()}
                  className="button is-info is-outlined"
                >
                  Login
                </button>
              </div>
            </div>
            <div className="columns">
              <div className="column buttons is-flex is-centered">
                <button
                  onClick={() => this.startFBApiCalls()}
                  className="button is-info is-outlined"
                >
                  Start
                </button>
              </div>
            </div>
            <FBToolTables tablesData={this.state.reviewArr} />
          </div>
        </FBToolSection>
        <Footer />
      </main>
    );
  }
}

export default FBTool;
