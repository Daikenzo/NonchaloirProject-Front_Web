import { Link } from "react-router-dom"
import './EventsCard.scss'
import { useEffect, useState } from "react";

const LastEventCards = () => {
    useEffect(() => {
      }, []);
    // Display
    return (
        <section className=" p-3 w-75 container spectacles-section">
            <h2 className="title-section">Spectacles en cours</h2>
            <div className="d-flex justify-content-center card card-group p-2 bg-dark text-white spectacles">
                <div className="carousel-inner card-inner">
                    <div className="card event-card-item carousel-item w-25 m-2 active">
                        <img className="card-img event-card-img"
                        src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb& fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" 
                        alt=""
                        />
                        <div className="card-content">
                            <div className="card-titlebox event-cards">
                                <h3 className="card-event-title">Nom de la pièce</h3>
                                <p>Spectacle en cours</p>
                            </div>
                            <div className="card-info">
                                <p className="description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt  exercitationem   iste, voluptatum, quia explicabo laboriosam rem adipisci    voluptates cumque,   veritatis atque nostrum corrupti ipsa asperiores harum?   Dicta odio aut hic.
                                </p>
                                <a href="#" className="App-link link-dark button">
                                    Voir plus 
                                    <span className="material-symbols-outlined">
                                        ->
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card event-card-item carousel-item w-25 m-2 active">
                        <img className="card-img event-card-img"
                        src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb& fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" 
                        alt=""
                        />
                        <div className="card-content">
                            <div className="card-titlebox event-cards">
                                <h3 className="card-event-title">Nom de la pièce</h3>
                                <p>Spectacle en cours</p>
                            </div>
                            <div className="card-info">
                                <p className="description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt  exercitationem   iste, voluptatum, quia explicabo laboriosam rem adipisci    voluptates cumque,   veritatis atque nostrum corrupti ipsa asperiores harum?   Dicta odio aut hic.
                                </p>
                                <a href="#" class="App-link link-dark button">
                                    Voir plus 
                                    <span class="material-symbols-outlined">
                                        ->
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="card event-card-item carousel-item w-25 m-2 active">
                        <img className="card-img event-card-img"
                        src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb& fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80" 
                        alt=""
                        />
                        <div className="card-content">
                            <div className="card-titlebox event-cards">
                                <h3 className="card-event-title">Nom de la pièce</h3>
                                <p>Spectacle en cours</p>
                            </div>
                            <div className="card-info">
                                <p className="description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt  exercitationem   iste, voluptatum, quia explicabo laboriosam rem adipisci    voluptates cumque,   veritatis atque nostrum corrupti ipsa asperiores harum?   Dicta odio aut hic.
                                </p>
                                <a href="#" class="App-link link-dark button">
                                    Voir plus 
                                    <span class="material-symbols-outlined">
                                        ->
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                
            </div>
        </section>
    );
};

export default LastEventCards;