export default function Balance(){
    return (
        <>
        
        <div className="balance-container" id="show">
            <div className="balance-info">
                <div className="earnings">
                    <p>Referral Earning</p>
                    <h3>₹ 2,500</h3>
                </div>
                <div className="referrals">
                    <p>Total Referrals</p>
                    <h3>7</h3>
                </div>
                <div className="balance">
                    <p>Wallet Balance</p>
                    <h3>₹ 500</h3>
                </div>
            </div>
            
            <button id="withdraw">Withdraw Balance</button>
        </div>

        <div className="balance-container" id="hide">
                <div className="earnings">
                    <p>Referral Earning</p>
                    <h3>₹ 2,500</h3>
                </div>
                <div className="referrals">
                    <p>Total Referrals</p>
                    <h3>7</h3>
                </div>
                <div className="balance">
                    <p>Wallet Balance</p>
                    <h3>₹ 500</h3>
                </div>

                <button id="withdraw">Withdraw Balance</button>
        </div>
        </>
    )
}