import React from 'react';
import { IoArrowForward } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";

import ads1 from '../assets/images/uploads/ads1.png';

import item1 from '../assets/images/uploads/mv-item1.jpg';
import item2 from '../assets/images/uploads/mv-item2.jpg';
import item3 from '../assets/images/uploads/mv-item3.jpg';
import item4 from '../assets/images/uploads/mv-item4.jpg';
import item5 from '../assets/images/uploads/mv-item5.jpg';
import item6 from '../assets/images/uploads/mv-item6.jpg';
import item7 from '../assets/images/uploads/mv-item7.jpg';
import item8 from '../assets/images/uploads/mv-item8.jpg';
import ava1 from '../assets/images/uploads/ava1.jpg';
import ava2 from '../assets/images/uploads/ava2.jpg';
import ava3 from '../assets/images/uploads/ava3.jpg';
import ava4 from '../assets/images/uploads/ava4.jpg';

const Movie = () => {
    return (
        <div className="movie-items">
            <div className="container">
                <div className="row ipad-width">
                    <div className="col-md-8">
                        <div className="title-hd">
                            <h2>in theater</h2>
                            <a href="/" className="viewall">View all <IoArrowForward /></a>
                        </div>
                        <div className="tabs">
                            <ul className="tab-links">
                                <li className="active"><a href="#tab1">#Popular</a></li>
                                <li><a href="#tab2"> #Coming soon</a></li>
                                <li><a href="#tab3"> #Top rated  </a></li>
                                <li><a href="#tab4"> #Most reviewed</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab1" className="tab active">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item2 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item4 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab2" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoStarSharp /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab3" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item2 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item4 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab4" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title-hd">
                            <h2>on tv</h2>
                            <a href="/" className="viewall">View all <i className="ion-ios-arrow-right"></i></a>
                        </div>
                        <div className="tabs">
                            <ul className="tab-links-2">
                                <li><a href="#tab21">#Popular</a></li>
                                <li className="active"><a href="#tab22"> #Coming soon</a></li>
                                <li><a href="#tab23">  #Top rated  </a></li>
                                <li><a href="#tab24"> #Most reviewed</a></li>
                            </ul>
                            <div className="tab-content">
                                <div id="tab21" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item2 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item4 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab22" className="tab active">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item2 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item4 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab23" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item2 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item4 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item3 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab24" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item5 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Interstellar</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item6 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The revenant</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item7 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item8 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">The walk</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src={ item1 } alt="" width="185" height="284" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html"> Read more <i className="ion-android-arrow-dropright"></i> </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6><a href="/">Die hard</a></h6>
                                                        <p><IoArrowForward /><span>7.4</span> /10</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sidebar">
                            <div className="ads">
                                <img src={ ads1 } alt="" width="336" height="296" />
                            </div>
                            <div className="celebrities">
                                <h4 className="sb-title">Spotlight Celebrities</h4>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava1 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Samuel N. Jack</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava2 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Benjamin Carroll</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava3 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Beverly Griffin</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <div className="celeb-item">
                                    <a href="/"><img src={ ava4 } alt="" width="70" height="70" /></a>
                                    <div className="celeb-author">
                                        <h6><a href="/">Justin Weaver</a></h6>
                                        <span>Actor</span>
                                    </div>
                                </div>
                                <a href="/" className="btn">See all celebrities<i className="ion-ios-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
