import './MainPage.css';
import GooglePlay from '../../images/GooglePlay.svg'
import AppleStore from '../../images/AppleStore.svg'
import iPhoneFront from '../../images/iPhoneFront.png'
import Logo from '../../images/logo.png'

function MainPage() {
    return (
        <div className="App-main">
            <div className="App-main-info">

            <h1 className='App-main-h1'>DOWNLOAD <br />OUR NEW APP</h1>

            <div className='App-main-links'>
                <div className='App-main-link-div'>
                    <img className='App-main-image' src={AppleStore} alt='logo' />
                    <div className='App-main-link-text-div'>
                        <p className='App-main-link-text'>Download on the</p>
                        <p className='App-main-link-title'>App Store</p>
                    </div>
                </div>
                <div className='App-main-link-div'>
                    <img className='App-main-image' src={GooglePlay} alt='logo' />
                    <div className='App-main-link-text-div'>
                        <p className='App-main-link-text'>GET</p>
                        <p className='App-main-link-title'>Google play</p>
                    </div>
                </div>
            </div>

            <div className='App-main-text'>Our team of financial experts at CryptoMaven boasts years of experience in the forex market. When you choose us, you're tapping into a wealth of knowledge and insights that can guide your trading decisions.</div>

            <div className='App-main-logo-div'>
                <img className='App-main-logo' src={Logo} alt='logo' />
                <p className='App-main-logo-text'>CryptoMaven</p>
            </div>

            <div className='App-bottom'>
                <p className='App-bottom-text'>cryptomaven.app</p>
                <p className='App-bottom-text'>support@cryptomaven.app</p>
            </div>
            </div>

            <div className='App-main-screen'>
                <img className='App-main-screen-image' src={iPhoneFront} alt='Screen' />
            </div>
        </div>
    )
}

export default MainPage;