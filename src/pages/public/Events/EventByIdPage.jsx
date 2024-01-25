import HeaderDisplay from "../../../components/common/Header/HeaderDisplay";
import WebsiteTitleSection from "../../../components/public/Title/TitleSection";

const EventByIdPage = ({eventlist}) => {

    return (
        <>
            <HeaderDisplay />
            <main className="App App-main main-container">
                <WebsiteTitleSection />
            </main>
        </>
    );
};

export default EventByIdPage;
