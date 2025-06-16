import Header from "@/component/header/Header";
import QueueBody from "@/component/queueBody/QueueBody";

export default () => {
    return (
        <>
            <Header isAdmin={true}/>
            <QueueBody isAdmin={true}/>
        </>
    )
}