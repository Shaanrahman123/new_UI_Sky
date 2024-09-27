import React, { useState, Fragment } from "react";

import FlightLocationFrom from "../FlightLocationFrom";
import FlightLocationTo from "../FlightLocationTo";
import ReturnDateBox from "./ReturnDateBox";




const ReturnSearchForm = () => {


    const renderForm = () => {
        return (
            <form className="w-full relative rounded-[40px] xl:rounded-[49px] rounded-t-2xl xl:rounded-t-3xl shadow-xl  bg-white ">

                <div className="flex flex-1 rounded-full">
                    <FlightLocationFrom
                        placeHolder="Flying from"
                        desc="Where do you want to fly from?"
                        className="flex-1"
                    />
                    <div className="self-center border-r border-slate-200  h-8"></div>
                    <FlightLocationTo
                        placeHolder="Flying to"
                        desc="Where you want to fly to?"
                        className="flex-1"
                        divHideVerticalLineClass=" -inset-x-0.5"
                    />
                    <div className="self-center border-r border-slate-200  h-8"></div>
                    <ReturnDateBox
                        // selectsRange={dropOffLocationType !== "oneWay"}
                        className="flex-1"
                    />
                </div>
            </form>
        );
    };

    return renderForm();
};

export default ReturnSearchForm;
