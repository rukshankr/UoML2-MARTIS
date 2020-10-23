import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Login.css';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Login to MARTIS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login to MARTIS</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                    </IonRow>
                    <IonRow >
                        <IonCol>
                            <IonCard>
                                <IonCardContent>
                                    <IonImg className="martisImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Wabtec_Logo.svg/1200px-Wabtec_Logo.svg.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Your Username / Email Address</IonLabel>
                                <IonInput type="text"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Your Password</IonLabel>
                                <IonInput type="password"></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color="danger" shape="round" expand="block" href="/selection">
                                Login
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow></IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Login;