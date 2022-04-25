import style from './Notification.module.css'

const Notification = (props) =>{

    let classList = style['bg-pending']
    const notifiCondition = props.status

    if(notifiCondition === "success"){
        classList = style['bg-success']
    }
    if(notifiCondition === "failed"){
        classList = style['bg-failed']
    }

    return (
        <div className={`${style["notif-container"]} ${classList}`}>
            <span>{props.title}</span>
            <span>{props.message}</span>
        </div>
    )
}

export default Notification