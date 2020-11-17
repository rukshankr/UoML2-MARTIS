import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import PinBox from '../components/PinBox';
import './Inspection.css';
import axios from 'axios';

interface RepairPut {
    put: boolean;
    message?: string;
}


const Repairs: React.FC = () => {
    const [engineerID, setengineerID] = useState<string>();
    const [assetID, setassetID] = useState<string>();
    const [repairDate, setRepairDate] = useState<string>();
    const [comment, setComment] = useState<string>();
    const [putRepair, setPutRepair] = useState<RepairPut>({ put: false });

    const repairJSON = {
        engineerId: engineerID,
        assetId: assetID,
        createdDate: '2020-10-10',
        completedDate: repairDate,
        comment: comment
    };
    const updateRepairs: any = (repairJSON: string) => {
        console.log(repairJSON)
        return axios.put(`http://localhost:3000/repair/addRepair`, repairJSON).then(response => {
            console.log(response.data)
            if (response.data !== "") {
                setPutRepair({ put: true, message: response.data })
            }
            else setPutRepair({ put: true, message: "Repair not sent" })
        })
            .catch(error => {
                setPutRepair({ put: true, message: error })
            })
    };

    return (
        <IonPage>
            <IonToast
                isOpen={putRepair.put}
                onDidDismiss={() => setPutRepair({ message: "", put: false })}
                message={putRepair.message}
                duration={3000}
            />
            <PinBox />
            <IonHeader>
                <IonToolbar color="danger">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Report Repairs
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Asset Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Inspectable Asset ID:</IonLabel>
                                            <IonItem>
                                                <IonInput value={assetID} type="text" onIonChange={e => setassetID(e.detail.value!)}></IonInput>
                                            </IonItem>

                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Description:</IonLabel>
                                            <IonItem>
                                                <IonInput value={comment} type="text" onIonChange={e => setComment(e.detail.value!)}></IonInput>
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
                                    <IonCardTitle>Personnel Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Engineer ID:</IonLabel>
                                            <IonItem>
                                                <IonInput value={engineerID} type="text" onIonChange={e => setengineerID(e.detail.value!)}></IonInput>
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
                                    <IonCardTitle>Date/Time Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>

                                            <IonItem >
                                                <IonLabel position="floating">Repair Date:</IonLabel>
                                                <IonInput value={repairDate} placeholder="Any"
                                                    onIonChange={e => setRepairDate(e.detail.value!)} type="datetime-local" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31">
                                                </IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonCol>
                                                <IonItem lines="none">
                                                    <IonCheckbox slot="start" />
                                                    <IonLabel>Confirmed date</IonLabel>
                                                </IonItem>
                                            </IonCol>
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
                                    <IonCardTitle>System Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem lines="none">
                                                <IonCheckbox slot="start" />
                                                <IonLabel>Needs further maintenance</IonLabel>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>Send this repair to the Main Server?</IonLabel>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonRadioGroup name="date-search" value="opt1">
                                                <div className="dateSearchRadio">
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id="date_search" name="date_search" value="opt1" slot="start" />
                                                        <IonLabel>Hold for completion</IonLabel>
                                                    </IonItem>
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id="date_search" name="date_search" value="opt2" slot="start" />
                                                        <IonLabel>Ready to send</IonLabel>
                                                    </IonItem>
                                                </div>
                                            </IonRadioGroup>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color="danger" size="large" expand="block" onClick={() => updateRepairs(repairJSON)}>Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Repairs;