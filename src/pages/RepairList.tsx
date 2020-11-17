import React, { useState } from 'react';
import { IonApp, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';

import './Selection.css';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import PinBox from '../components/PinBox';



const sendGetRequest = () => {

    return axios({
        url: 'http://localhost:3000/repair/getRepairs',
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
            <PinBox/>
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
                <IonRow className="ion-text-center ion-margin">
                    <IonCol>
                        <IonCard >
                            <IonCardHeader >
                                <IonCardTitle>
                                    Repairs Todo List
                                    </IonCardTitle>

                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <div>
                    <IonRow id="data" className="ion-text-center">
                        {repairs.map(item => {
                            return (
                                <IonCol>
                                    <IonCard>
                                        <IonCardHeader className="cardhead">
                                            <IonCardTitle >
                                                EngineerID:{item['EngineerID'] ? item['EngineerID'] : "Unassigned"}
                                            </IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardSubtitle>
                                            AssetID:{item['AssetID']}
                                        </IonCardSubtitle>
                                        <IonCardContent>
                                            <IonText>
                                                Created Date: {item['CreatedDate']}
                                            </IonText><br /><br />
                                            <IonText>
                                                Comments : {item['comments'] ? item['Urgent'] : "None"}
                                            </IonText><br /><br />
                                            <IonButton href="/repairs" color="danger">
                                                Fix
                                                </IonButton>
                                        </IonCardContent>

                                    </IonCard>

                                </IonCol>
                            )

                        })}
                    </IonRow>
                </div>

            </IonContent>
        </IonApp >

    );
};



export default RepairList;