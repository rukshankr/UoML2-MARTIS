import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { IonCol, IonGrid, IonLabel, IonLoading, IonRow, IonToast } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import Haversine from 'haversine';

interface LocationError {
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();
    const [shortDist, setShortDist] = useState<string>();

    const getLocation = async () => {
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();
            setPosition(position);
            setLoading(false);
            setError({ showError: false });
            console.log(position.coords.latitude + " , " + position.coords.longitude);

            const asset = {
                latitude: 6.904564,  //30.849635,               //asset location
                longitude: 79.957127 //-83.24559
            };
            
            const employee = {
                latitude: position.coords.latitude,         //employee location
                longitude: position.coords.longitude
            };
            const distance = Haversine(asset, employee, { unit: "meter" });
            console.log(distance);
            if (distance < 500) {
                setShortDist('yes');
            }
            else {
                setShortDist('no');
            }
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
                <IonRow>
                    <IonLabel>Within 500m? : {shortDist}</IonLabel>
                </IonRow>
            </IonGrid>
        </>
    );
};

export default GeolocationButton;