import { API_URL } from "@/util/constants";
import { RegistrationData, UserData, UserResponse } from "@/util/types";
import { useEffect, useState } from "react";
import LoadingCircle from "../icons/LoadingCircle";
import AgendaWorkshop from "./AgendaWorkshop";

interface UserAgendaProps {
  id: number;
}

/**
 * Agenda for individual user
 * @param id id of user
 * @returns UserAgenda component
 */
function UserAgenda(props: UserAgendaProps) {
  const [registration, setRegistration] = useState<RegistrationData[]>();

  useEffect(() => {
    fetch(`${API_URL}/user/`, { credentials: "include" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          response.text().then((text) => console.log(text));
          //   window.location.href = "/my-fact/login";
        }
      })
      .then((data: UserResponse) => {
        // registration data
        const registrationData = data.registration;
        const formattedRegistration: RegistrationData[] = [];

        for (let i = 0; i < registrationData.length; i++) {
          const formatted: RegistrationData = {
            delegate: registrationData[i].fields.delegate,
            workshop: registrationData[i].fields.workshop,
          };

          formattedRegistration.push(formatted);
        }

        setRegistration(formattedRegistration);
      });
  }, []);

  return (
    <>
      {registration ? (
        <>
          <div className="text-center">
            <div className="text-3xl font-bold">My Agenda</div>
            <button className="underline font-light hover:text-highlight-2-primary my-3">
              Download
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-bold text-xl my-2">Friday, Month Day</div>
            <div>
              <div>Event Name</div>
              <div>00:00AM - 00:00AM</div>
              <div>Building Name #</div>
            </div>
            <div>
              <div>Event Name</div>
              <div>00:00AM - 00:00AM</div>
              <div>Building Name #</div>
            </div>
            <div className="font-bold text-xl my-2">Saturday, Month Day</div>
            {registration.map((pair) => (
              <AgendaWorkshop key={pair.workshop} id={pair.workshop} />
            ))}
          </div>
        </>
      ) : (
        <LoadingCircle />
      )}
    </>
  );
}

export default UserAgenda;
