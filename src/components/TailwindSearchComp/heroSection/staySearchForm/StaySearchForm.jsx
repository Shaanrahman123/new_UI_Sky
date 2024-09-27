import React, { useState } from "react";
import LocationInput from "./LocationInput";
import StayDatesRangeInput from "./StayDateRangeInput";
import GuestsInput from "./GuestsInput";
import dayjs from "dayjs";
import axios from "axios";


const StaySearchForm = () => {

    const [rooms, setRooms] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [checkinDate, setCheckinDate] = useState(null);
    const [checkoutDate, setCheckoutDate] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle room data updates
    const handleRoomDataChange = (roomsData) => {
        setRooms(roomsData);
    };


    const handleLocationSelect = (location) => {
        setSelectedFrom(location);
        console.log("Selected Location:", location);
    };


    // Function to handle date changes (from StayDatesRangeInput)
    const handleDateChange = (dates) => {
        setCheckinDate(dates.startDate);
        setCheckoutDate(dates.endDate);
    };
    // Function to handle form submission
    const handleSubmit = async () => {
        setIsLoading(true);

        const payload = selectedFrom?.hotelName
            ? {

                rooms: rooms,
                rates: "concise",
                hotel_codes: [`${selectedFrom.hotelCode}`],
                currency: "INR",
                client_nationality: "IN",
                checkin: dayjs(checkinDate).format("YYYY-MM-DD"),
                checkout: dayjs(checkoutDate).format("YYYY-MM-DD"),
                cutoff_time: 30000,
                version: "2.0",
            }
            : {
                "rooms": rooms,
                "rates": "concise",
                "cityCode": selectedFrom?.grnCityCode,
                "currency": "INR",
                "client_nationality": "IN",
                "checkin": dayjs(checkinDate).format("YYYY-MM-DD"),
                "checkout": dayjs(checkoutDate).format("YYYY-MM-DD"),
                "cutoff_time": 30000,
                "version": "2.0",
                "tboCityCode": selectedFrom?.grnCityCode,
                "TokenId": "4eea0ad9-3b03-4e8a-baca-eb6614de52a5",
                "EndUserIp": "223.178.210.87"

            };

        try {
            const response = await axios.post(
                "https://back.theskytrails.com/skyTrails/tboandgrn/searchresults",
                payload
            );
            console.log("API Response:", response.data);
        } catch (error) {
            console.error("API Error:", error);
        } finally {
            setIsLoading(false);
        }
    };


    const renderForm = () => {
        return (
            <form className="w-full relative mt-8 flex rounded-full shadow-xl  bg-white ">
                <LocationInput className="flex-[1.5]" onLocationSelect={handleLocationSelect} />
                <div className="self-center border-r border-slate-200 h-8"></div>
                <StayDatesRangeInput className="flex-1" onDateChange={handleDateChange} />
                <div className="self-center border-r border-slate-200  h-8"></div>
                <GuestsInput className="flex-1" onSubmit={handleSubmit} onRoomDataChange={handleRoomDataChange} />
            </form>
        );
    };

    return renderForm();
};

export default StaySearchForm;
