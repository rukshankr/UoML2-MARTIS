import React from 'react';
import { IonApp, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { globe, megaphone, lockClosed, toggle, train, stopwatch, gitMergeOutline, calendar, flashOff, construct, alertCircleOutline, linkSharp, codeWorking, shuffle, add } from 'ionicons/icons';

import './Selection.css';
import GeolocationButton from '../components/GeoLocationButton';
const Selection: React.FC = () => {
    return (
        <IonApp>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonGrid>
                        <IonRow>
                            <IonTitle >
                                Engineering Department
              </IonTitle>

                        </IonRow>
                        <IonRow >
                            <IonTitle color="" size="small">
                                Preventive Maintenance Management System
              </IonTitle>
                        </IonRow>
                    </IonGrid>




                </IonToolbar>
            </IonHeader>
            <IonContent>
                {/* <IonToolbar>
                    <IonTitle size="small" >
                        Browse Compliance by Organizational Chart
        </IonTitle>

                </IonToolbar> */}


                <IonGrid>
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
                            <IonButton href="/inspection" expand="block" color="dark">
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
                </IonGrid>
            </IonContent>
        </IonApp >

    );
};



export default Selection;