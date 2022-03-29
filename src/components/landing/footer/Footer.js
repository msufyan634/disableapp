import React from 'react';
import './footer.scss';
import twitter from '../../../Assets/social/twitter.svg'
import discord from '../../../Assets/social/discord.svg'
// import opensea from '../../../Assets/social/opensea.svg'
const Footer = () => {
    return (
        <>
            <footer class="site-footer">
                {/* <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify w">
                                The Digi-Verse is split into numerous realms. The first realm that will be released will be the Bush realm, the home
                                of the Digi-Kiwi. 160 unique Digi Kiwi will be available for purchase on the Fantom Network, split into 8 different ranks!
                                Our vow as a team is to support this project as we grow through different series and additions to the Digi-Verse. We aim to 
                                release different editions and series as we build this universe, or Digi-Verse! </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/category/c-language/" className="w">king & Queen</a></li>
                                <li><a href="http://scanfcode.com/category/front-end-development/" className="w">Military</a></li>
                                <li><a href="http://scanfcode.com/category/back-end-development/" className="w">Poloticians</a></li>
                                <li><a href="http://scanfcode.com/category/java-programming-language/" className="w">Sports</a></li>
                                <li><a href="http://scanfcode.com/category/android/" className="w">Trades</a></li>
                                <li><a href="http://scanfcode.com/category/templates/" className="w">Common</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="http://scanfcode.com/about/" className="w">Home</a></li>
                                <li><a href="http://scanfcode.com/contact/" className="w">Category</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div> */}
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright © 2021
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li className="mt6"><a className="social_link"><img src={twitter} /> </a></li>
                                <li className="mt6"><a className="social_link"><img src={discord} /> </a></li>
                                {/* <li className="mt6"><a className="social_link"><img src={opensea} /> </a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
