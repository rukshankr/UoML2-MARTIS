import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PinBox from '../components/PinBox';
import './Inspection.css';

const Repairs: React.FC = () => {
    return (
        <IonPage>
            <PinBox/>
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
                                            <IonLabel position="fixed">Inspectable Asset IDs:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"></IonInput>
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
                                    <IonCardTitle>Date/Time Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <label>Repair Date:</label>
                                            <IonInput type="date" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31" placeholder="Any"></IonInput>
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
                        <IonButton color="danger" size="large" expand="block">Save</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Repairs;