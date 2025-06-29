import BellInfo from "@/component/queueBody/bellQueue/bellInfo/BellInfo";
import {BellListHeadHr, BellListSection} from "@/component/queueBody/bellQueue/bellQueue.style";
import {BellData} from "@/component/queueBody/types/Bell";

interface QueueListProp {
    isAdmin?: boolean;
    bellList?: BellData[];
    myBellNo?: number;
    onMenu: boolean;
}

export default ({isAdmin, bellList, myBellNo, onMenu}: QueueListProp) => {
    return (
        <BellListSection>
            <BellListHeadHr/>
            {
                bellList?.map((bellData, index) =>
                    <BellInfo
                        isAdmin={isAdmin}
                        key={index}
                        bellData={bellData}
                        isMine={bellData.bellNum === myBellNo}
                        onMenu={onMenu}
                    />
                )
            }
        </BellListSection>
    )
}