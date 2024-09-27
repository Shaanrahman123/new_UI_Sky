import React from "react";
import SearchFormForMobile from "../components/TailwindSearchComp/mainNav/SearchFormForMobile";
import AvatarDropdown from "../components/TailwindSearchComp/mainNav/AvatarDropdown";


const MainNav = ({ className = "" }) => {
    return (

        <div className="nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg shadow-sm">
            <div className={`MainNav2 relative z-10 ${className}`}>
                <div className="px-4 h-20 lg:container flex justify-between">
                    <div className="hidden md:flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
                        {/* <Logo className="w-24 self-center" /> */}
                        <img src="https://theskytrails.com/static/media/logoSky.63ff4d7e95a8ed4a90ba8f28c3b8958a.svg" className="w-20 lg:w-52 md:w-44" alt="" />
                    </div>

                    <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
                        <SearchFormForMobile />
                    </div>

                    <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 ">
                        <div className="hidden lg:flex space-x-1">
                            <AvatarDropdown />
                        </div>
                        <div className="flex space-x-2 lg:hidden">
                            <AvatarDropdown />
                            {/* <MenuBar /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;
