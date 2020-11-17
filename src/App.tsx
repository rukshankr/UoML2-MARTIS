import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar, } from '@ionic/react';
import { addSharp, checkboxSharp, createSharp, documentAttach, documentText, hammer, list, logOutSharp, searchSharp, settingsSharp, trailSign } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { useAuth0 } from '@auth0/auth0-react';
import Login from './pages/Login';
import Selection from './pages/Selection';
// import Inspection from './pages/Inspection';
import Assign from './pages/Assign';
import Report from './pages/Reports'
import Repairs from './pages/Repairs';
import Repairlist from './pages/RepairList';
import Inspectlist from './pages/InspectionList';
import GroundsTest from './pages/GroundsTest'
import ManageRepairs from './pages/ManageRepairs'



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CreateAsset from './pages/CreateAsset';


const App: React.FC = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

  const hideForPeeps = (page: number) => {
    if (isAuthenticated) {
      if (page === 1) {
        switch (user.name) {
          case 'Rukshan': return false;
          case 'Yomal': return true;
          case 'Inspector': return false;
          case 'Mechanic': return false;
          default: return true;
        }
      }
      else if (page === 2) {
        switch (user.name) {
          case 'Rukshan': return false;
          case 'Yomal': return true;
          case 'Inspector': return true;
          case 'Mechanic': return false;
          default: return true;
        }
      }
      else if (page === 3) {
        switch (user.name) {
          case 'Rukshan': return true;
          case 'Yomal': return true;
          case 'Inspector': return false;
          case 'Mechanic': return true;
          default: return true;
        }
      }
      else return true;
    }
    else return false;
  };

  return (
    <>
      <React.Fragment>
        <IonApp>
          <IonMenu side="start" menuId="first" contentId="premiere">
            <IonHeader>
              <IonToolbar color="danger">
                <IonTitle><h2>MARTIS</h2></IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItemGroup hidden={!hideForPeeps(1)}>
                  <IonItemDivider>
                    <IonLabel>Manage</IonLabel>
                  </IonItemDivider>
                  <IonItem><IonIcon slot="start" icon={trailSign} />Create Asset</IonItem>
                  <IonItem><IonIcon slot="start" icon={addSharp} />Create Test</IonItem>
                  <IonItem href="selection" ><IonIcon slot="start" icon={checkboxSharp} />Select Test</IonItem>
                  <IonItem href="/managerepairs" ><IonIcon slot="start" icon={hammer} />Manage Repairs</IonItem>
                  <IonItem href="/assign"><IonIcon slot="start" icon={createSharp} />Assign Inspection/Repairs</IonItem>
                </IonItemGroup>
                <IonItemGroup hidden={!hideForPeeps(2)}>
                  <IonItemDivider>
                    <IonLabel>Inspections</IonLabel>
                  </IonItemDivider>
                  <IonItem href="/inspectlist"><IonIcon slot="start" icon={list} />Inspections To-Do-List</IonItem>
                  {/* <IonItem href="/inspection"><IonIcon slot="start" icon={searchSharp} />Search Inspections</IonItem> */}
                </IonItemGroup>
                <IonItemGroup hidden={!hideForPeeps(3)}>
                  <IonItemDivider>
                    <IonLabel>Repairs</IonLabel>
                  </IonItemDivider>
                  <IonItem href="/repairlist"><IonIcon slot="start" icon={list} />Repairs To-Do-List</IonItem>
                  {/* <IonItem href="/repairs"><IonIcon slot="start" icon={documentAttach} />Report Repairs</IonItem> */}
                  <IonItem href="/reports"><IonIcon slot="start" icon={documentText} />View Reports</IonItem>

                </IonItemGroup>
                <IonItemGroup>

                  <IonItemDivider>
                    <IonLabel>Other</IonLabel>
                  </IonItemDivider>
                  <IonItem><IonIcon slot="start" icon={settingsSharp} />Settings</IonItem>
                  <IonItem onClick={() => logout()}><IonIcon slot="start" icon={logOutSharp} />Logout</IonItem>
                </IonItemGroup>

              </IonList>
            </IonContent>
          </IonMenu>
          <IonReactRouter>
            <IonRouterOutlet id="premiere">
              <Route path="/login" component={Login} />
              <Route path="/selection" component={Selection} />
              {/* <Route path="/inspection" component={Inspection} /> */}
              <Route path="/assign" component={Assign} />
              <Route path="/repairs" component={Repairs} />
              <Route path="/reports" component={Report} />
              <Route path="/repairlist" component={Repairlist} />
              <Route path="/inspectlist" component={Inspectlist} />
              <Route path="/groundstest" component={GroundsTest} />
              <Route path="/managerepairs" component={ManageRepairs} />

              <Redirect exact from="/" to="/login" />
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      </React.Fragment>
    </>
  );
};

export default App;
