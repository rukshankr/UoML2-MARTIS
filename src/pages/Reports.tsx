import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import PinBox from '../components/PinBox';
import axios from 'axios';

interface RepairPut {
    put: boolean;
    message?: string;
}

const Reports: React.FC = () => {
    const [reports, setReports] = useState([]);
    const [employeeID, setEmployeeID] = useState<string>();
    const [initialDate, setinitialDate] = useState<string>();
    const [finalDate, setfinalDate] = useState<string>();
    const [putRepair, setPutRepair] = useState<RepairPut>({ put: false });
    const [emID, setEmID] = useState<string>();
    const [division, setDivision] = useState<string>();
    const [subdivision, setSubdivision] = useState<string>();

    const searchJSON = {
        inspectorID: employeeID,
        initialDate: initialDate,
        finalDate: finalDate
    };

    const searchReports: any = (repairJSON: string) => {
        console.log(repairJSON)
        return axios.post(`http://localhost:3000/report/getReports`, repairJSON).then(response => {
            console.log(response.data.data)
            if (response.data !== "") {
                setPutRepair({ put: true, message: response.data.message })
                setReports(response.data.data)
                setEmID(response.data.data[0].Name)
                setDivision(response.data.data[0].Division)
                setSubdivision(response.data.data[0].SubDivision)
            }
            else setPutRepair({ put: true, message: "Results not found" })
        })
            .catch(error => {
                setPutRepair({ put: true, message: error })
            })
    };


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
                                                <IonLabel position="floating">Employee ID: </IonLabel>
                                                <IonInput value={employeeID} type="search" onIonChange={(e) => setEmployeeID(e.detail.value!)} />
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonInput value={initialDate} type="date" onIonChange={(e) => setinitialDate(e.detail.value!)}>From: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            <IonItem>
                                                <IonInput value={finalDate} type="date" onIonChange={(e) => setfinalDate(e.detail.value!)}>To: </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton
                                                color="danger"
                                                onClick={() => searchReports(searchJSON)}>
                                                Search</IonButton>
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
                                            <IonLabel
                                                position="fixed">
                                                Employee's Name: {emID ? emID : ""}</IonLabel><br /><br />


                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel
                                                position="fixed">
                                                Divsion: {division ? division : ""}</IonLabel><br /><br />
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel
                                                position="fixed">
                                                Subdivison:{subdivision ? subdivision : ""}</IonLabel><br /><br />

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
                                        reports.map(item => {
                                            return (
                                                <IonRow className="ion-justify-content-center">
                                                    <IonCol size="4">{item['testID']}</IonCol>
                                                    <IonCol size="4">{item['Division']}</IonCol>
                                                    <IonCol size="4">{item['result']}</IonCol>
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