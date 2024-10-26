"use client";

import { useState } from "react";
import FormContainer from "../components/FormContainer";
import TextInput from "@/components/ui/TextInput";
import Select from "@/components/ui/Select";
import SearchableSelect from "@/components/ui/SearchableSelect";
import Button from "../components/Button";

export interface LocationItem {
    building: string;
    room: string;
    capacity: number;
    session: number;
}

export interface IndexObject {
    idx: number;
}

export default function Locations() {
    const [addLocationData, setAddLocationData] = useState<Object>({building: "", room: "", capacity: 0, session: 0})
    const [updateLocationData, setUpdateLocationData] = useState<Object>({building: "", room: "", capacity: 0, session: 0})
    const [updateLocationIdx, setUpdateLocationIdx] = useState<Object>({idx: -1});
    const [deleteLocationIdx, setDeleteLocationIdx] = useState<Object>({idx: -1});
    const [allLocationItems, setAllLocationItems] = useState<LocationItem[]>([]);
    
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

    return(
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
                            onSubmit={()=>{setAllLocationItems([...allLocationItems, addLocationData as LocationItem]);}}
                            isLoading={false}
                            errorMessage={undefined}>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <TextInput label="Building" id="building" setState={setAddLocationData} required={true}></TextInput>
                                    <TextInput label="Room" id="room" setState={setAddLocationData} required={true}></TextInput>
                                    <TextInput label="Capacity" id="capacity" setState={setAddLocationData} required={true}></TextInput>
                                    <Select label="Session" id="session" setState={setAddLocationData} required={true} defaultValue={1}>
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
                            onSubmit={()=>{setAllLocationItems([...(allLocationItems.slice(0,(updateLocationIdx as IndexObject).idx)), updateLocationData as LocationItem, ...(allLocationItems.slice((updateLocationIdx as IndexObject).idx + 1))]);}}
                            isLoading={false}
                            errorMessage={undefined}>
                                <Select label="" id="idx" setState={setUpdateLocationIdx} required={false}>
                                    {allLocationItems.map((locationItem, index)=>(<option key={index} value={index}>{locationItem.building + " " + locationItem.room + " - Session " + locationItem.session}</option>))}
                                </Select>
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                    <TextInput label="Building" id="building" setState={setUpdateLocationData} required={true} value={allLocationItems[(updateLocationIdx as IndexObject).idx] ? allLocationItems[(updateLocationIdx as IndexObject).idx].building : ""}></TextInput>
                                    <TextInput label="Room" id="room" setState={setUpdateLocationData} required={true} value={allLocationItems[(updateLocationIdx as IndexObject).idx] ? allLocationItems[(updateLocationIdx as IndexObject).idx].room : ""}></TextInput>
                                    <TextInput label="Capacity" id="capacity" setState={setUpdateLocationData} required={true} value={allLocationItems[(updateLocationIdx as IndexObject).idx] ? allLocationItems[(updateLocationIdx as IndexObject).idx].capacity.toString() : ""}></TextInput>
                                    <Select label="Session" id="session" setState={setUpdateLocationData} required={true} defaultValue={allLocationItems[(updateLocationIdx as IndexObject).idx] ? allLocationItems[(updateLocationIdx as IndexObject).idx].session : 1}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                    </Select> 
                                </div>
                                <>{console.log('update idx: %d', (updateLocationIdx as IndexObject).idx)}</>
                        </FormContainer>
                        
                        <h1>Delete Location</h1>
                        <FormContainer
                            formName="deleteLocationItem"
                            submitText="Delete"
                            onSubmit={()=>(setAllLocationItems([...(allLocationItems.slice(0,(deleteLocationIdx as IndexObject).idx).concat(allLocationItems.slice((deleteLocationIdx as IndexObject).idx+1)))]))}
                            isLoading={false}
                            errorMessage={undefined}>
                                <Select label="" id="idx" setState={setDeleteLocationIdx} defaultValue={0} required={false}>
                                    {allLocationItems.map((locationItem, index)=>(<option key={index} value={index}>{locationItem.building + " " + locationItem.room + " - Session " + locationItem.session}</option>))}
                                </Select>
                                <>{console.log('delete idx: %d', (deleteLocationIdx as IndexObject).idx)}</>
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