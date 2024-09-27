import React from "react";
// import Badge from "./Badge"; 
// import convertNumbThousand from "./convertNumbThousand"; 

const FlightSuggestCard = ({ className = "", data }) => {
    // console.log(data, "data")

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const reducerState = useSelector((state) => state);

    // const [selectedFrom, setSelectedFrom] = useState([]);
    // const [selectedTo, setSelectedTo] = useState([]);
    // const [flightclassName, setflightClassName] = useState("Y");

    // function getNextDayDateIfAfter9PM() {
    //     const currentDate = new Date();
    //     if (currentDate.getHours() >= 21) {
    //         currentDate.setDate(currentDate.getDate() + 1);
    //     }
    //     return currentDate;
    // }

    // const todaydate = getNextDayDateIfAfter9PM();



    // function handleOnewaySubmit(event) {

    //     sessionStorage.setItem("SessionExpireTime", new Date());

    //     const payload = {
    //         EndUserIp: reducerState?.ip?.ipData,
    //         TokenId: reducerState?.ip?.tokenData,
    //         AdultCount: 1,
    //         ChildCount: 0,
    //         InfantCount: 0,
    //         DirectFlight: "false",
    //         OneStopFlight: "false",
    //         JourneyType: 1,
    //         PreferredAirlines: null,
    //         Segments: [
    //             {
    //                 Origin: event.fromDetails.AirportCode,
    //                 Destination: event.to.AirportCode,
    //                 FlightCabinClass: 2,
    //                 PreferredDepartureTime: dayjs(todaydate).format("DD MMM, YY"),
    //                 PreferredArrivalTime: dayjs(todaydate).format("DD MMM, YY"),
    //             },
    //         ],
    //         Sources: null,
    //         from: event.fromDetails.AirportCode,
    //         to: event.to.AirportCode,
    //         date: dayjs(todaydate).format("DD MMM, YY"),
    //         cabinClass: "Y",
    //         px: 1,
    //     };
    //     setSelectedFrom(event?.fromDetails)
    //     setSelectedTo(event?.to)

    //     sessionStorage.setItem(
    //         "onewayprop",
    //         JSON.stringify([
    //             {
    //                 Origin: event.fromDetails.AirportCode,
    //                 Destination: event.to.AirportCode,
    //                 FlightCabinClass: 2,
    //                 PreferredDepartureTime: dayjs(todaydate).format("DD MMM, YY"),
    //                 PreferredArrivalTime: dayjs(todaydate).format("DD MMM, YY"),
    //                 selectedFrom: event.fromDetails,
    //                 selectedTo: event.to,
    //                 totalCount: 1,
    //                 todaydate: dayjs(todaydate).format("DD MMM, YY"),
    //                 activeIdAdult: 1,
    //                 activeIdChild: 0,
    //                 activeIdInfant: 0,
    //                 flightclassName
    //             },
    //         ])
    //     );
    //     const parsedDate = new Date(todaydate);

    //     const formattedDate = parsedDate.toISOString();

    //     dispatch(oneWayAction(payload));

    //     dispatch(searchFlightListReq());
    //     dispatch(searchaAirportListReq());

    //     const searchpy = {
    //         from: event.fromDetails,
    //         to: event.to,
    //         departureDate: formattedDate,
    //     };

    //     console.log(searchpy, "search pyyyyyy")
    //     dispatch(searchFlight(searchpy));
    //     navigate(
    //         `/Searchresult?adult=${1}&child=${0}&infant=${0}`
    //     );
    //     // }
    // }


    return (
        <div
            onClick={() => handleOnewaySubmit(data)}
            className={`nc-CardCategoryBox1 relative flex items-center p-2 sm:p-2 py-6 sm:py-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${className}`}
        >
            {/* <Badge
                className="absolute right-2 top-2"
                color="gray"
                name={convertNumbThousand(count)}
            /> */}

            <div className="relative flex-shrink-0 w-24 h-24 rounded-full overflow-hidden">
                <img
                    src={data?.imgages}
                    alt=""
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="ml-4 flex-grow overflow-hidden">
                <h2 className="text-base font-medium">
                    <span className="line-clamp-1">{data?.from} - {data.destination}</span>
                </h2>
                <span className="block mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    19 minutes drive
                </span>
            </div>
        </div>
    );
};

export default FlightSuggestCard;



