import HeaderDisplay from "../../components/common/Header/HeaderDisplay"
import WebsiteTitleSection from "../../components/public/Title/TitleSection"

const TeamPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay />
            <main className="App-main main-container App">
                <WebsiteTitleSection />
            </main>
        </>
    );
};

export default TeamPage;