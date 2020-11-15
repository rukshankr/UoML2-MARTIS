import React, { useState } from 'react';
import { IonApp, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/react';

import './Selection.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';



const sendGetRequest = () => {

    return axios({
        url: 'http://localhost:5000/getRepairs',
        method: 'get'
    }).then(response => {

        console.log(response.data);
        return response.data;
    })
};


const RepairList: React.FC = () => {
    const { user } = useAuth0();
    const [repairs, setRepairs] = useState([]);
    React.useEffect(() => {
        sendGetRequest().then(data => setRepairs(data.data));
    }, []);
    console.log(repairs);

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
                </IonRow>
            </IonContent>
        </IonApp >

    );
};



export default RepairList;