import './Error404.css'
function Error404(){

    return(
        <div className="error-404">
            <img src="img/404.png" alt="404"/>
            <p>
                현재 작업 중인 페이지입니다.
                자세한 문의는 아래 링크로 부탁드립니다.
            </p>
            <a href="#">카카오톡 오픈 채팅방</a>
        </div>
    )
}

export default Error404;