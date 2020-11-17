import React, { useState } from "react";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonMenuButton,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Selection.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const sendGetRequest = () => {
  return axios({
    url: "http://localhost:3000/repair/getUnassignedRepairs",
    method: "get",
  }).then((response) => {
    console.log(response.data);
    return response.data;
  });
};

const ManageRepairs: React.FC = () => {
  const { user } = useAuth0();
  const [repairs, setRepairs] = useState([]);
  React.useEffect(() => {
    sendGetRequest().then((data) => setRepairs(data.data));
  }, []);
  console.log(repairs);

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar className="theme">
          <IonButtons slot="start">
            <IonMenuButton
              autoHide={false}
              menu="first"
              className="theme"
            ></IonMenuButton>
          </IonButtons>
          <IonGrid>
            <IonRow>
              <IonTitle size="small">
                Engineering Department
                <br />
                Preventive Maintenance Management System
              </IonTitle>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>
          <IonRow id="data" className="ion-text-center">
            {repairs.map((item) => {
              return (
                <IonCol>
                  <IonCard>
                    <IonCardHeader className="cardhead">
                      <IonCardTitle>AssetID:{item["AssetID"]}</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonText>Created Date: {item["CreatedDate"]}</IonText>
                      <br />
                      <br />
                      <IonText>
                        Comments : {item["comments"] ? item["comment"] : "None"}
                      </IonText>
                      <br />
                      <br />
                      <IonButton href="/assign">Assign</IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              );
            })}
          </IonRow>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default ManageRepairs;
