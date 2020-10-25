import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonCol, IonGrid, IonLabel, IonLoading, IonRow, IonToast } from '@ionic/react';
import React, { useState, useEffect } from 'react';

interface LocationError {
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            setPosition(position);
            setLoading(false);
            setError({ showError: false });
            console.log(position.coords.latitude+" , "+position.coords.longitude);
        } catch (e) {
            setError({ showError: true, message: e.message });
            setLoading(false);
        }
    }

    useEffect(() => {
        getLocation();
    }, [])
    return (
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />
            <IonGrid>
                <IonRow>
                    <IonCol>
                        {/*<IonButton color="primary" onClick={getLocation}>Get Nearby Tests</IonButton>*/}
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonLabel>Lat: {position?.coords.latitude} Long: {position?.coords.longitude}</IonLabel>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default GeolocationButton;