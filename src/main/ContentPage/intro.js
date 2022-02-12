import { studentListData, teacherListData } from "./data/memberDatas"
import './memberCard.css';
import './intro.css';

function PrincipalGreeting() {
    return (
        <div className="article-style-one hand-writing">
            <h3>전화위복(轉禍爲福)</h3>
            <img src={`${process.env.PUBLIC_URL}/img/intro/principal.png`} alt="학교장" />

            <p>
                안녕하십니까?<br />
                학교장 대리, 대책위원회 위원장 타카나시 호시노라고 합니다.<br />
                아비도스 고등학교 홈페이지를 방문해주신 여러분을 진심으로 환영합니다.
            </p>
            <p>
                과거 키보토스 최고수준의 교육환경을 갖춘 명문고등학교였던 아비도스 고등학교는
                급변하는 대외 환경 속에서 현재 여러가지 위기에 직면하고 있습니다.
            </p>
            <p>
                전국 시대 합종책으로 6국의 임금을 돕는 일을 겸임했던 종횡가 소진은 이런 말을 한 적이 있습니다.<br />
                "옛날에 일을 잘 처리했던 사람은 '화를 바꾸어 복이 되게 했고' 실패한 것을 바꾸어 공이 되게 했다."<br />
                어떤 불행한 일이라도 끊임없는 노력과 강인한 의지로 힘쓰면 불행을 행복으로 바꾸어 놓을 수 있다는 말입니다.
            </p>
            <p>
                힘든 상황이지만 지역사회와 환경 등 공동체를 두루 살필 수 있는 리더를 양성하여 과거의 영광이 아닌 현재의 영광이라고 말할 수 있는 아비도스를 만들기 위해 노력하겠습니다.
            </p>
            <p>
                감사합니다
            </p>
            <p>
                학교장 대리 타카나시 호시노
            </p>
        </div>
    )
}

function EduTarget() {
    return (
        <div className="edu-target">
            <img src={`${process.env.PUBLIC_URL}/img/intro/tower.png`} alt="생텀타워" />

            <ul>
                <li>
                    <div className="first">1</div>
                    <div className="second"><div>지역사회와 환경을 포용할 수 있는 리더십 함양</div></div>
                </li>
                <li>
                    <div className="first">2</div>
                    <div className="second"><div>첨단 전술 지식 습득 및 활용능력 배양</div></div>
                </li>
                <li>
                    <div className="first">3</div>
                    <div className="second"><div>다양한 환경의 전투 수행 능력 배양</div></div>
                </li>
                <li>
                    <div className="first">4</div>
                    <div className="second"><div>창의적·통합적 문제해결능력 배양</div></div>
                </li>
                <li>
                    <div className="first">5</div>
                    <div className="second"><div>강인한 정신력과 체력</div></div>
                </li>
            </ul>
        </div>
    );
}

function EduCourse() {
    return (
        <div className="article-style-one">
            <img className="wide-image" src={`${process.env.PUBLIC_URL}/img/intro/BG_DesertCamp.jpg`} alt="훈련캠프" />
            <h4>학위교육</h4>
            <ul>
                <li>교양</li>
                <li>일반학 전공</li>
                <li>군사학 전공</li>
                <li>체육</li>
            </ul>

            <h4>군사훈련</h4>
            <ul>
                <li>기초 훈련</li>
                <li>야전 훈련</li>
                <li>특수전 훈련</li>
            </ul>
        </div>
    );
}

function Symbol() {
    return (
        <div className="article-style-one">
            <h3>교표</h3>
            <img className="inline" src={`${process.env.PUBLIC_URL}/img/logo3.png`} alt="abydos logo"></img>
            <p>거대한 피라미드 모양의 로고는 과거 이집트를 정신적·문화적으로 계승한 아비도스를 가장 상징적으로 나타낸 조형물입니다. 아비도스 대본관이 위치한 자리는 과거 이집트의 수도 아비도스가 위치했던 자리이기도 합니다. 피라미드 중앙 밝은 빛의 문양은 사막의 꺼지지 않는 태양을 상징합니다. 이는 아비도스의 영원한 영광과 강인한 정신을 나타냅니다.</p>
        </div>
    );
}

function Committee() {
    return (
        <div className="article-style-one">
            <img className="wide-image" src={`${process.env.PUBLIC_URL}/img/intro/committee.png`} alt="대책위원회" />
            <p>
                아비도스는 과거 재정 상황 악화로 인해 학교의 독립적인 행정기관을 폐지하고 모든 권한과 의무를 학생회로 이관하였습니다.
                이후 학생회가 비상대책위원회 체제로 전환됨에 따라 본 위원회가 학교의 행정·외교·군사 등의 모든 권한을 임시적·제한적으로 위임 받았습니다.
                현 대책위원회는 학교를 대표할 수 있는 유일한 기관이고 그 구성원은 학교 전체의 구성원과 같습니다.
            </p>

            <p>빠른 시일 내로 학교의 재정·인력 문제를 해결해 학교 행정을 정상화할 수 있도록 노력하겠습니다.</p>

        </div>
    );
}

function TeacherList() {
    return (
        <div className="teacher-list member-card-list">
            {teacherListData.map((element, index) =>
                <div key={index}>
                    {index === 0 ? <img src={`${process.env.PUBLIC_URL}/img/profile/clearskyProfile.png`} alt="clearSkyProfile.png" /> : null}
                    {index === 1 ? <img src={`${process.env.PUBLIC_URL}/img/profile/blankProfile.png`} alt="blankProfile" /> : null}
                    {index === 2 ? <img src={`${process.env.PUBLIC_URL}/img/profile/blankProfile.png`} alt="blankProfile" /> : null}

                    <h3>{element.name}</h3>
                    <p>나이: {element.age}</p>
                    <p>소속: {element.institute}</p>
                    <p>학력: {element.college}</p>
                    <p>전공: {element.major}</p>
                    <p>이메일: {element.email}</p>


                </div>
            )}
        </div>
    )
}

function StudentList() {
    return (
        <div className="student-list member-card-list">
            {studentListData.map((element, index) =>
                <div key={index}>
                    {index === 0 ? <img src={`${process.env.PUBLIC_URL}/img/profile/hoshinoProfile.png`} alt="hoshinoProfile" /> : null}
                    {index === 1 ? <img src={`${process.env.PUBLIC_URL}/img/profile/shirokoProfile.png`} alt="shirokoProfile" /> : null}
                    {index === 2 ? <img src={`${process.env.PUBLIC_URL}/img/profile/nonomeProfile.png`} alt="nonomeProfile" /> : null}
                    {index === 3 ? <img src={`${process.env.PUBLIC_URL}/img/profile/serikaProfile.png`} alt="serikaProfile" /> : null}
                    {index === 4 ? <img src={`${process.env.PUBLIC_URL}/img/profile/ayaneProfile.png`} alt="ayaneProfile" /> : null}

                    <h3>{element.name}</h3>
                    <p>학년: {element.grade}</p>
                    <p>생일: {element.birth}</p>
                    <p>신장: {element.height}</p>
                    <p>화기: {element.gun}</p>
                    <p>타입: {element.type}</p>
                    <p>특기: {element.specialty}</p>


                </div>
            )}
        </div>
    )
}


export { PrincipalGreeting, StudentList, TeacherList, EduTarget, EduCourse, Symbol, Committee };