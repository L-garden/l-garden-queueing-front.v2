import Title from "@/component/header/title/Title";
import {HeaderSection} from "@/component/header/header.style";
import AdminButton from "@/component/header/adminButton/AdminButton";

interface HeaderProps {
    userName?: string
}

export default ({userName}: HeaderProps) => {
    return (
        <HeaderSection>
            <Title userName={userName}/>
            <AdminButton/>
        </HeaderSection>
    )
}
