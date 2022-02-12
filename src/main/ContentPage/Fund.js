import './Fund.css';

export function FundGreeting() {
    return (
        <div className="fund-greeting">
            <h3>Abydos Nature & Human resource Fund (아비도스 환경보전 및 인재양성 기금)</h3>

            <p>
                <img alt={'school'} src={`${process.env.PUBLIC_URL}/img/gallery/BG_DesertResidence.jpg`} />
                ANHF는 아비도스 자치구의 자연환경을 보전하고 인간과 자연이 조화롭게 공존하는 미래를 만들고자 합니다.
                지구온난화와 벌목, 가축 방목으로 인해 아비도스 자치구의 사막화 현상이 점차 심해져 현재 생물과 인간 모두 살기 힘든 황폐한 환경이 되었습니다.
                사막화를 방지하기 위해서 이산화탄소 배출양을 줄이고 수분을 잡아둘 수 있도록 많은 나무를 심어 사막을 다시 녹지화 해야합니다.
                그 후에는 자연스레 모래폭풍도 사라지고 생태계도 복원될 것입니다.
                사막화의 경제적, 사회적 피해 규모는 거대하고 발생원인 또한 어느 한 자치구만의 책임이 아니기 때문에 사막화가 발생한 자치구만의 노력으로 해결하기 어렵습니다.
                우리 모두가 힘을 합쳐서 해결해야합니다.
            </p>

            <h3>ANHF의 역사</h3>

            <p>
                <img alt={'school'} src={`${process.env.PUBLIC_URL}/img/gallery/BG_SchoolGround.jpg`} />
                초창기 ANHF는 "아비도스 인재양성 기금(Abydos Human resource Fund)"을 의미했습니다.
                본래 AHF는 아비도스의 인재를 양성하기 위한 장학 후원회의 성격만을 가지고 있었지만
                본 자치구에 사막화 현상이 발생하기 시작한 이후 환경 문제 해결에도 힘쓰게 되었습니다.
                이후 본래의 명칭이 기관의 활동 범위를 모두 반영하지 못한다고 판단하여 현재의 ANHF로 변경하였습니다.
            </p>
        </div>
    )
}

export function FundState() {
    return (
        <div className="fund-state">
            <h3>수입</h3>
            <table>
                <colgroup>
                    <col width="60%" />
                    <col width="*" />

                </colgroup>
                <thead>
                    <tr>
                        <th>2021 회계연도 총 수입</th>
                        <th>단위(만 원)</th>

                    </tr>
                </thead>
                <tbody>
                    <tr><td>개인 후원자 후원금</td><td>11999</td></tr>
                    <tr><td>기업 후원금</td><td>20000</td></tr>
                    <tr><td>공공기관 후원금</td><td>30000</td></tr>
                    <tr><td>기타 수익</td><td>7172</td></tr>
                    <tr><td><b>합계</b></td><td><b>69171</b></td></tr>

                </tbody>
            </table>
            <h3>지출</h3>
            <table>
                <colgroup>
                    <col width="60%" />
                    <col width="*" />

                </colgroup>
                <thead>
                    <tr>
                        <th>2021 회계연도 총 지출</th>
                        <th>단위(만 원)</th>

                    </tr>
                </thead>
                <tbody>
                    <tr><td>교육시설</td><td>1616</td></tr>
                    <tr><td>기자재 구입 및 수리</td><td>12439</td></tr>
                    <tr><td>도서 구입</td><td>89</td></tr>
                    <tr><td>학생 복지</td><td>1312</td></tr>
                    <tr><td>녹지 재생 사업</td><td>6167</td></tr>
                    <tr><td>환경보전 인식제고</td><td>74</td></tr>
                    <tr><td>일반 관리비</td><td>194</td></tr>
                    <tr><td>부채상환</td><td>47280</td></tr>
                    <tr><td><b>합계</b></td><td><b>69171</b></td></tr>

                </tbody>
            </table>
        </div>
    )
}

export function FundUse() {
    return (
        <div className="fund-use">
            <ul>
                <li>
                    <div className="first">교육시설</div>
                    <div className="second"><div>교육·훈련를 위한 건물 및 훈련실 등 우수한 교육환경 마련</div></div>
                </li>
                <li>
                    <div className="first">기자재 및 도서</div>
                    <div className="second"><div>첨단 무기·훈련장비 등 기자재 및 각종 전술 도서, 인문 교양 도서, 비도서, 정기 간행물 등 지원</div></div>
                </li>
                <li>
                    <div className="first">학생 복지</div>
                    <div className="second"><div>휴게 시설, 급식 시설 등의 확충 및 학생복지, 장학금 지원</div></div>
                </li>
                <li>
                    <div className="first">환경 보호</div>
                    <div className="second"><div>녹지 재생, 환경 보호 캠페인 등 환경 보호 활동 지원</div></div>
                </li>
            </ul>
        </div>
    )
}

export function FundSend() {
    return (
        <div className="fund-send">
            <p className="first">
                현재 기금 운영을 포함한 모든 행정업무는 대책위원회가 위임받았습니다. 대책위원회를 통해 연락 부탁드립니다.
            </p>
            <p className="second">연말 소득공제를 받고자 하는 분은 서류를 별도로 준비해 주시기 바랍니다.<br /><br /></p>

            <p className="third">
                FAX : 00-0000-0000<br />
                주소: (01000) 키보토스 아비도스자치구 아비도스대로 1길 1 (아비도스 고등학교)
            </p>
        </div>
    )

}