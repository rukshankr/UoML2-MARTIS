import { IonButton, IonCard, IonCardContent, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Login.css';

const Login: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        loginWithRedirect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <IonPage id="first">
            <IonHeader >
                <IonToolbar className="theme">
                    <IonTitle>Login to MARTIS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className="ion-text-center ion-margin">
                    <IonRow>
                    </IonRow>
                    <IonCard >

                        <IonCardContent className="cardlogin">
                            <IonImg className="martisImg" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Wabtec_Logo.svg/1200px-Wabtec_Logo.svg.png" />
                        </IonCardContent>

                        <IonCardContent>

                            <IonRow>

                                <IonCol>
                                    <IonItem>
                                        <IonLabel position="floating">Your Username / Email</IonLabel>
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
                                    <IonItem>


                                        <IonCheckbox color="danger" slot="start"></IonCheckbox>
                                        <IonLabel> Remember Me</IonLabel>
                                    </IonItem>

                                </IonCol>
                                <IonCol>
                                    <IonItem>
                                        <a href="/selection">Forgot Password?</a>
                                    </IonItem>

                                </IonCol>
                            </IonRow>
                        </IonCardContent>
                        <IonCardContent>
                            <IonCol>
                                <IonButton color="danger" shape="round" expand="block" /*onClick={()=> loginWithRedirect()}*/>
                                    Login
                            </IonButton>
                            </IonCol>
                        </IonCardContent>
                    </IonCard>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
};

export default Login;