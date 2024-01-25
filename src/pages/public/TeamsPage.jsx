import { Link } from "react-router-dom";
import HeaderDisplay from "../../components/common/Header/HeaderDisplay"
import CitationSection from "../../components/public/Citation/CitationSection";
import WebsiteTitleSection from "../../components/public/Title/TitleSection"

const TeamPage = () => {
    // Display
    return (
        <>
            <HeaderDisplay />
            <main className="App-main main-container team-section">
                <WebsiteTitleSection />

                <CitationSection />

                <section className="p-3 w-75 container teams">
                    <h2 className="card-title teams text-uppercase text-underline">Découvrez la nonchalance de l'artiste comédien</h2>
                    <div className="m-2 teams teams-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <Link to="/teams" className="m-2 teams btn btn-dark btn-discord">En savoir plus</Link>
                </section>
            </main>
        </>
    );
};

export default TeamPage;