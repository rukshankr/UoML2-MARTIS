import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRadio, IonRadioGroup, IonRow, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import PinBox from '../components/PinBox';
import './Inspection.css';

const Assign: React.FC = () => {
    return (
        <IonPage>
            <PinBox />
            <IonHeader>
                <IonToolbar className="theme">
                    <IonButtons slot="start">
                        <IonMenuButton className="theme" autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Assign Inspections/Repairs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent><br />
                {/* <IonSegment value="inspector" onIonChange={e => console.log('Segment selected', e.detail.value)}>
                    <IonSegmentButton value="inspector">
                        <IonLabel>Inspector</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="engineer">
                        <IonLabel>Engineer</IonLabel>
                    </IonSegmentButton>
                </IonSegment> */}
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
                                            <IonLabel position="fixed">Asset ID:</IonLabel>
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
                                    <IonCardTitle>Personnel Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
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
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>

                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Test Type Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <label id="test_typ">Test types:</label>
                                            <IonSelect interface="popover" placeholder="Select a Test Type" id="region" value="abc">
                                                <IonSelectOption value="All">Any</IonSelectOption>
                                                <IonSelectOption value="Grade Crossings Test">Grade Crossings Test</IonSelectOption>
                                                <IonSelectOption value="Signal Test">Signal Test</IonSelectOption>
                                                <IonSelectOption value="Signal Structure Test">Signal Structure Test</IonSelectOption>
                                                <IonSelectOption value="Timing Test">Timing Test</IonSelectOption>
                                                <IonSelectOption value="Grounds Test">Grounds Test</IonSelectOption>
                                                <IonSelectOption value="Insulation Test">Insulation Test</IonSelectOption>
                                                <IonSelectOption value="Defect Detector Test">Defect Detector Test</IonSelectOption>
                                                <IonSelectOption value="Bridge Test">Bridge Test</IonSelectOption>
                                                <IonSelectOption value="Switch Test">Switch Test</IonSelectOption>
                                                <IonSelectOption value="Relay Test">Relay Test</IonSelectOption>
                                                <IonSelectOption value="Weekly Crossing Test">Weekly Crossing Test</IonSelectOption>
                                                <IonSelectOption value="Track Circuits Test">Track Circuits Test</IonSelectOption></IonSelect>
                                        </IonCol>
                                        <IonCol>
                                            <label id="f">Frequency:</label>
                                            <IonSelect interface="popover" placeholder="Select Frequency" id="region" value="abc">
                                                <IonSelectOption value="All">Any</IonSelectOption>
                                                <IonSelectOption value="5">5</IonSelectOption>
                                                <IonSelectOption value="10">10</IonSelectOption>
                                                <IonSelectOption value="15">15</IonSelectOption>
                                                <IonSelectOption value="20">20</IonSelectOption>
                                                <IonSelectOption value="25">25</IonSelectOption>
                                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
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
                                            <IonInput type="date" id="due_date" name="due_date" min="2019-01-01" max="2029-12-31" placeholder="Any"></IonInput>
                                        </IonCol>
                                    </IonRow>

                                </IonCardContent>
                            </IonCard>
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