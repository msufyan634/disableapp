import React, { useState } from 'react';
import './navbar.scss';
import { useWeb3React } from '@web3-react/core'
// import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import twitter from '../../../Assets/social/twitter.svg'
import discord from '../../../Assets/social/discord.svg'
// import opensea from '../../../Assets/social/opensea.svg'
import logo from '../../../Assets/logo 1 large.png'
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import Team from '../team/Team';
import { Link } from 'react-scroll';
import Banner from '../main-banner/Banner';
import About from '../aboutus/About';
import Random from '../RandomNft/Random';
import Faqs from '../faqs/Faqs';
import Tab from '../../rarity/Tab';
import Slider from '../../slider/Slider';
import Roadmap from '../roadmap/Roadmap'

import Specification from '../specification/Specification'
import Ecosystem from '../ecosystem/Ecosystem'

const Navbar = () => {
  const [show, setshow] = useState(false);
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const connectWallet = () => {
    setshow(true);
  }

  console.log("account", account)
  const connectMetamask = () => {
    localStorage.setItem("connectorId", "injected")
    if (account) {
      logout()
    } else {
      login("injected")
    }
    setshow(false);
  }
  const disconnectWallet = () => {
    logout();
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const trustWallet = async () => {
    localStorage.setItem("connectorId", "walletconnect")
    if (account) {
      logout()
    } else {
      login("walletconnect")
    }
    setshow(false);
  }


  return (
    <>
      <div className="main-banner">
        <div className={click ? "main-container" : ""} onClick={() => Close()} />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo" >
              {/* <img src={logo} width="20%" height="auto"/> */}
              <span><img src="\Assets\logoo.png" alt="" className='img-fluid lolo'  /> DISABLED APES</span>
              {/* <i className="fa fa-code"></i> */}
            </NavLink>
            <ul className={click ? "nav-menu active align-items-center" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links text-white"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  exact
                  to="about"
                  activeClassName="active"
                  className="nav-links white"
                  onClick={click ? handleClick : null}
                >
                  Roadmap
                </Link>
              </li> */}
              <li className="nav-item" >
                <Link
                  exact
                  to="category"
                  activeClassName="active"
                  className="nav-links text-white"
                  onClick={click ? handleClick : null}
                >
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  exact
                  to="team"
                  activeClassName="active"
                  className="nav-links text-white"
                  onClick={click ? handleClick : null}
                >
                  NFts
                </Link>
              </li>
              <li className="nav-item">
                {account ?
                  <button className="connect-btn" type="button" onClick={disconnectWallet} >Disconnect</button>
                  : <button className="connect-btn" type="button" onClick={connectWallet}>Connect Wallet</button>}
                <div className='d-flex justify-content-center'> <button className="connect-btn ubbububu text-center" type="button" onClick={disconnectWallet} >Mint</button></div>
                <p className="white margin_address">
                  {account === undefined
                    ? ""
                    : account === null
                      ? "None"
                      : `${account.substring(0, 6)}...${account.substring(
                        account.length - 4
                      )}`}
                </p>
              </li>
              <li className="nav-item ">
                <div className='social-cons'>
                  <a className="social_link"><img src={twitter} /> </a>

                  <a className="social_link"><img src={discord} /> </a>
                </div>
              </li>

              {/* <li className="mt6"><a className="social_link"><img src={opensea} /> </a></li> */}

            </ul>
            {/* <div className={click ? "nav-menu active" : "nav-menu"}>
              <button className="connect-btn bbbbbbwcwe" type="button" onClick={disconnectWallet} >Mint</button>
            </div> */}

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
        <Modal isOpen={show} className="register-modal connect-modal" size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <ModalHeader >
            <button type="button" className="close" data-dismiss="modal" onClick={() => setshow(false)} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <ModalBody className="modal-body">
            <div className="container main-divs">
              <h1 className="modal_heading">Select Wallet Provider</h1>
              <div className="metamask_main">
                <button onClick={connectMetamask} type="button" className="metamask_btn">
                  <div className="meta-mask" >
                    <img src="../../Assets/walletImages/Group 16.png" alt="" />
                  </div>
                </button>
              </div>
              <div className="wallets_main">
                <button onClick={trustWallet} type="button" className="metamask_btn">
                  <div className="scan-wallet" >
                    <img src="../../Assets/walletImages/sacn-wallet.png" alt="" />
                    <h1 className="modal_heading">WalletConnect</h1>
                  </div>
                </button>
              </div>
              <p className="main-term">By connecting, I accept Kiwi's   <Link className="link-scan" href="#">Terms of Service</Link></p>
            </div>
          </ModalBody>
        </Modal>
        <section >
          <Banner />
        </section>
      </div>
      <section id="about">
        <About />
      </section>
      <section id="about">
        <Specification />
      </section>
      <section >
        <Ecosystem />
      </section>
      {/* <section>
        <Random />
      </section> */}
      <section id="team">
        <Team />
      </section>
      <section id="category">
        <Roadmap />
      </section>
      {/* <section id="faqs">
        <Faqs />
      </section> */}
    </>
  )
}

export default Navbar;
