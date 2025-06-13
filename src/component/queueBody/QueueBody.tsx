import TopAlert from "@/component/queueBody/topAlert/TopAlert";
import Queue from "@/component/queueBody/queue/Queue";
import {QueueBodySection} from "@/component/queueBody/queueBody.style";

interface QueueBodyProp {
    isAdmin?: boolean
}

export default ({isAdmin}: QueueBodyProp) => {
    return (
        <QueueBodySection>
            <TopAlert isAdmin={isAdmin}/>
            <Queue isAdmin={isAdmin}/>
        </QueueBodySection>
    );
}