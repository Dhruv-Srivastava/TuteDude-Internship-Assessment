import { useState } from "react";
import data from "../data";
import Friends from "./Friends";
import { Link } from "react-router-dom";

export default function ReferedMain(){
    
    const [friendsData,setFriendsData]=useState(data);
    return (
        <main id="referred">
            <p id="current-page">
                {`UI/UX > `}
                <Link to="/">
                    {`Refer & Earn > `}
                </Link>
                {`Friends Referred `}
            </p>

            <Link to="/" id="go-back">
                <img src="../src/assets/back-arrow.svg" alt="" />
                <span>go back</span>
            </Link>
            <div className="stats">
                <div className="referral-container">
                    <h2>Your Referral Code </h2>
                    <h4>EDCH54</h4>
                </div>
                <div className="wallet-container">
                    <div className="wallet">
                        <p>Wallet Balance</p>
                        <p>₹ 500</p>
                    </div>
                </div>
            </div>
            <Friends friendsData={friendsData}/>
            <h3 id="t-c">Terms & Conditions</h3>
        </main>
    )
}