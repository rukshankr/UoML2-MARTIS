import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import './Inspection.css';
import { useLocation } from 'react-router';

const GroundsTest: React.FC = () => {
    const location: any = useLocation();
    const aid: string = location.state.aid;
    const eid: string = location.state.eid;
    const cd: string = location.state.cd;

    return (
        <IonPage>
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
                                            <IonItem>
                                                <IonLabel position="floating">Asset ID:</IonLabel>
                                                <IonInput value={aid}
                                                    type="text" ></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel position="floating">Description:</IonLabel>
                                                <IonInput type="text"></IonInput>
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
                                                <IonInput
                                                    value={eid}
                                                    type="text"
                                                    placeholder={eid ? eid : "Not assigned"}
                                                ></IonInput>
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
                                            <IonItem>
                                                <IonLabel position="floating">Inspection Date:</IonLabel>
                                                <IonInput type="date" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31" placeholder="Any"></IonInput>

                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonCol >
                                                <IonItem lines="none">
                                                    <IonCheckbox slot="start" />
                                                    <IonLabel>Confirmed inspection date</IonLabel>
                                                </IonItem>
                                            </IonCol>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>Out of schedule inspection?</IonLabel>
                                            <IonRadioGroup name="date-search" value="opt1">
                                                <div className="dateSearchRadio">
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id="out-of-schedule" name="yes" value="yes" slot="start" />
                                                        <IonLabel>Yes</IonLabel>
                                                    </IonItem>
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id=" out-of-schedule2" name="no" value="no" slot="start" />
                                                        <IonLabel>No</IonLabel>
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
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Grounds</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel position="floating">Bus name:</IonLabel>
                                                <IonInput type="text"></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>Condition:</IonLabel>
                                            <IonRadioGroup name="condition" value="opt1">
                                                <div className="dateSearchRadio">
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id="functional" name="functional" value="good" slot="start" />
                                                        <IonLabel>Functional</IonLabel>
                                                    </IonItem>
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonRadio id="maintenance" name="maintain" value="bad" slot="start" />
                                                        <IonLabel>Needs maintenance</IonLabel>
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
                            <IonLabel>Send this inspection to the RailDOCS?</IonLabel>
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
                    <IonRow>
                        <IonCol>
                            <IonButton href="/inspectlist" color="danger" size="large" expand="block">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage >
    )
};

export default GroundsTest;