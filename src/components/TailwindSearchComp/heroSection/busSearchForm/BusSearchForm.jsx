import React, { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BusLocationInput from "./BusLocationInput";
import BusDateBox from "./BusDateBox";


const BusSearchForm = () => {

    const [fromCity, setFromCity] = useState(null);
    const [toCity, setToCity] = useState(null);
    const [departDate, setDepartDate] = useState(null);


    const navigate = useNavigate()


    const handleFromSelect = (location) => {
        setFromCity(location);
    };
    const handleToSelect = (location) => {
        setToCity(location);
    };


    const handleDateChange = (dates) => {
        setDepartDate(dates.startDate);
    };

    const handleSubmit = async () => {


        const payload = {
            // EndUserIp: reducerState?.ip?.ipData,
            // TokenId: reducerState?.ip?.tokenData,
            DateOfJourney: dayjs(departDate).format("YYYY/MM/DD"),
            DestinationId: fromCity.CityId,
            OriginId: toCity.CityId,
        };

        console.log(payload, "clicked")
        // sessionStorage.setItem(
        //     "busOnewayData",
        //     JSON.stringify([
        //         {
        //             CityId: selectedFrom.CityId,
        //             CityName: selectedFrom.CityName,
        //             __v: selectedFrom.__v,
        //             _id: selectedFrom._id,
        //         },
        //         {
        //             CityId: selectedTo.CityId,
        //             CityName: selectedTo.CityName,
        //             __v: selectedTo.__v,
        //             _id: selectedTo._id,
        //         },
        //         newDepartDate,
        //     ])
        // );

        // navigate("/busresult");
        // dispatch(busSearchAction(payload));

    };


    const renderForm = () => {
        return (
            <form className="w-full relative mt-8 flex rounded-full shadow-xl  bg-white ">
                <BusLocationInput className="flex-1" desc="Departure City" onLocationSelect={handleFromSelect} />
                <div className="self-center border-r border-slate-200 h-8"></div>
                <BusLocationInput className="flex-1" desc="Arrival City" onLocationSelect={handleToSelect} />
                <div className="self-center border-r border-slate-200 h-8"></div>
                <BusDateBox className="flex-1" onSubmit={handleSubmit} onDateChange={handleDateChange} />

            </form>
        );
    };

    return renderForm();
};

export default BusSearchForm;
