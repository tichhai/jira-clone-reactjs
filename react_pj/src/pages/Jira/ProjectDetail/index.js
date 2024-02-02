import ContentMain from "../../../components/JiraComponents/Main/ContentMain";
import HeaderMain from "../../../components/JiraComponents/Main/HeaderMain";
import InfoMain from "../../../components/JiraComponents/Main/InfoMain";

function Index() {
    return ( 
    <>
        <div className="main">
                <h3>Cyber Board</h3>
                <HeaderMain/>
                <InfoMain/>
                <ContentMain/>
            </div>
    </> 
    );
}

export default Index;