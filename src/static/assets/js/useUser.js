import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./useAuth.jsx";
import fetchAPI from "./fetchAPI.js";
import { useIsMounted } from "./useIsMounted.js";
import { decodeUserId } from "./app.js";



function useUser() {
  const [profile, setProfile] = useState({});
  const [privilege, setPrivilege] = useState({});
  const [basicInfo, setBasicInfo] = useState({});
  const [location, setLocation] = useState({});
  const [wallet, setWallet] = useState({});
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [emergency_contact, setEmergencyContact] = useState({});
  const [isProcessingRequest, setProcessingRequest] = useState(true);
  const { authorize, isAuthenticated, GetAuthenticated } = useAuth();
  const isMounted = useIsMounted();
  const navigate = useNavigate();
  const { userId } = decodeUserId();

  if (isAuthenticated) {
    authorize("access_token");
  } else {
    GetAuthenticated();
  }


  useEffect(
    function () {
      if (isAuthenticated) {
        fetchAPI(`/user/${userId}`, "GET", undefined, [200, 401, 422])
          .then(
            function (response) {
              if (response) {
                const { data, status } = response;

                let objsToRemove = [
                  "privilege", "basic_info", "location", "wallet",
                  "transaction_history"
                ];

                if (status === 200) {
                  setPrivilege(data.privilege);
                  setBasicInfo(data.basic_information);
                  setLocation(data.location);
                  setWallet(data.wallet);
                  setTransactionHistory(data.transaction_history);
                  setEmergencyContact(data.emergency_contact);

                  objsToRemove.forEach(
                    function (key) {
                      delete data[key];
                    }
                  );

                  setProfile(data);
                };
              };
            }
          )
          .finally(
            function () {
              setProcessingRequest(false);
            }
          );
      } else {
        navigate("auth/sign-in");
      };
    }, [isAuthenticated, navigate]
  );

  return {
    profile, privilege, basicInfo, location, wallet,
    transactionHistory, emergency_contact
  };
};


export { useUser };