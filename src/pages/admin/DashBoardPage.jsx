import HeaderDisplay from "../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../components/admin/Footer/FooterDisplayAdmin";

const DashBoardPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main">
                test                

            </main>
            <FooterDisplay />
        </>
    );
};

export default DashBoardPage;