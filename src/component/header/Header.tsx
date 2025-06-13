import Title from "@/component/header/title/Title";
import {HeaderSection} from "@/component/header/header.style";
import AdminButton from "@/component/header/adminButton/AdminButton";

interface HeaderProps {
    userName?: string;
    isAdmin?: boolean;
}

export default ({userName, isAdmin}: HeaderProps) => {
    return (
        <HeaderSection>
            <Title userName={userName}/>
            <AdminButton isAdmin={isAdmin}/>
        </HeaderSection>
    )
}
