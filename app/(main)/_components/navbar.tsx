"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HomeIcon,
  ExploreIcon,
  WatchlistsIcon,
  ClubsIcon,
  ExpandIcon,
  ExpandIconBold,
  AddIcon,
} from "../../icons";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const currentPage = usePathname();

  const [isWatchlistsExpanded, setIsWatchlistsExpanded] = useState(true);
  const [isClubsExpanded, setIsClubsExpanded] = useState(true);

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const isNavbarListExpanded = [
    { value: isWatchlistsExpanded, setValue: setIsWatchlistsExpanded },
    { value: isClubsExpanded, setValue: setIsClubsExpanded },
  ];

  const hide = isNavbarExpanded ? "" : "!hidden";

  const navbarIconWrapperStyle = `cursor-pointer flex items-center justify-center group ${
    isNavbarExpanded
      ? "gap-4 flex-row h-[35px] px-[14px]"
      : "gap-1 flex-col h-[45px]"
  }`;

  const navPageIcons = [
    {
      icon: <HomeIcon className="navbarIcon" />,
      label: "Home",
      linkTo: "/home",
    },
    {
      icon: <ExploreIcon className="navbarIcon" />,
      label: "Explore",
      linkTo: "/explore",
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
    pictureUrl:
      "https://img.uefa.com/imgml/TP/players/3/2024/324x324/63706.jpg",
    name: "Cristiano Ronaldo",
    handle: "arab_ronaldo",
    isVerified: true,
  };

  const expandNav = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <div
      onClick={expandNav}
      className={`pb-4 flex flex-col gap-8 ${
        isNavbarListExpanded ? "px-6" : "px-2"
      }`}
    >
      <div className="grid items-center h-header-height mb-[-1.5rem]">
        <div
          className={`flex align-center justify-center gap-2 rounded-full py-1 ${
            isNavbarExpanded ? "pl-1 pr-6" : ""
          }`}
        >
          <div className="h-picture-md w-picture-md cursor-pointer rounded-full">
            <img
              src={currentUser.pictureUrl}
              alt="Your profile picture"
              className="rounded-full"
            />
          </div>
          <div className={`mt-0.5 ${hide}`}>
            <div className="text-white text-sm font-bold">
              {currentUser.name}
            </div>
            <div className="text-subtext text-xs font-medium">
              @{currentUser.handle}
            </div>
          </div>
        </div>
      </div>
      <hr className="navbarHr" />
      <div
        className={`flex flex-col gap-8 ${
          isNavbarExpanded ? "items-start" : "items-center"
        }`}
      >
        {navPageIcons.map((page, i) => {
          return (
            <Link href={page.linkTo} className={navbarIconWrapperStyle}>
              <div
                className={`[&_svg]:w-[20px] ${
                  currentPage === page.linkTo
                    ? "[&_svg]:fill-white"
                    : "[&_svg]:fill-foreground-ter"
                } group-hover:[&_svg]:fill-white`}
              >
                {page.icon}
              </div>
              <div
                className={`group-hover:text-white ${
                  isNavbarExpanded
                    ? "text-lg font-semibold"
                    : "text-xs font-medium"
                } ${
                  currentPage === page.linkTo
                    ? "text-white"
                    : "text-foreground-ter"
                }`}
              >
                {page.label}
              </div>
            </Link>
          );
        })}
        <hr className="navbarHr" />
        {navListIcons.map((list, i) => {
          return (
            <div className={navbarIconWrapperStyle}>
              <div className="[&_svg]:w-[20px] [&_svg]:fill-foreground-ter group-hover:[&_svg]:fill-white">
                {list.icon}
              </div>
              <div
                className={`text-foreground-ter ${
                  isNavbarExpanded
                    ? "text-lg font-semibold"
                    : "text-xs font-medium"
                } group-hover:text-white`}
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
