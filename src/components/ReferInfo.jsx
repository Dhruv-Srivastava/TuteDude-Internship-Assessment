const info=[
    {
        logo:"invite-people.svg",
        title:"Invite your Friends",
        desc:"Share the link tutedude.com with your friends"
    },

    {
        logo:"referral.svg",
        title:"Friend purchases any course",
        desc:"Using your REFERRAL CODE in the payments page"
    },

    {
        logo:"rupee.svg",
        title:"You get ₹ 200 as referral money",
        desc:"On total purchase the friend makes, into your wallet"
    },

    {
        logo:"discount.svg",
        title:"Your Friend gets ₹ 200 Off ",
        desc:"On his overall fee on successful purchase using your referral code "
    },

    {
        logo:"wallet.svg",
        title:"Transfer money from wallet",
        desc:"When the wallet balance reaches ₹200 or more, you can withdraw it"
    }
]



export default function ReferInfo(){

    const infoElements=info.map((information,i)=>{
        return(
            <div className="information" key={i}>
                <div className="info-logo">
                    <img src={`../src/assets/${information.logo}`} alt="" />
                </div>
                <div className="info-description">
                    <p className="info-title">{information.title}</p>
                    <p className="info-desc">{information.desc}</p>
                </div>
            </div>
        )
    })

    return(
        <div className="refer-info-container">
            <h2>How does it work ?</h2>
            <div className="info-container">
                {infoElements}
            </div>
        </div>
    )
}