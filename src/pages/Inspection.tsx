import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonLabel, IonPage, IonRadio, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Inspection.css';

const Inspection: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Search Inspections</IonTitle>
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

                            <IonLabel position="stacked">Inspectable Asset IDs:</IonLabel>
                            <IonInput type="text"></IonInput>
                            <IonLabel position="stacked">Region:</IonLabel>
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
                                    <IonLabel position="stacked">Subdivision:</IonLabel>
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
                                    <IonCardTitle>Force Number Information</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow padding-left>
                        <IonCol>
                            <label id="Region">Region</label>
                            <IonSelect placeholder="Select a Region" id="region" value="abc">
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
                            <IonSelect placeholder="Select a Region" id="region" value="abc">
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
                            <IonSelect placeholder="Select a Region" id="region" value="abc">
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
                            <IonSelect placeholder="Select a Region" id="region" value="abc">
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
                            <IonInput type="text"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <label>Search Inspections:</label>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonRadio id="S_I" name="S_I" value="case1"></IonRadio>
                            <label> on this Force Number's teritorry</label>
                        </IonCol>
                        <IonCol>
                            <IonRadio id="S_I" name="S_I" value="case2"></IonRadio> <label> by this Force Number</label>
                        </IonCol>
                        <IonCol>
                            <IonRadio id="S_I" name="S_I" value="case3"></IonRadio> <label> by this Person</label>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Range of Dates to Searches</IonCardTitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <input type="radio" id="date_search" name="date_search" value="opt1" /> <label>Date Test performed</label>
                        </IonCol>
                        <IonCol>
                            <input type="radio" id="date_search" name="date_search" value="opt2" /> <label>Date uploaded to RailDOCs</label>
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
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardSubtitle>OR</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <label id="dayrange">In the Last </label>
                            <IonSelect placeholder="30" id="region" value="abc">
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="10">10</IonSelectOption>
                                <IonSelectOption value="15">15</IonSelectOption>
                                <IonSelectOption value="20">20</IonSelectOption>
                                <IonSelectOption value="25">25</IonSelectOption>
                                <IonSelectOption value="30">30</IonSelectOption></IonSelect>
                            <label> days</label>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Test Type</IonCardTitle>
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
                            <IonSelect placeholder="Select a Region" id="region" value="abc">
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
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonButton color="primary">Search</IonButton>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Inspection;