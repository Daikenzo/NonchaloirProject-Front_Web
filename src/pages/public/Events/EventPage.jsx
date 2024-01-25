import HeaderDisplay from "../../../components/common/Header/HeaderDisplay";
import CitationSection from "../../../components/public/Citation/CitationSection";
import LastEventCards from "../../../components/public/Events/LastEvent/LastEventCards";
import FooterDisplay from "../../../components/public/Footer/FooterDisplay";
import WebsiteTitleSection from "../../../components/public/Title/TitleSection";

const EventPage = ({eventlist}) => {

    return (
        <>
            <HeaderDisplay />
            <main className="App App-main main-container">
                <WebsiteTitleSection />
                <LastEventCards /> 
            </main>
            <FooterDisplay/>
        </>
    );
};

export default EventPage;
