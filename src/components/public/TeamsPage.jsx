import HeaderDisplay from "../common/Header/HeaderDisplay"
import WebsiteTitleSection from "./Title/TitleSection"

const TeamPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay />
            <main className="App-main main-container App">
                <WebsiteTitleSection />
            </main>
        </>
    )
}