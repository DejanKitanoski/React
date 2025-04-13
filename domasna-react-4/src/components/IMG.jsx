const CatImg = ({url}) => {
    return(
        <img src={url} alt="Cat" style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%'
        }}/>
    )
}
export default CatImg