const CatImg = ({url}) => {
    return(
        <div className="card">
        <img src={url} alt="Cat" style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%'
        }}/>
        </div>
    )
}
export default CatImg