import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
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
    const [putRepair, setPutRepair] = useState<RepairPut>({put: false, message: "Repair wasn't added"});

    const repairJSON = {
        engineerId: engineerID,
        assetId: assetID,
        repairDate: repairDate,
        comment: comment
    };
    const updateRepairs: any = (repairJSON : string) => {
        console.log(repairJSON)
        return axios.put(`http://localhost:3000/repairs/addRepair`, repairJSON).then(response => {
            console.log(response.data)
            setPutRepair({put : true ,message : response.data})
        })
    };

    return (
        <IonPage>
            <IonToast
                isOpen={putRepair.put}
                onDidDismiss={() => setPutRepair({ message: "Repair wasn't added", put: false })}
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
                                            <IonLabel position="floating">Region:</IonLabel>
                                            <IonSelect interface="popover" placeholder="Select Region" id="region" value="abc">
                                                <IonSelectOption value="All">ANY</IonSelectOption>
                                                <IonSelectOption value="5">5</IonSelectOption>
                                                <IonSelectOption value="10">10</IonSelectOption>
                                                <IonSelectOption value="15">15</IonSelectOption>
                                                <IonSelectOption value="20">20</IonSelectOption>
                                                <IonSelectOption value="25">25</IonSelectOption>
                                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
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
                                            <IonLabel position="fixed">Inspector ID:</IonLabel>
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
                                            <label>Repair Date:</label>
                                            <IonInput
                                                value={repairDate}
                                                type="date" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31"
                                                placeholder="Any"
                                                onIonChange={e => setRepairDate(e.detail.value!)}></IonInput>
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