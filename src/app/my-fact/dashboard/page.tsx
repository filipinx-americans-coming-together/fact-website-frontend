"use client";

import Navbar from "@/components/Navbar";
import UserAgenda from "@/components/formatting/UserAgenda";
import WorkshopCard from "@/components/formatting/WorkshopCard";
import LoadingCircle from "@/components/icons/LoadingCircle";
import LinkButton from "@/components/ui/LinkButton";
import { API_URL } from "@/util/constants";
import {
  DelegateData,
  RegistrationData,
  UserData,
  UserResponse,
} from "@/util/types";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<UserData>();
  const [delegate, setDelegate] = useState<DelegateData>();
  const [registration, setRegistration] = useState<RegistrationData[]>();

  // get data
  useEffect(() => {
    fetch(`${API_URL}/user/`, { credentials: "include" })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          response.text().then((text) => console.log(text));
            window.location.href = "/my-fact/login";
        }
      })
      .then((data: UserResponse) => {
        // user data
        const userData = data.user[0];

        const formattedUser: UserData = {
          id: userData.pk,
          first_name: userData.fields.first_name,
          last_name: userData.fields.last_name,
          email: userData.fields.email,
        };

        setUser(formattedUser);

        // delegate data
        const delegateData = data.delegate[0];

        const formattedDelegate: DelegateData = {
          id: delegateData.pk,
          pronouns: delegateData.fields.pronouns,
          year: delegateData.fields.year,
          school: delegateData.fields.school,
        };

        setDelegate(formattedDelegate);

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
      <Navbar />
      <div className="flex justify-evenly sm: flex-col sm:text-center md:flex-row md:text-left">
        <div>
          {/* user info */}
          <div>
            {user ? (
              <>
                <div className="font-bold text-xl my-2">
                  Welcome, {user.first_name}
                </div>
                <div className="my-1">
                  {user.first_name} {user.last_name}
                </div>
              </>
            ) : (
              <LoadingCircle />
            )}
          </div>
          <div className="text-center my-6">
            <LinkButton text="EDIT PROFILE" url="/my-fact/profile" />
          </div>
          <div className="flex flex-col justify-center items-center bg-text-primary px-2 py-4 my-4">
            {registration ? (
              registration.map((pair) => (
                <WorkshopCard key={pair.workshop} id={pair.workshop} />
              ))
            ) : (
              <LoadingCircle />
            )}
          </div>
          <div className="text-center my-6">
            <LinkButton text="UPDATE WORKSHOPS" url="/my-fact/workshops" />
          </div>
        </div>
        <div>{user ? <UserAgenda id={user.id} /> : <LoadingCircle />}</div>
      </div>
    </>
  );
}
