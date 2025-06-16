import Title from "@/component/header/title/Title";
import {HeaderSection} from "@/component/header/header.style";
import AdminButton from "@/component/header/adminButton/AdminButton";

interface HeaderProps {
    isAdmin?: boolean;
}

export default ({isAdmin}: HeaderProps) => {
    return (
        <HeaderSection>
            <Title/>
            <AdminButton isAdmin={isAdmin}/>
        </HeaderSection>
    )
}
