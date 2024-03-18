"use client";

import {
  HomeIcon,
  ExploreIcon,
  WatchlistsIcon,
  ClubsIcon,
  ExpandIcon,
  ExpandIconBold,
  AddIcon,
} from "../../icons";

import React, { useState } from "react";

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState(0);

  const [isWatchlistsExpanded, setIsWatchlistsExpanded] = useState(true);
  const [isClubsExpanded, setIsClubsExpanded] = useState(true);

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const isNavbarListExpanded = [
    { value: isWatchlistsExpanded, setValue: setIsWatchlistsExpanded },
    { value: isClubsExpanded, setValue: setIsClubsExpanded },
  ];

  const hide = isNavbarExpanded ? "" : "!hidden";

  const navbarIconWrapperStyle = `flex items-center justify-center ${
    isNavbarExpanded ? "gap-3 flex-row" : "gap-1 flex-col"
  }`;

  const navPageIcons = [
    {
      icon: <HomeIcon className="navbarIcon" />,
      label: "Feed",
      linkTo: "/",
    },
    {
      icon: <ExploreIcon className="navbarIcon" />,
      label: "Search",
      linkTo: "/search",
    },
  ];

  const navListIcons = [
    {
      icon: <WatchlistsIcon className="navbarIcon" />,
      label: "Watchlists",
    },
    {
      icon: <ClubsIcon className="navbarIcon" />,
      label: "Clubs",
    },
  ];

  const watchlists = [
    {
      previewImg:
        "https://www.anja-strelec.com/wp-content/uploads/2023/01/IMG_0283-1-1-600x600.jpg",
      name: "Watch Later 1",
    },
    {
      previewImg:
        "https://www.anja-strelec.com/wp-content/uploads/2023/01/IMG_0283-1-1-600x600.jpg",
      name: "Watch Later 2",
    },
    {
      previewImg:
        "https://www.anja-strelec.com/wp-content/uploads/2023/01/IMG_0283-1-1-600x600.jpg",
      name: "Watch Later 3",
    },
    {
      previewImg:
        "https://www.anja-strelec.com/wp-content/uploads/2023/01/IMG_0283-1-1-600x600.jpg",
      name: "Watch Later 4",
    },
  ];

  const currentUser = {
    pic: "https://img.freepik.com/free-photo/portrait-young-woman-with-natural-make-up_23-2149084942.jpg",
    name: "Emma Hayashi",
    handle: "nocap_emma",
    isVerified: true,
  };

  const expandNav = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div
      onClick={expandNav}
      className={`flex flex-col ${isNavbarListExpanded ? "px-6" : "px-2"}`}
    >
      <div
        className={`flex flex-col gap-8 ${
          isNavbarExpanded ? "items-start" : "items-center"
        }`}
      >
        {navPageIcons.map((page, i) => {
          return (
            <div className={navbarIconWrapperStyle}>
              <div
                className={`[&_svg]:w-[20px] ${
                  currentPage === i
                    ? "[&_svg]:fill-accent"
                    : "[&_svg]:fill-foreground-ter"
                } `}
              >
                {page.icon}
              </div>
              <div
                className={`${
                  isNavbarExpanded
                    ? "text-lg font-semibold"
                    : "text-xs font-medium"
                } ${currentPage === i ? "text-accent" : "text-foreground-ter"}`}
              >
                {page.label}
              </div>
            </div>
          );
        })}
        <hr className="navbarHr" />
        {navListIcons.map((list, i) => {
          return (
            <div className={navbarIconWrapperStyle}>
              <div className={"[&_svg]:w-[20px] [&_svg]:fill-foreground-ter"}>
                {list.icon}
              </div>
              <div
                className={`text-foreground-ter ${
                  isNavbarExpanded
                    ? "text-lg font-semibold"
                    : "text-xs font-medium"
                }`}
              >
                {list.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
