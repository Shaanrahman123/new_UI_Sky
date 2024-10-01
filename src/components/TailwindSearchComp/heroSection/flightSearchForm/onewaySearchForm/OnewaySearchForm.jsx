import React, { useState, Fragment } from "react";
import FlightDateBox from "./FlightDateBox";
import FlightLocationFrom from "../FlightLocationFrom";
import FlightLocationTo from "../FlightLocationTo";
import { useNavigate } from "react-router-dom";




const OnewaySearchForm = () => {


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
        console.log(fromCity, "from city")
        console.log(toCity, "to city")
        console.log(departDate, "to city")
    }



    const renderForm = () => {
        return (
            <form className="w-full relative rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl  bg-white ">

                <div className="flex flex-1 rounded-full">
                    <FlightLocationFrom
                        placeHolder="Flying from"
                        desc="Where do you want to fly from?"
                        className="flex-1"
                        onLocationSelect={handleFromSelect}
                    />
                    <div className="self-center border-r border-slate-200  h-8"></div>
                    <FlightLocationTo
                        placeHolder="Flying to"
                        desc="Where you want to fly to?"
                        className="flex-1"
                        divHideVerticalLineClass=" -inset-x-0.5"
                        onLocationSelect={handleToSelect}
                    />
                    <div className="self-center border-r border-slate-200  h-8"></div>
                    <FlightDateBox
                        // selectsRange={dropOffLocationType !== "oneWay"}
                        className="flex-1"
                        onSubmit={handleSubmit} onDateChange={handleDateChange} 
                    />
                </div>
            </form>
        );
    };

    return renderForm();
};

export default OnewaySearchForm;
