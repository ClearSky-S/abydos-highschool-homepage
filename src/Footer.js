import './Footer.css';
import { useState } from 'react';
function Footer() {
    const [familySiteActive, setFamilySiteActive] = useState(false);
    return (
        <div className="footer">
            <div className="container">
                <div 
                    className="family_site"
                    onMouseLeave={() => setFamilySiteActive(false)}
                >
                    <ul className={"family_site_open" + (familySiteActive ? " active" : "")}>
                        <li>
                            <a href="https://bluearchive.nexon.com/home">블루아카이브</a>
                        </li>
                        <li>
                            <a href="https://forum.nexon.com/bluearchive/">블루아카이브 커뮤니티</a>
                        </li>
                        <li>
                            <a href="https://www.nexon.com/Home/Game">NEXON</a>
                        </li>
                        <li>
                            <a href="https://www.natgames.co.kr/kr/index.php">NATGAMES</a>
                        </li>
                        <li>
                            <a href="https://www.yo-star.com/pc/index.html?lang=ko">YOSTAR</a>
                        </li>
                    </ul>
                    <div
                        className="family_site_open_button"
                        onMouseEnter={() => setFamilySiteActive(true)}
                        
                    >Family Site<div className="arrow">
                            &#9650;</div>
                    </div>
                </div>

                <div className="infos">
                    <p className="contact">대표전화 : 00-0000-0000 <span>|</span> FAX : 00-0000-0000 <span>|</span> 전자우편: abydos@abydos.hs.kr</p>
                    <address>
                        01000 키보토스 아비도스자치구 아비도스대로 1길 1 (아비도스 고등학교)
                    </address>
                    <p className="f-warnning">저작물의 무단 전재 및 배포 시 저작권법 136조에 의거 최고 5년 이하의 징역 또는 5천만원 이하의 벌금에 처하거나 이를 병과할 수 있습니다.</p>
                    <p className="copy">Copyright (c) 2022 ABYDOS HIGHSCHOOL. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;