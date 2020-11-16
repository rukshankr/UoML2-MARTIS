import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar, IonCardContent, IonButtons, IonMenuButton, } from '@ionic/react';
import React from 'react';
import PinBox from '../components/PinBox';
import './Inspection.css';

const Inspection: React.FC = () => {
    return (
        <IonPage>
            <PinBox />
            <IonHeader >
                <IonToolbar className="theme">
                    <IonButtons slot="start">
                        <IonMenuButton className="theme" autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Search Inspections</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Location Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel position="fixed">Inspectable Asset IDs:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <div>

                        {/* <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Force Number Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow padding-left>
                                        <IonCol>
                                            <label id="Region">Region</label>
                                            <IonSelect interface="popover" placeholder="Select a Region" id="region" value="abc">
                                                <IonSelectOption value="All">ANY</IonSelectOption>
                                                <IonSelectOption value="5">5</IonSelectOption>
                                                <IonSelectOption value="10">10</IonSelectOption>
                                                <IonSelectOption value="15">15</IonSelectOption>
                                                <IonSelectOption value="20">20</IonSelectOption>
                                                <IonSelectOption value="25">25</IonSelectOption>
                                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                                        </IonCol>
                                        <IonCol>
                                            <label id="Division">Division</label>
                                            <IonSelect interface="popover" placeholder="Select a Region" id="region" value="abc">
                                                <IonSelectOption value="All">ANY</IonSelectOption>
                                                <IonSelectOption value="5">5</IonSelectOption>
                                                <IonSelectOption value="10">10</IonSelectOption>
                                                <IonSelectOption value="15">15</IonSelectOption>
                                                <IonSelectOption value="20">20</IonSelectOption>
                                                <IonSelectOption value="25">25</IonSelectOption>
                                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                                        </IonCol>
                                        <IonCol>
                                            <label id="S_sup">Signal Supervisor</label>
                                            <IonSelect interface="popover" placeholder="Select a Region" id="region" value="abc">
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
                                            <label id="F_no">Force Number</label>
                                            <IonSelect interface="popover" placeholder="Select a Region" id="region" value="abc">
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
                                            <IonLabel position="floating">If you know the force number you can type it below: </IonLabel>
                                            <IonItem>
                                                <IonInput type="text"></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent >
                                <IonCardContent >
                                    <IonRow>
                                        <IonCol>
                                            <label>Search Inspections:</label>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonRadioGroup name="S_I" id="S_I">
                                                <div className="searchInsRadio">
                                                    <IonItem lines="none">
                                                        <IonRadio id="S_I" name="S_I" value="case1" slot="start" />
                                                        <label>on this Force Number's teritorry</label>
                                                    </IonItem>
                                                    <IonItem lines="none">
                                                        <IonRadio id="S_I" name="S_I" value="case2" slot="start" />
                                                        <label>by this Force Number</label>
                                                    </IonItem>
                                                    <IonItem lines="none">
                                                        <IonRadio id="S_I" name="S_I" value="case3" slot="start" />
                                                        <label>by this Person</label>
                                                    </IonItem>
                                                </div>
                                            </IonRadioGroup>
                                        </IonCol>
                                    </IonRow>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>


                    </IonRow> */}
                    </div>

                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Range of Dates to Searches</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonRadioGroup name="date-search" value="opt1">
                                                <div className="dateSearchRadio">
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonLabel>Date Test performed</IonLabel>
                                                        <IonRadio id="date_search" name="date_search" value="opt1" slot="start" />

                                                    </IonItem>
                                                    <IonItem lines="none" className="radioItem">
                                                        <IonLabel>Date uploaded to RailDOCs</IonLabel>
                                                        <IonRadio id="date_search" name="date_search" value="opt2" slot="start" />

                                                    </IonItem>
                                                </div>
                                            </IonRadioGroup>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <label>From:</label>
                                            <IonInput type="date" id="from_date" name="from_date" min="2019-01-01" max="2029-12-31" placeholder="ANY"></IonInput>
                                        </IonCol>
                                        <IonCol>
                                            <label>To:</label>
                                            <IonInput type="date" id="to_date" name="to_date" min="2019-01-01" max="2029-12-31" placeholder="ANY"></IonInput>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                                <IonCardSubtitle className="cardsub">
                                    <IonCardSubtitle>OR</IonCardSubtitle>
                                </IonCardSubtitle>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <label id="dayrange">In the Last </label>
                                            <IonSelect interface="popover" placeholder="30" id="region" value="abc">
                                                <IonSelectOption value="5">5</IonSelectOption>
                                                <IonSelectOption value="10">10</IonSelectOption>
                                                <IonSelectOption value="15">15</IonSelectOption>
                                                <IonSelectOption value="20">20</IonSelectOption>
                                                <IonSelectOption value="25">25</IonSelectOption>
                                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                                            <label> days</label>
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
                                    <IonCardTitle>Test Type</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <label id="test_type">Test types:</label>
                                            <IonSelect interface="popover" placeholder="Select a Test Type" id="region" value="abc">
                                                <IonSelectOption value="All">ANY</IonSelectOption>
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
                                            <IonSelect interface="popover" placeholder="Select a Frequency" id="region" value="abc">
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
                                            <IonCheckbox id="lock" name="lock"></IonCheckbox>
                                            <label> Lock only for startup tests</label>
                                        </IonCol>
                                        <IonCol>
                                            <IonCheckbox id="lock1" name="lock1"></IonCheckbox>
                                            <label> Lock only for Out-of-schedule tests</label>
                                        </IonCol>
                                        <IonCol>
                                            <IonCheckbox id="lock1" name="lock1"></IonCheckbox>
                                            <label> Lock only for Imported test records</label>
                                        </IonCol>
                                    </IonRow>

                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>

                            <IonButton color="danger" size="large" expand="block">Search</IonButton>

                        </IonCol>
                    </IonRow>
                </IonGrid>




            </IonContent>
        </IonPage >
    );
};

export default Inspection;