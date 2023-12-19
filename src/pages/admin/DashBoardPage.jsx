import HeaderDisplay from "../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../components/admin/Footer/FooterDisplayAdmin";

const DashBoardPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main">
                <div className="container title-section">
                    <h2 className="App-title">Dashboard</h2>
                </div>   

            </main>
            <FooterDisplay />
        </>
    );
};

export default DashBoardPage;