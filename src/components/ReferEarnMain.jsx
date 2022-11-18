import Balance from "./Balance";
import Footer from "./Footer";
import ReferInfo from "./ReferInfo";
import Referral from "./Referral";

export default function Main(){
    return (
        <main id="refer-earn">
            <p id="current-page">{`UI/UX > Refer & Earn `}</p>
            <section id="dashboard">
                <Balance />
                <Referral />
            </section>
            <section id="refer-info">
                <ReferInfo />
            </section>
            <Footer />
        </main>
    )
}