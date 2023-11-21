import React from "react";
import {GetUserInfo, UserDefault, users} from '../../debug/sampleBd/users'
import { Link, useParams } from "react-router-dom";

import HeaderDisplay from "../../components/common/Header/HeaderDisplay";
import FooterDisplay from "../../components/public/Footer/FooterDisplay";

const HomePage = () => {

    const userInfo = GetUserInfo(UserDefault)

//    console.log(userInfo)

    return (

        <>
            <HeaderDisplay user={users[userInfo.id-1]}/>
            <main className="App App-main main-container">
                <section className="container title" itemID="title-Box">
                    <h1 className="title text-uppercase">Théâtre du Nonchaloir</h1>
                    <p className="title-subtitle fst-italic fw-bold">Bienvenue sur le site du théâtre !</p>
                </section>
                <section className="container spectacles-section">
                    <h2 className="title-section">Spectacles en cours</h2>
                    <div className="cards spectacles">card</div>
                </section>

                <section className="container citation-box">
                    <div className="citation-text">
                        <p>"Elle aimes aussi la paix, les champs. l'air froid du soir</p>
                        <p>Un penser calme et fort, mêlé de Nonchaloir"</p>
                    </div>
                    <div className="citation-author Bold">Sainte-Beuve</div>
                </section>

                <section className="container discover">
                    <h2 className="discover text-uppercase text-underline">Découvrez la nonchalance de l'artiste comédien</h2>
                    <div className="discover discover-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <div className="discover btn btn-dark btn-discord">En savoir plus</div>
                </section>
                <section className="container discover">
                    <h2 className="discover text-styleèunderline ">Devenez Adhérents !</h2>
                    <div className="discover discover-info">
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum. Officia, explicabo dolor corporis cupiditate odio possimus consequuntur sunt tenetur tempore quos aliquid voluptas labore deleniti autem iure obcaecati minus.</div>
                        <div>Mollitia qui, numquam perferendis ea vitae accusamus libero modi sed sapiente esse eum similique laboriosam quam! Quasi tenetur non voluptate veritatis. Nulla suscipit aspernatur odit odio commodi consequuntur ex expedita?</div>
                    </div>
                    <div className="discover btn btn-dark btn-discord">En savoir plus</div>
                </section>
                <div className="pre-footer"></div>
            </main>
            <FooterDisplay />
        </>
    )
}

export default HomePage;