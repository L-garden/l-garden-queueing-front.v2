import Header from "@/component/header/Header";
import QueueBody from "@/component/queueBody/QueueBody";

export default () => {
    return (
        <>
            <Header userName={"주방장"} isAdmin={true}/>
            <QueueBody isAdmin={true}/>
        </>
    )
}