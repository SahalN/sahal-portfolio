"use client";
import { useState } from "react";
import {LinkIcon} from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setClicked(true);
        setTimeout(()=>setClicked(false), 1500)
        console.log("Clicked");
    };
    console.log("[ShareLinkButton] Rendering");
    return <button onClick={handleClick} className="flex items-center px-2 py-1 text-sm border rounded hover:bg-orange-100 text-slate-500 hover:text-slate-700" >
    <LinkIcon className="w-4 h-4 "/>
    {clicked? "Link Copied" : "Share Link"}</button>
  }