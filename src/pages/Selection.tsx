<<<<<<< HEAD
import React, { useState } from 'react';
import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
=======
import React from 'react';
import { IonApp, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';
>>>>>>> 259957a14dbd20fb4573d2a2ae697780b43b6fa0
import { globe, megaphone, lockClosed, toggle, train, stopwatch, gitMergeOutline, calendar, flashOff, construct, alertCircleOutline, linkSharp, codeWorking, shuffle, add } from 'ionicons/icons';

import './Selection.css';
import GeolocationButton from '../components/GeoLocationButton';
import { useAuth0 } from '@auth0/auth0-react';



<<<<<<< HEAD
const sendGetRequest = () => {

    return axios({
        url: 'http://localhost:5000/getRepairs',
        method: 'get'
    }).then(response => {

        console.log(response.data);
        return response.data;
    })
};

=======
>>>>>>> 259957a14dbd20fb4573d2a2ae697780b43b6fa0

const Selection: React.FC = () => {
    const { user } = useAuth0();
<<<<<<< HEAD
    const [repairs, setRepairs] = useState([]);
    React.useEffect(() => {
        sendGetRequest().then(data => setRepairs(data.data));
    }, []);
    console.log(repairs);
=======
>>>>>>> 259957a14dbd20fb4573d2a2ae697780b43b6fa0

    return (
        <IonApp>
            <IonHeader>
                <IonToolbar className="theme">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first" className="theme"></IonMenuButton>
                    </IonButtons>
                    <IonGrid>
                        <IonRow>
                            <IonTitle size="small" >
                                Engineering Department
                                <br />
                                Preventive Maintenance Management System
                            </IonTitle>

                        </IonRow>
                    </IonGrid>
                </IonToolbar>
            </IonHeader>
            <IonContent>


                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <h5>Welcome, {user ? (user.name) : ''}</h5>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <GeolocationButton />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton href="/assign" fill="solid" color="danger" expand="block">
                                <IonIcon slot="start" icon={add} />
                                Create Tests</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol >
                            <IonButton className="alltest" href="/inspection" expand="block"  >
                                <IonIcon icon={globe} />
                                All tests
                            </IonButton>
                        </IonCol>

                    </IonRow>
                    <IonRow>
                        <IonCol className="ion-text-center">

                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">

                                <IonIcon className="iconsize" icon={shuffle} />
                Grade <br />Crossings <br />Tests
                </div></IonButton>

                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={alertCircleOutline} />
                Defect <br />Detector<br />  Tests
                </div></IonButton>

                        </IonCol>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={construct} />
                Signal<br /> Structure<br /> Tests
                </div></IonButton>
                        </IonCol>


                    </IonRow>
                    <IonRow>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={lockClosed} />
                Locking <br />Tests
                </div></IonButton>
                        </IonCol>
                        <IonCol className="ion-text-center">

                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={codeWorking} />
                Bridge<br /> Tests
                </div></IonButton>
                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={megaphone} />
                Signal<br /> Tests
                </div></IonButton>
                        </IonCol>



                    </IonRow>
                    <IonRow>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={toggle} />
                Switch<br /> Tests
                </div></IonButton>
                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={gitMergeOutline} />
                Relay<br /> Tests
                </div></IonButton>
                        </IonCol>
                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={stopwatch} />
                Timing<br /> Tests
                </div></IonButton>
                        </IonCol>


                    </IonRow>
                    <IonRow >

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={flashOff} />
                Grounds<br /> Test
                </div></IonButton>
                        </IonCol>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={linkSharp} />
                Insulation<br /> Tests
                </div></IonButton>
                        </IonCol>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={calendar} />
                Weekly<br /> Crossing<br /> Tests
                </div></IonButton>
                        </IonCol>

                    </IonRow>
                    <IonRow>

                        <IonCol className="ion-text-center">
                            <IonButton href="/inspection" className="squarebutton" fill="clear"><div className="divclass">
                                <IonIcon className="iconsize" icon={train} />
                Track<br /> Circuits<br /> Tests
                </div></IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow className="ion-text-center ion-align-items-center">
                        <IonCol>
                            <IonCard>
                                <IonCardHeader className="cardhead">
                                    <IonCardTitle>
                                        Repairs
                                </IonCardTitle>
                                    <IonCardSubtitle>
                                        <IonRow>
                                            <IonCol size="4">
                                                AssetID
                                        </IonCol>
                                            <IonCol size="4">
                                                EngineerID
                                        </IonCol>
                                            <IonCol size="4">
                                                Date Repair Assigned
                                        </IonCol>
                                        </IonRow>
                                    </IonCardSubtitle>

                                </IonCardHeader>
                                <IonCardContent>
                                    {repairs.map(item => {
                                        return (
                                            <IonRow className="ion-justify-content-center">
                                                <IonCol size="4">
                                                    {item['AssetID']}
                                                </IonCol>
                                                <IonCol size="4">
                                                    {item['EngineerID']}
                                                </IonCol>
                                                <IonCol size="4">
                                                    {item['RepairDate']}
                                                </IonCol>
                                            </IonRow>

                                        )
                                    })}

                                </IonCardContent>


                            </IonCard>

                        </IonCol>
                        <div>

                        </div>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonApp >

    );
};



export default Selection;