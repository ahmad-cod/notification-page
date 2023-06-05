
const Notification = ({ notification: {action, time, relatedTo}, user: {name, avatar} }) => {
    return (
        <div className="notification">
            <div className="user_avatar">
                <img src={avatar} alt="user avatar" />
            </div>
            <div className="notification__content">
                <div className="notification__title">
                    <span className="name">{name} </span>
                    {action} 
                    <span className="relatedTo">{relatedTo}</span>
                </div>
                <div className="time">{time}</div>
            </div>
        </div>
    )
}

const Notifications = ({ notifications }) => {
    return (
        <section className="notifications">
            {notifications.map(notification => (
                <Notification key={notification.id} notification={notification} user={notification.user} />
            ))}
        </section>
    )
}

export default Notifications