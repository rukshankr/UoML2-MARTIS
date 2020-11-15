import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import PinBox from '../components/PinBox';
import axios from 'axios';

const sendGetRequest = () => {

    return axios({
        url: 'http://localhost:3000/repairs/getRepairs',
        method: 'get'
    }).then(response => {

        console.log(response.data.data);
        return response.data;
    })
};

const Reports: React.FC = () => {
    const [repairs, setRepairs] = useState([]);
    const [employeeID, setEmployeeID] = useState<string>();
    const [date, setDate] = useState<string>();

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
                                                <IonInput value={employeeID} type="search" onIonChange={(e) => setEmployeeID(e.detail.value!)}>Employee ID: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonInput value={date} type="date" onIonChange={(e)=> setDate(e.detail.value!)}>Date: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton color="danger" /*onClick={() => }*/>Search</IonButton>
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
                    <IonRow className="ion-text-center ion-align-items-center">
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonRow>
                                        <IonCol><IonCardTitle>Inspections and Repairs</IonCardTitle></IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="4"><IonCardSubtitle>Test Module No</IonCardSubtitle></IonCol>
                                        <IonCol size="4"><IonCardSubtitle>Test Descripton</IonCardSubtitle></IonCol>
                                        <IonCol size="4"><IonCardSubtitle>Condition</IonCardSubtitle></IonCol>
                                    </IonRow>
                                </IonCardHeader>
                                <IonCardContent>
                                        {
                                            repairs.map(item => {
                                                return(
                                                <IonRow className="ion-justify-content-center">
                                                    <IonCol size="4">{item['EngineerID']}</IonCol>
                                                    <IonCol size="4">{item['RepairDate']}</IonCol>
                                                    <IonCol size="4">{item['Comment']}</IonCol>
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