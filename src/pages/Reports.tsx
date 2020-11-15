import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import PinBox from '../components/PinBox';
import axios from 'axios';

const sendGetRequest = () => {

    return axios({
        url: 'http://localhost:3000/repairs/getRepairs',
        method: 'get'
    }).then(response => {

        console.log(response.data);
        return response.data;
    })
};

const Reports: React.FC = () => {
    const [repairs, setRepairs] = useState([]);
    React.useEffect(() => {
        sendGetRequest().then(data => setRepairs(data.data));
    }, []);

    return (
        <IonPage>
            <PinBox />
            <IonHeader>
                <IonToolbar color="danger">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Report Generation
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Search for Reports</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonInput type="search">Employee ID: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonInput type="date">Date: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton color="danger">Search</IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Inspection Report - Signal Tests and Inspections</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Division:</IonLabel>
                                            <IonItem>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            <IonLabel position="fixed">Subivision:</IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Milepost:</IonLabel>
                                            <IonItem>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            <IonLabel position="fixed">Test Date:</IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Location:</IonLabel>
                                            <IonItem>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            <IonLabel position="fixed">Employee's Name:</IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Inspection Remarks:</IonLabel>
                                            <IonItem>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonRow>
                                        <IonCol><IonCardTitle>Inspections and Repairs</IonCardTitle></IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol><IonCardSubtitle>Test Module No</IonCardSubtitle></IonCol>
                                        <IonCol><IonCardSubtitle>Test Descripton</IonCardSubtitle></IonCol>
                                        <IonCol><IonCardSubtitle>Condition</IonCardSubtitle></IonCol>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                        {
                                            repairs.map(item => {
                                                return(
                                                <IonRow>
                                                    <IonCol>{item['EngineerID']}</IonCol>
                                                    <IonCol>{item['RepairDate']}</IonCol>
                                                    <IonCol>{item['Comment']}</IonCol>
                                                </IonRow>
                                                )
                                            })
                                        }
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color="danger" size="large" expand="block">Download as PDF</IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color="primary" size="large" expand="block">Send to email</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Reports;