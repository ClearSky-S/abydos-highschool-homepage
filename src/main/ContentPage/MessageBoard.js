import { useState } from 'react';
import './MessageBoard.css';


function Row({ rowData, setIndex, isNotice }) {
    return (
        <tr
            onClick={() => {
                if (rowData.content === "") { alert("열람권한이 없습니다.") }
                else { setIndex(rowData.index) }
            }}
        >
            <td>{isNotice ? <div className="notice">공지</div> : rowData.index}</td>
            <td>{rowData.title}</td>
            <td>{rowData.writer}</td>
            <td>{rowData.date}</td>
            <td>{rowData.view}</td>
        </tr>
    )
}

function Post({ element, index, setIndex }) {
    return (
        <div className="post">
            {/* <div>law, search, total</div> */}
            <table>
                <colgroup>
                    <col width="20%" />
                    <col width="*" />

                </colgroup>

                <tbody>
                    <tr> <td>작성자</td><td>{element.writer}</td> </tr>
                    <tr> <td>제목</td><td>{element.title}</td> </tr>
                    <tr> <td>작성일</td><td>{element.date}</td> </tr>
                    <tr> <td>내용</td><td>{element.content}</td> </tr>
                    <tr> <td>첨부파일</td><td></td> </tr>
                </tbody>
            </table>
            <div className="bottom">
                <button
                    onClick={() => { setIndex(-1) }}
                >목록</button>
            </div>
        </div>

    );
}


function MessageBoard({ rawData }) {
    const [data] = useState([...rawData].reverse());
    // console.log(data);
    const [boardPage, setBoardPage] = useState(1);
    const [index, setIndex] = useState(-1);
    const [rowPerPage] = useState(10);
    let pageChangeButtonList = [];
    for (let i = 0; i < Math.floor(Math.floor(data.length - 1) / rowPerPage) + 1; i++) {
        pageChangeButtonList.push(
            <div key={i}>
                <div
                    className={i === boardPage - 1 ? "active" : ""}
                    // key={i}
                    onClick={() => { setBoardPage(i + 1) }}
                >{i + 1}</div>
                <div>&nbsp;</div>
            </div>
        )

    }

    return (
        <div className="message-board">
            {index === -1 ?
                <div className="list">
                    {/* <div>law, search, total</div> */}
                    <table>
                        <colgroup>
                            <col width="7%" />
                            <col width="*" />
                            <col width="13%" />
                            <col width="15%" />
                            <col width="8%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((element, index) =>
                                element.isNotice === "TRUE" ? <Row key={index} rowData={element} setIndex={setIndex} isNotice={true} /> : null
                            )}
                            {data.slice((boardPage - 1) * rowPerPage, (boardPage) * rowPerPage).map((element, index) =>
                                <Row key={index} rowData={element} setIndex={setIndex} />
                            )}
                        </tbody>
                    </table>
                    <div className="pagination"><span>{pageChangeButtonList}</span></div>
                </div>
                :
                data.map((element, i) => {
                    return element.index === index ? <Post key={i} element={element} setIndex={setIndex} /> : null
                }
                )
            }

        </div>)
}
export default MessageBoard;