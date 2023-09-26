import './Header.css';

function openLinkedIn() {
    const url = 'https://www.linkedin.com/in/hamoudyazen';
    window.open(url);
}
function openPortfolio() {
    const url = 'https://yazenhamoud.online/';
    window.open(url);
}


function showFullHeader() {
    const hiddenNav = document.querySelector('.headerClassHidden');
    const visibleNav = document.querySelector('.headerClass');
    const HeaderHiddendiv1 = document.querySelector('.HeaderHiddendiv1');
    const HeaderHiddendiv2 = document.querySelector('.HeaderHiddendiv2');
    const HeaderHiddendiv3 = document.querySelector('.HeaderHiddendiv3');
    visibleNav.style.visibility = "hidden";
    hiddenNav.style.visibility = 'visible';
    hiddenNav.style.animation = 'headerClassHiddenAnimation 0.5s ease-in forwards';
    HeaderHiddendiv1.style.animation = 'headerClassHiddenContentAnimationRev 1s ease-in forwards';
    HeaderHiddendiv2.style.animation = 'headerClassHiddenContentAnimationRev 1s ease-in forwards';
    HeaderHiddendiv3.style.animation = 'headerClassHiddenContentAnimationRev 1s ease-in forwards';
}


function hideFullHeader() {
    const hiddenNav = document.querySelector('.headerClassHidden');
    const visibleNav = document.querySelector('.headerClass');
    const HeaderHiddendiv1 = document.querySelector('.HeaderHiddendiv1');
    const HeaderHiddendiv2 = document.querySelector('.HeaderHiddendiv2');
    const HeaderHiddendiv3 = document.querySelector('.HeaderHiddendiv3');
    visibleNav.style.visibility = "visible";
    hiddenNav.style.animation = 'headerClassHiddenAnimationRev 0.5s ease-in forwards';
    HeaderHiddendiv1.style.animation = 'headerClassHiddenContentAnimation 0.4s ease-in forwards';
    HeaderHiddendiv2.style.animation = 'headerClassHiddenContentAnimation 0.4s ease-in forwards';
    HeaderHiddendiv3.style.animation = 'headerClassHiddenContentAnimation 0.4s ease-in forwards';
}



const Header = () => {
    return (
        <>
            <div className='headerClass'>
                <div className='HeaderContent'>
                    <div className='HeaderHam' onClick={showFullHeader}>
                        <svg
                            width='43'
                            height='30'
                            viewBox='0 0 43 30'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <rect width='35' height='4' fill='#F3F2F9' />
                            <rect y='25' width='35' height='4' fill='#F3F2F9' />
                            <rect y='12' width='35' height='4' fill='#F3F2F9' />
                        </svg>
                    </div>
                </div>
            </div>

            <div className='headerClassHidden'>
                <div className='HeaderHiddendiv1'>
                    <svg width="100" height="100" viewBox="0 0 567 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_16_14)">
                            <path d="M152.8 40.8V178.5H109.1V159.1C102.2 171.7 86.3 182 65.1 182C28.6 181.9 0 150.8 0 109.7C0 68.6 28.6 37.4 65.1 37.4C85.4 37.4 101.7 47.1 109.1 60.5V40.8H152.8ZM109.1 109.7C109.1 90.8 96 74.6 76.3 74.6C56.6 74.6 43.5 90.9 43.5 109.7C43.5 128.8 56.6 144.8 76.3 144.8C96 144.8 109.1 128.8 109.1 109.7Z" fill="white" />
                            <path d="M283.6 94.8C282.2 83.1 273.9 74.2 257.6 74.2C235 74.2 225.9 90.8 225.9 109.6C225.9 128.7 235.3 145 258.5 145C273.4 145 280.2 138.4 283.9 126.7H327.6C323.6 157.5 299.3 182.1 257.1 182.1C207.4 182.1 182.3 147.8 182.3 109.6C182.3 71.6 207.4 37.1 257.1 37.1C302.5 37.1 324.8 65.7 327.4 94.8H283.6Z" fill="white" />
                            <path d="M445.3 178.5C438.7 179.6 429.3 180.8 415.9 180.8C395.6 180.8 367.3 178.2 367.3 132.2V73.4H345.6V40.8H367.3V0H410.7V40.8H442.1V73.4H410.7V122.5C410.7 143.1 418.7 145.9 430.7 145.9C434.4 145.9 441.3 145.6 445.3 145V178.5Z" fill="white" />
                            <path d="M552 133.4C552 151.2 537.6 165.6 519.8 165.6C502 165.6 487.6 151.2 487.6 133.4C487.6 115.6 502 101.2 519.8 101.2C537.5 101.2 552 115.6 552 133.4Z" fill="white" />
                            <path d="M519.7 86.2C493.6 86.2 472.5 107.3 472.5 133.4C472.5 159.5 493.6 180.6 519.7 180.6C545.8 180.6 566.9 159.5 566.9 133.4C566.9 107.4 545.8 86.2 519.7 86.2ZM519.7 172.9C497.9 172.9 480.3 155.2 480.3 133.5C480.3 111.7 498 94.1 519.7 94.1C541.5 94.1 559.1 111.8 559.1 133.5C559.2 155.2 541.5 172.9 519.7 172.9Z" fill="white" />
                            <path d="M3.5 217.5H18.4C24.4 217.5 28 220.7 28 225.8C28 229.6 26.3 232.8 22.5 233.8V233.9C26.2 234.6 26.9 237.3 27.3 240.4C27.6 243.5 27.4 247 29.2 249.2H24.5C23.3 247.9 24 244.5 23.3 241.4C22.9 238.3 22.1 235.7 18 235.7H7.8V249.3H3.5V217.5ZM16.6 232.2C20.6 232.2 23.9 231.2 23.9 226.6C23.9 223.5 22.2 221.2 18.3 221.2H7.8V232.3H16.6V232.2Z" fill="white" />
                            <path d="M62.4 217.5H84.3V221.1H66.6V231.2H83.1V234.8H66.6V245.8H84.4V249.4H62.4V217.5Z" fill="white" />
                            <path d="M135.4 226.8C134.9 222.3 131.9 220.3 127.5 220.3C123.9 220.3 120.4 221.6 120.4 225.7C120.4 229.6 125.5 230.2 130.6 231.3C135.7 232.5 140.7 234.2 140.7 240.5C140.7 247.3 134.1 250 128.3 250C121.2 250 115.2 246.5 115.2 238.8H119.2C119.2 244.1 123.6 246.4 128.4 246.4C132.2 246.4 136.4 245.2 136.4 240.6C136.4 236.2 131.3 235.5 126.3 234.4C121.2 233.3 116.1 231.8 116.1 226C116.1 219.6 121.8 216.7 127.6 216.7C134.1 216.7 139 219.8 139.3 226.7L135.4 226.8Z" fill="white" />
                            <path d="M174.3 217.5H188.2C194.5 217.5 197.9 221 197.9 226.9C197.9 232.8 194.5 236.3 188.2 236.3H178.5V249.3H174.3V217.5ZM178.6 232.7H186.9C191.7 232.7 193.8 230.7 193.8 226.9C193.8 223.1 191.6 221.1 186.9 221.1H178.6V232.7Z" fill="white" />
                            <path d="M239 216.8C249.1 216.8 254.2 224.8 254.2 233.4C254.2 242 249.1 250 239 250C228.9 250 223.8 242 223.8 233.4C223.8 224.8 228.9 216.8 239 216.8ZM239 246.5C246.7 246.5 250 239.8 250 233.4C250 227 246.8 220.3 239 220.3C231.3 220.3 228 227 228 233.4C228 239.8 231.3 246.5 239 246.5Z" fill="white" />
                            <path d="M283.3 217.5H287.8L304.5 243.2H304.6V217.5H308.6V249.2H304L287.4 223.7H287.3V249.2H283.3V217.5Z" fill="white" />
                            <path d="M358 226.8C357.5 222.3 354.5 220.3 350.1 220.3C346.5 220.3 343 221.6 343 225.7C343 229.6 348.1 230.2 353.2 231.3C358.3 232.5 363.3 234.2 363.3 240.5C363.3 247.3 356.7 250 350.9 250C343.8 250 337.8 246.5 337.8 238.8H341.8C341.8 244.1 346.2 246.4 351 246.4C354.8 246.4 359 245.2 359 240.6C359 236.2 353.9 235.5 348.9 234.4C343.8 233.3 338.7 231.8 338.7 226C338.7 219.6 344.4 216.7 350.2 216.7C356.7 216.7 361.6 219.8 361.9 226.7L358 226.8Z" fill="white" />
                            <path d="M401 217.5H405.7L418.1 249.2H413.4L409.9 239.6H396.5L392.9 249.2H388.5L401 217.5ZM397.9 236.2H408.6L403.3 221.4H403.2L397.9 236.2Z" fill="white" />
                            <path d="M445.7 217.5H457.2C460 217.5 463.7 217.5 465.6 218.7C467.7 219.9 469.3 222.2 469.3 225.3C469.3 228.7 467.5 231.2 464.6 232.4V232.5C468.5 233.3 470.6 236.2 470.6 240.1C470.6 244.8 467.3 249.2 461 249.2H445.7V217.5ZM449.9 231.2H458.3C463.1 231.2 465.1 229.5 465.1 226.1C465.1 221.7 462 221.1 458.3 221.1H449.9V231.2ZM449.9 245.7H460.5C464.1 245.7 466.5 243.5 466.5 240C466.5 235.9 463.2 234.7 459.6 234.7H450V245.7H449.9Z" fill="white" />
                            <path d="M498.8 217.5H503V245.7H519.8V249.3H498.8V217.5Z" fill="white" />
                            <path d="M542.6 217.5H564.5V221.1H546.8V231.2H563.3V234.8H546.8V245.8H564.6V249.4H542.6V217.5Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_16_14">
                                <rect width="566.9" height="250" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <div className='HeaderHiddendiv2'>

                    <ul className='HeaderHiddendiv2Ul'>
                        <li className='HeaderHiddendiv2Li'>Welcome</li>
                        <li className='HeaderHiddendiv2Li'>exhibitions</li>
                        <li className='HeaderHiddendiv2Li'>interventions</li>
                        <li className='HeaderHiddendiv2Li'>About</li>
                    </ul>
                    <br></br>
                    <p className='devbyme'>@Devloped by Yazen Hamoud</p>
                    <div className='socialLinks'>
                        <button onClick={openLinkedIn} className='LinkedInButton'>LinkedIn</button>
                        <button onClick={openPortfolio} className='PortfolioButton'>Portfolio</button>
                    </div>
                </div>


                <div className='HeaderHiddendiv3' onClick={hideFullHeader}>
                    <svg width="33" height="33" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.529419" y="30.935" width="43" height="5" transform="rotate(-45 0.529419 30.935)" fill="#F3F2F9" />
                        <rect x="4.06494" y="0.529449" width="43" height="5" transform="rotate(45 4.06494 0.529449)" fill="#F3F2F9" />
                    </svg>

                </div>
            </div>
        </>
    );
};

export default Header;
