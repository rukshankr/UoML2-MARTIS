import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenu, IonRouterOutlet, IonTitle, IonToolbar, } from '@ionic/react';
import {addSharp, checkboxSharp, createSharp, logOutSharp, searchCircleSharp, searchSharp, settingsSharp} from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Selection from './pages/Selection';
import Inspection from './pages/Inspection';
import Assign from './pages/Assign';



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


const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" menuId="first" contentId="premiere">
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle><h2>MARTIS</h2></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem><IonIcon slot="start" icon={addSharp}/>Create Test</IonItem>
          <IonItem href="selection"><IonIcon slot="start" icon={checkboxSharp}/>Select Test</IonItem>
          <IonItem href="/assign"><IonIcon slot="start" icon={createSharp}/>Assign Test</IonItem>
          <IonItem href="/inspection"><IonIcon slot="start" icon={searchSharp}/>Search Inspections</IonItem>
          <IonItem><IonIcon slot="start" icon={searchCircleSharp}/>Search Repairs</IonItem>
          <IonItem><IonIcon slot="start" icon={settingsSharp}/>Settings</IonItem>
          <IonItem><IonIcon slot="start" icon={logOutSharp}/>Logout</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
      <IonReactRouter>
        <IonRouterOutlet id="premiere">
          <Route path="/login" component={Login} />
          <Route path="/selection" component={Selection} />
          <Route path="/inspection" component={Inspection} />
          <Route path="/assign" component={Assign} />

          <Redirect exact from="/" to="/login" />
        </IonRouterOutlet>
      </IonReactRouter>
  </IonApp>
);

export default App;
