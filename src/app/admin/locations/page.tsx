"use client";

import { useState } from "react";
import FormContainer from "../components/FormContainer";
import TextInput from "@/components/ui/TextInput";
import Select from "@/components/ui/Select";
import SearchableSelect from "@/components/ui/SearchableSelect";
import Button from "../components/Button";
import { useLocations } from "@/hooks/api/useLocations";
import { LocationData } from "@/util/types";

export interface IndexObject {
    idx: number;
}

export default function Locations() {
    const {locations, isLoading, error} = useLocations()
    const [addLocationData, setAddLocationData] = useState<Object>({
        index: 0,
        room_num: "",
        building: "",
        capacity: 0,
        session: 0,
    });
    const [updateLocationData, setUpdateLocationData] = useState<Object>({
        index: 0,
        room_num: "",
        building: "",
        capacity: 0,
        session: 0,
    });
    const [updateLocationIdx, setUpdateLocationIdx] = useState<Object>({
        idx: -1,
    });
    const [deleteLocationIdx, setDeleteLocationIdx] = useState<Object>({
        idx: -1,
    });
    const [allLocationItems, setAllLocationItems] = useState<LocationData[]>(
        locations === undefined ? [] : locations
    );

    // PLACEHOLDER
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return (
            <>
                <p>You are not permitted to view this page.</p>
                <a className="underline hover:text-highlight-primary" href="/">
                    Return home
                </a>
            </>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-slate-50 text-black">
                <div className="w-9/12 mx-auto text-center">
                    <h1>Locations</h1>

                    <br />

                    <div className="mx-auto rounded bg-gray-300 p-6 w-fit">
                        <h1>Add New Location</h1>
                        <FormContainer
                            formName="newLocationItem"
                            submitText="Add"
                            onSubmit={() => {
                                setAllLocationItems([
                                    ...allLocationItems,
                                    addLocationData as LocationData,
                                ]);
                            }}
                            isLoading={false}
                            errorMessage={undefined}
                        >
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <TextInput
                                    label="Building"
                                    id="building"
                                    setState={setAddLocationData}
                                    required={true}
                                ></TextInput>
                                <TextInput
                                    label="Room"
                                    id="room_num"
                                    setState={setAddLocationData}
                                    required={true}
                                ></TextInput>
                                <TextInput
                                    label="Capacity"
                                    id="capacity"
                                    setState={setAddLocationData}
                                    required={true}
                                ></TextInput>
                                <Select
                                    label="Session"
                                    id="session"
                                    setState={setAddLocationData}
                                    required={true}
                                    defaultValue={1}
                                >
                                    {/* <option value={undefined}></option> */}
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Select>
                            </div>
                        </FormContainer>
                        <h1>Update Location</h1>
                        <FormContainer
                            formName="updateLocationItem"
                            submitText="Update"
                            onSubmit={() => {
                                setAllLocationItems(
                                    allLocationItems.map((loc, idx) => {
                                        if (
                                            idx ==
                                            (updateLocationIdx as IndexObject)
                                                .idx
                                        ) {
                                            return updateLocationData as LocationData;
                                        } else {
                                            return loc;
                                        }
                                    })
                                );
                            }}
                            isLoading={false}
                            errorMessage={undefined}
                        >
                            <Select
                                label=""
                                id="idx"
                                setState={setUpdateLocationIdx}
                                required={false}
                            >
                                {allLocationItems.map((locationItem, index) => (
                                    <option key={index} value={index}>
                                        {locationItem.building +
                                            " " +
                                            locationItem.room_num +
                                            " - Session " +
                                            locationItem.session +
                                            " (Capacity: " +
                                            locationItem.capacity +
                                            ")"}
                                    </option>
                                ))}
                            </Select>
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                <TextInput
                                    label="Building"
                                    id="building"
                                    setState={setUpdateLocationData}
                                    required={false}
                                    placeholder={
                                        allLocationItems[
                                            (updateLocationIdx as IndexObject)
                                                .idx
                                        ]
                                            ? allLocationItems[
                                                  (
                                                      updateLocationIdx as IndexObject
                                                  ).idx
                                              ].building
                                            : ""
                                    }
                                ></TextInput>
                                <TextInput
                                    label="Room"
                                    id="room_num"
                                    setState={setUpdateLocationData}
                                    required={false}
                                    placeholder={
                                        allLocationItems[
                                            (updateLocationIdx as IndexObject)
                                                .idx
                                        ]
                                            ? allLocationItems[
                                                  (
                                                      updateLocationIdx as IndexObject
                                                  ).idx
                                              ].room_num
                                            : ""
                                    }
                                ></TextInput>
                                <TextInput
                                    label="Capacity"
                                    id="capacity"
                                    setState={setUpdateLocationData}
                                    required={false}
                                    placeholder={
                                        allLocationItems[
                                            (updateLocationIdx as IndexObject)
                                                .idx
                                        ]
                                            ? allLocationItems[
                                                  (
                                                      updateLocationIdx as IndexObject
                                                  ).idx
                                              ].capacity.toString()
                                            : ""
                                    }
                                ></TextInput>
                                <Select
                                    label="Session"
                                    id="session"
                                    setState={setUpdateLocationData}
                                    required={false}
                                    defaultValue={
                                        allLocationItems[
                                            (updateLocationIdx as IndexObject)
                                                .idx
                                        ]
                                            ? allLocationItems[
                                                  (
                                                      updateLocationIdx as IndexObject
                                                  ).idx
                                              ].session
                                            : 1
                                    }
                                >
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                </Select>
                            </div>
                        </FormContainer>

                        <h1>Delete Location</h1>
                        <FormContainer
                            formName="deleteLocationItem"
                            submitText="Delete"
                            onSubmit={() =>
                                {const del = allLocationItems[
                                    (deleteLocationIdx as IndexObject).idx
                                ];
                                    setAllLocationItems(
                                    allLocationItems.filter(
                                        (loc) =>
                                            {return(loc.building !== del.building ||
                                            loc.room_num !== del.room_num ||
                                            loc.session !== del.session);}
                                    )
                                );}
                            }
                            isLoading={false}
                            errorMessage={undefined}
                        >
                            <Select
                                label=""
                                id="idx"
                                setState={setDeleteLocationIdx}
                                defaultValue={0}
                                required={false}
                            >
                                {allLocationItems.map((locationItem, index) => (
                                    <option key={index} value={index}>
                                        {locationItem.building +
                                            " " +
                                            locationItem.room_num +
                                            " - Session " +
                                            locationItem.session +
                                            " (Capacity: " +
                                            locationItem.capacity +
                                            ")"}
                                    </option>
                                ))}
                            </Select>
                        </FormContainer>

                        <br />
                        {/* send to database */}
                        <Button
                            text="Approve Changes"
                            onClick={() => {}}
                            isSubmit={false}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
