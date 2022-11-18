import FriendCard from "./FriendCard";
import {motion} from "framer-motion"
import { useState, useRef } from "react";
import { useEffect } from "react";
export default function Friends({friendsData}){

    const [width,setWidth]=useState(0);
    const slider= useRef();

    useEffect(()=>{
        setWidth(slider.current.scrollWidth-slider.current.offsetWidth);
        
    },[])
    const friendCards=friendsData.map((friend,i)=>{
        return (
            <FriendCard friend={friend} key={i} />
        )
    })
    return(
        <section id="friends">
            <h2>
                {`Friends who enrolled`}
                <span>{`(${friendsData.length})`}</span>
            </h2>
            <motion.div ref={slider} className="card-slider">
                <motion.div 
                    drag="x" 
                    dragConstraints={{right:0,left:-width}}
                    whileTap={{cursor:"grabbing"}}
                    className="friends-card-container">
                        {friendCards}
                </motion.div>
            </motion.div>
        </section>
    )
}