import loadingImg from "../images/gif/loading-arrow.gif"
const Loading = e => {
    return (
        <div className="d-flex justify-content-center align-items-center loading">
            <h1>
                <img src={loadingImg} alt="loading.gif" className="img-fluid" />
            </h1>
        </div>
    )


}

export default Loading