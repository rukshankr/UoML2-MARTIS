import { IonAlert } from '@ionic/react';
import { wait } from '@testing-library/react';
import React, { useState } from 'react';
import './PinBox.css';



const PinBox: React.FC = () => {
    const [enterPinAlert, setEnterPinAlert] = useState(true);
    const [invalidPinAlert, setInvalidPinAlert] = useState(false);
    const [forgotPin, setforgotPin] = useState(false);
    const [apin, setApin] = useState<number>();
    const [ppin, setPpin] = useState<number>();

    const verifyPin = () => {
        if (ppin?.toString() === '1998' || forgotPin) {
            setInvalidPinAlert(false);
            setEnterPinAlert(false);
            return;
        }
        else {
            setEnterPinAlert(false);
            wait();
            setInvalidPinAlert(true);
        }
    };
    return (
        <React.Fragment>
            <IonAlert
                isOpen={enterPinAlert}
                cssClass='my-custom-class'
                onDidDismiss= {verifyPin}
                header={'Please insert your 4-digit PIN:'}
                backdropDismiss={false}
                inputs={[
                    {
                        name: 'PIN',
                        type: 'number',
                        min: 0,
                        max: 10000,
                        placeholder: '0000'
                    }
                ]}
                buttons={[
                    {
                        text: 'Forgot PIN',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('forgot pin');
                            setforgotPin(true);
                        }
                    },
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            setPpin(alertData.PIN);
                        }
                    }
                ]}
            />
            <IonAlert
                isOpen={invalidPinAlert}
                cssClass='my-custom-class'
                onDidDismiss={() => setEnterPinAlert(true)}
                header={'The PIN you entered was invalid'}
                subHeader={'Please try again'}
                backdropDismiss={false}
                buttons={[
                    {
                        text: 'Ok',
                        handler: () => {
                            setInvalidPinAlert(false);
                        }
                    }
                ]}
            />
            <IonAlert
                isOpen={forgotPin}
                cssClass='my-custom-class'
                onDidDismiss={() => setforgotPin(false)}
                header={'Enter your credentials and the new PIN'}
                backdropDismiss={false}
                inputs={[
                    {
                        name: 'email',
                        type: 'email',
                        placeholder: 'someone@wabtec.com'
                    },
                    {
                        name: 'pwd',
                        type: 'password',
                        placeholder: 'enter your password'
                    },
                    {
                        name: 'newPIN',
                        type: 'number',
                        min: 0,
                        max: 9999,
                        placeholder: '0000'
                    }
                ]}
                buttons={[
                    {
                        text: 'Ok',
                        handler: (alertData) => {
                            setApin(alertData.newPIN);
                            console.log(apin);
                        }
                    }
                ]}
            />
            </React.Fragment>
    )
};

export default PinBox;

