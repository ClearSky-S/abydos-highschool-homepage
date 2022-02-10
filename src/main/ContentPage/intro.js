import { studentListData, teacherListData } from "./data/memberDatas"
import './memberCard.css'

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


export { StudentList, TeacherList };