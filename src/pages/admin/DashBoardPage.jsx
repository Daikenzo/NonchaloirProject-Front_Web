import HeaderDisplay from "../../components/common/Header/HeaderDisplay"
import FooterDisplay from "../../components/admin/Footer/FooterDisplayAdmin";
import UserIco from "../../img/ico/user-icon-svgrepo-com.svg"

import './DashBoard-Icon.scss'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const DashBoardPage = () => {
  const jwt = Cookies.get("jwt");
  const userRole = jwt? (jwtDecode(jwt).data.role) :  (null);
    // Display
    return (
        <>
            <HeaderDisplay dashboard={true} />
            <main className="App-main">
                <div className="container title-section">
                    <h2 className="App-title">Dashboard</h2>
                </div>
                <section className="dashboard-info">
                    <div className="grid">
                      <Link className=" text-decoration-none" to="/dashboard/users">
                        <div className="card dashboard-info-card">
                          <span className="icon">
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5                    10.    0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z"
                                />
                                <path
                                  d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.                    5V18.   5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z"
                                />
                                <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
                                <path
                                  d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5                   13.   5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z"
                                />
                              </svg>
                            </span>
                          <h4 className=" text-black">Utilisateur</h4>
                          <p>
                          Les utilisateurs enregistrés.
                          </p>
                          <div className="shine"></div>
                          <div className="background">
                            <div className="tiles">
                              <div className="tile tile-1"></div>
                              <div className="tile tile-2"></div>
                              <div className="tile tile-3"></div>
                              <div className="tile tile-4"></div>
                      
                              <div className="tile tile-5"></div>
                              <div className="tile tile-6"></div>
                              <div className="tile tile-7"></div>
                              <div className="tile tile-8"></div>
                      
                              <div className="tile tile-9"></div>
                              <div className="tile tile-10"></div>
                            </div>
                      
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                          </div>
                        </div>
                      </Link>
                      <Link className=" text-decoration-none" to="/dashboard/events">
                        <div className="card dashboard-info-card">
                          <span className="icon">
                            <img src={UserIco} alt="" />
                          </span>
                          <h4 className=" text-black">Spectacles & Evenements</h4>
                          <p>
                            La liste des Spectacles, des évènements.
                            Inclus également les réalisations
                          </p>
                          <div className="shine"></div>
                          <div className="background">
                            <div className="tiles">
                              <div className="tile tile-1"></div>
                              <div className="tile tile-2"></div>
                              <div className="tile tile-3"></div>
                              <div className="tile tile-4"></div>
                      
                              <div className="tile tile-5"></div>
                              <div className="tile tile-6"></div>
                              <div className="tile tile-7"></div>
                              <div className="tile tile-8"></div>
                      
                              <div className="tile tile-9"></div>
                              <div className="tile tile-10"></div>
                            </div>
                      
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                          </div>
                        </div>
                      </Link>
                      <Link className=" text-decoration-none" to="/dashboard/reservations">
                        <div className="card dashboard-info-card">
                          <span className="icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.                  18342 3.  81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658                 20.1834 7.  18342 19.7929 6.79289L16.5 3.5H14.5Z"
                              />
                            </svg>
                          </span>
                          <h4 className=" text-black">Réservations</h4>
                          <p>
                            La liste des réservations des Spectacles
                          </p>
                          <div className="shine"></div>
                          <div className="background">
                            <div className="tiles">
                              <div className="tile tile-1"></div>
                              <div className="tile tile-2"></div>
                              <div className="tile tile-3"></div>
                              <div className="tile tile-4"></div>
                      
                              <div className="tile tile-5"></div>
                              <div className="tile tile-6"></div>
                              <div className="tile tile-7"></div>
                              <div className="tile tile-8"></div>
                      
                              <div className="tile tile-9"></div>
                              <div className="tile tile-10"></div>
                            </div>
                      
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                          </div>
                        </div>
                      </Link>

                      {userRole >=5 && (
                        <Link className=" text-decoration-none" to="/dashboard/notifications">
                        <div className="card dashboard-info-card">
                          <span className="icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.                  18342 3.  81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658                 20.1834 7.  18342 19.7929 6.79289L16.5 3.5H14.5Z"
                              />
                            </svg>
                          </span>
                          <h4 className=" text-black">Messages & Notification</h4>
                          <p>
                            Les messages laissées par le formulaire de contatc
                          </p>
                          <div className="shine"></div>
                          <div className="background">
                            <div className="tiles">
                              <div className="tile tile-1"></div>
                              <div className="tile tile-2"></div>
                              <div className="tile tile-3"></div>
                              <div className="tile tile-4"></div>
                      
                              <div className="tile tile-5"></div>
                              <div className="tile tile-6"></div>
                              <div className="tile tile-7"></div>
                              <div className="tile tile-8"></div>
                      
                              <div className="tile tile-9"></div>
                              <div className="tile tile-10"></div>
                            </div>
                      
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                          </div>
                        </div>
                      </Link>)}

                    </div>
                </section>

            </main>
            <FooterDisplay />
        </>
    );
};

export default DashBoardPage;