import './Error404.css'
function Error404(){

    return(
        <div className="error-404">
            <img src={`${process.env.PUBLIC_URL}/img/404.png`} alt="404"/>
            <p>
                모래폭풍으로 인한 데이터 서버 손상으로 현재 일부 페이지를 접근할 수 없습니다.<br/>
                빠른 시일 내로 복구될 수 있도록 노력하겠습니다.
            </p>
            {/* <a href="https://open.kakao.com/o/gy0Tm3Ud">카카오톡 오픈 채팅방</a> */}
        </div>
    )
}

export default Error404;