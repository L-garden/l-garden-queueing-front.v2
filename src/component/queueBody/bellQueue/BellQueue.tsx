import BellInfo from "@/component/queueBody/bellQueue/bellInfo/BellInfo";
import {BellListSection} from "@/component/queueBody/bellQueue/bellQueue.style";
import {BellData} from "@/component/queueBody/types/Bell";

interface QueueListProp {
    isAdmin?: boolean;
    bellList?: BellData[];
    myBellNo?: number;
}

export default ({isAdmin, bellList, myBellNo}: QueueListProp) => {
    return (
        <BellListSection>
            {
                bellList?.map((bellData, index) =>
                    <BellInfo
                        isAdmin={isAdmin}
                        key={index}
                        bellData={bellData}
                        isMine={bellData.bellNum === myBellNo}
                    />
                )
            }
        </BellListSection>
    )
}