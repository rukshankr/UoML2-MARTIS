import React, { useState } from 'react';
import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import './Selection.css';

import { useAuth0 } from '@auth0/auth0-react';





const InspectionList: React.FunctionComponent = () => {

    const { user } = useAuth0();

    const [items, setItems] = React.useState([]);
    console.log(items);
    React.useEffect(() => {

        axios.get('http://localhost:3000/test/getTests/')
            .then(response => {
                setItems(response.data.data);
            });
    }, []);
    console.log(items);


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


                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard >
                                <IonCardHeader >
                                    <IonCardTitle>
                                        Inspection Todo List
                                    </IonCardTitle>

                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <div>
                        <IonRow id="data" className="ion-text-center">
                            {items.map(item => {
                                return (
                                    <IonCol>
                                        <IonCard>
                                            <IonCardHeader className="cardhead">
                                                <IonCardTitle >
                                                    TestID:{item['TestID']}
                                                </IonCardTitle>
                                                <IonCardSubtitle>
                                                    AssetID:{item['AssetID']}
                                                </IonCardSubtitle>
                                            </IonCardHeader>
                                            <IonCardContent>
                                                <IonText>
                                                    Date: {item['DateIssued']}
                                                </IonText><br /><br />
                                                <IonText>
                                                    Urgent : {item['Urgent'] === 1 ? "Yes" : "No"}
                                                </IonText><br /><br />
                                                <IonText>
                                                    TestModID : {item['TestModID']}
                                                </IonText><br /><br />
                                                <IonButton href="/groundstest">
                                                    Start
                                                </IonButton>
                                            </IonCardContent>

                                        </IonCard>

                                    </IonCol>
                                )

                            })}
                        </IonRow>
                    </div>



                </IonGrid>
            </IonContent>
        </IonApp >

    );

};




export default InspectionList;