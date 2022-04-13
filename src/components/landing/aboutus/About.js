import React,{useEffect,useState} from 'react';
import king from '../../../Assets/King & Queen/king_1.png'
import queen from '../../../Assets/King & Queen/queen_1.png'
import military from '../../../Assets/Military/military_1.png'
import politicians from '../../../Assets/Politicians/politician_1.png'
import sport from '../../../Assets/Sports/sport_1.png'
import './about.scss';
const About = () => {

    const [currentimg, setCurrentImg] = useState(king);
    const imgList = [king, queen,military,politicians,sport ]        
    useEffect(() => {
        let count = 0
        const interval = setInterval(() => {
            if (count < imgList.length - 1) {
                count++
                setCurrentImg(imgList[count])
            }
        }, 1000);
        return function cleanup() {
            clearInterval(interval)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgList])
    return (
        <>
        <section className="main-about">
            <div className="container">
                <div className="row">

                    <div className="col-sm-6">
                        <div className="inner-img text-center ptb20">
                            {/* <img src={currentimg} alt=""  className="img-fluid"/> */}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="inner-content ptb20">
                            {/* <h6 className="red">ABOUT US</h6> */}
                            <h1 className="title">DISABLED APES  NFT</h1>
                            <p>Welcome to the Land of the Digital Cloud! The Digital Cloud.</p>
                            <p className="ptb20 text-center">The Digi-Verse is split into numerous realms. The first realm that will be released will be the Bush realm, the home of the Digi-Kiwi. 160 unique Digi Kiwi will be available for purchase on the Fantom Network, split into 8 different ranks! </p>
                            {/* <p className="">Our vow as a team is to support this project as we grow through different series and additions to the Digi-Verse. We aim to release different editions and series as we build this universe, or Digi-Verse! </p>      */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default About;
