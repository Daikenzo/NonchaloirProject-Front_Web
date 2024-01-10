import React from "react";
import {GetUserInfo, UserDefault, users} from '../../debug/sampleBd/users'
import { Link, useParams } from "react-router-dom";

import HeaderDisplay from "../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../components/public/Footer/FooterDisplay";
import WebsiteTitleSection from "../../components/public/Title/TitleSection";

const HomePage = () => {

    const userInfo = GetUserInfo(UserDefault)

//    console.log(userInfo)

    return (

        <>
            <HeaderDisplay />
            <main className="App App-main main-container">
                <WebsiteTitleSection />
                <section className=" p-3 w-75 container spectacles-section">
                    <h2 className="title-section">Spectacles en cours</h2>
                    <div className="d-flex justify-content-center card card-group p-2 bg-dark text-white spectacles">
                        <div className=" btn p-5 btn-light rounded-circle m-auto"></div>
                        <div className="rounded-2 card m-3">
                            <h3 className=" card-header">Spectacles en cours</h3>
                            <div className="card-body">d</div>
                        </div>
                        <div className="rounded-2 card m-3">d</div>
                        <div className="rounded-2 card m-3">d</div>
                        <div className=" btn p-5 btn-light rounded-circle m-auto"></div>
                    </div>
                </section>

                <section className="p-3 container w-50 container citation-box">
                    <div className="citation fst-italic">
                        <p className="citation-text">Elle aimes aussi la paix, les champs. l'air froid du soir</p>
                        <p className="citation-text">Un penser calme et fort, mêlé de Nonchaloir"</p>
                    </div>
                    <div className="m-2 citation-author Bold">Sainte-Beuve</div>
                </section>

                <section className="p-3 w-75 container discover">
                    <h2 className="card-title discover text-uppercase text-underline">Découvrez la nonchalance de l'artiste comédien</h2>
                    <div className="m-2 discover discover-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <div className="discover btn btn-dark btn-discord">En savoir plus</div>
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