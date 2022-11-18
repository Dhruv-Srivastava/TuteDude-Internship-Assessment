export default function FriendCard({friend}){
    const {courses}=friend;
    const courseElements=courses.map((course,i)=>{
        return (
            <p className="course-name" key={i}>{course}</p>
        )
    })
    return (
        <div className="friend-card">
            <div className="title-date">
                <h3>{friend.name}</h3>
                <p>{friend.date}</p>
            </div>
            <h3 id="courses-enrolled">{`Courses Enrolled(${friend.numCourses})`}</h3>
            <div className="courses">
                {courseElements}
            </div>
            <div className="referral-amount">
            <p>Referral Amount</p>
            <p>{`₹${friend.amount}`}</p>
            </div>

        </div>
    )
}