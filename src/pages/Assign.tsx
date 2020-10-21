import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Inspection.css';

const Assign: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Assign Inspections</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Location Information</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel position="fixed">Asset IDs:</IonLabel>
                            <IonItem>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                            <IonLabel position="floating">Region:</IonLabel>
                            <IonSelect placeholder="Select Region" id="region" value="abc">
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
                            <div>
                                <IonLabel position="stacked">Division:</IonLabel>
                                <IonSelect placeholder="Select Division" id="region" value="abc">
                                    <IonSelectOption value="All">ANY</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="10">10</IonSelectOption>
                                    <IonSelectOption value="15">15</IonSelectOption>
                                    <IonSelectOption value="20">20</IonSelectOption>
                                    <IonSelectOption value="25">25</IonSelectOption>
                                    <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                                <IonLabel position="stacked">Prefix:</IonLabel>
                                <IonSelect placeholder="Select Prefix" id="region" value="abc">
                                    <IonSelectOption value="All">ANY</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="10">10</IonSelectOption>
                                    <IonSelectOption value="15">15</IonSelectOption>
                                    <IonSelectOption value="20">20</IonSelectOption>
                                    <IonSelectOption value="25">25</IonSelectOption>
                                    <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                            </div>
                        </IonCol>
                        <IonCol>
                            <IonRow>
                                <div>
                                    <IonLabel position="stacked">Subdivision:</IonLabel>
                                    <IonSelect placeholder="Select Subdivision" id="region" value="abc">
                                        <IonSelectOption value="All">ANY</IonSelectOption>
                                        <IonSelectOption value="5">5</IonSelectOption>
                                        <IonSelectOption value="10">10</IonSelectOption>
                                        <IonSelectOption value="15">15</IonSelectOption>
                                        <IonSelectOption value="20">20</IonSelectOption>
                                        <IonSelectOption value="25">25</IonSelectOption>
                                        <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                                    <IonLabel position="stacked">Milepost Range:</IonLabel>
                                    <br></br>
                                    <IonCol><textarea className="Range"></textarea></IonCol>
                                    <IonCol> - </IonCol>
                                    <IonCol><textarea className="Range"></textarea></IonCol>
                                </div>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Personnel Information</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonLabel>Staff Type:</IonLabel>
                            <IonRadioGroup name="assignee" value="opt1">
                                <div className="dateSearchRadio">
                                    <IonItem lines="none" className="radioItem">
                                        <IonRadio id="assignee" name="assignee" value="opt1" slot="start" />
                                        <IonLabel>Inspector</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none" className="radioItem">
                                        <IonRadio id="assignee" name="assignee" value="opt2" slot="start" />
                                        <IonLabel>Mechanic</IonLabel>
                                    </IonItem>
                                </div>
                            </IonRadioGroup>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="AssignRadio">
                                <div className="radioItem">
                                    <IonLabel position="fixed">Assignee ID:</IonLabel>
                                    <IonItem>
                                        <IonInput type="text"></IonInput>
                                    </IonItem>
                                </div>
                                <div className="radioItem">
                                    <IonLabel position="fixed">Supervisor ID:</IonLabel>
                                    <IonItem>
                                        <IonInput type="text"></IonInput>
                                    </IonItem>
                                </div>

                            </div>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Test Type Information</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <label id="test_typ">Test types:</label>
                            <IonSelect placeholder="Select a Test Type" id="region" value="abc">
                                <IonSelectOption value="All">ANY</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="10">10</IonSelectOption>
                                <IonSelectOption value="15">15</IonSelectOption>
                                <IonSelectOption value="20">20</IonSelectOption>
                                <IonSelectOption value="25">25</IonSelectOption>
                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                        </IonCol>
                        <IonCol>
                            <label id="f">Frequency:</label>
                            <IonSelect placeholder="Select Frequency" id="region" value="abc">
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
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Date/Time Information</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonRadioGroup name="date-search" value="opt1">
                                <div className="dateSearchRadio">
                                    <IonItem lines="none" className="radioItem">
                                        <IonRadio id="date_search" name="date_search" value="opt1" slot="start" />
                                        <IonLabel>Urgent</IonLabel>
                                    </IonItem>
                                    <IonItem lines="none" className="radioItem">
                                        <IonRadio id="date_search" name="date_search" value="opt2" slot="start" />
                                        <IonLabel>Not Urgent</IonLabel>
                                    </IonItem>
                                </div>
                            </IonRadioGroup>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <label>Due Date:</label>
                            <IonInput type="date" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31" placeholder="ANY"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" color="danger" size="large">Assign</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Assign;