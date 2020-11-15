import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import PinBox from '../components/PinBox';

const CreateAsset: React.FC = () => {
    const [status, setStatus] = useState<boolean>(false);
    return (
        <IonPage>
            {/*<PinBox />*/}
            <IonHeader>
                <IonToolbar color="danger">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first"></IonMenuButton>
                    </IonButtons>
                    <IonTitle>
                        Asset Creation
                </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <IonCardHeader mode="ios" className="cardhead">
                                    <IonCardTitle>Enter Information</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonLabel>Asset ID:</IonLabel>
                                                <IonInput></IonInput>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonItem>
                                                <IonToggle color="danger" checked={status} onIonChange={(e) => setStatus(e.detail.checked)}/>
    <IonLabel>Status: Functionality</IonLabel>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                                <IonCardSubtitle className="cardsub">
                                    <IonCardSubtitle>Location:</IonCardSubtitle>
                                </IonCardSubtitle>
                                <IonCardContent>
                                    <IonRow>
                                        <IonCol>
                                            GPS Latitude:
                                            <IonItem>
                                                <IonInput type="number"/>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                            GPS Longitude:
                                            <IonItem>
                                                <IonInput type="number"/>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton color="success">Get Current Location</IonButton>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                            <IonLabel>Region:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"/>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                        <IonLabel>Division:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"/>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol>
                                        <IonLabel>Subdivision:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"/>
                                            </IonItem>
                                        </IonCol>
                                        <IonCol>
                                        <IonLabel>Nearest Milepost:</IonLabel>
                                            <IonItem>
                                                <IonInput type="text"/>
                                            </IonItem>
                                        </IonCol>
                                    </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" color="danger">Create Asset</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default CreateAsset;
