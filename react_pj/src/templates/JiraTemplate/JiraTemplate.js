import MenuJira from "../../components/JiraComponents/MenuJira";
import SidebarJira from "../../components/JiraComponents/SidebarJira";
import ModalJira from "../../components/JiraComponents/ModalJira/ModalJira";

function JiraTemplate({Component}) {
    
    return ( 
        <div className="jira">
            <MenuJira/>
            <SidebarJira/>
            <Component/>
            <ModalJira/>
        </div>
     );
}

export default JiraTemplate;