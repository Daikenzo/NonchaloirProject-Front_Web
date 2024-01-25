import React from "react";
import {GetUserInfo, UserDefault, users} from '../../debug/sampleBd/users'
import { Link, useParams } from "react-router-dom";

import HeaderDisplay from "../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../components/public/Footer/FooterDisplay";
import WebsiteTitleSection from "../../components/public/Title/TitleSection";
import LastEventCards from "../../components/public/Events/LastEvent/LastEventCards";
import CitationSection from "../../components/public/Citation/CitationSection";

const HomePage = () => {

    const userInfo = GetUserInfo(UserDefault)

//    console.log(userInfo)

    return (

        <>
            <HeaderDisplay />
            <main className="App App-main main-container">
                <WebsiteTitleSection />
                <LastEventCards />  

                <CitationSection />

                <section className="p-3 w-75 container discover">
                    <h2 className="card-title discover text-uppercase text-underline">Découvrez la nonchalance de l'artiste comédien</h2>
                    <div className="m-2 discover discover-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <Link to="/teams" className="m-2 discover btn btn-dark btn-discord">En savoir plus</Link>
                </section>
                <section className="p-3 w-75 container discover">
                    <h2 className="discover text-styleèunderline ">Devenez Adhérents !</h2>
                    <div className="discover discover-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <Link to="/adherent" className="m-2 discover btn btn-dark btn-discord">En savoir plus</Link>
                </section>
                <div className="pre-footer"></div>
            </main>
            <FooterDisplay />
        </>
    )
}

export default HomePage;