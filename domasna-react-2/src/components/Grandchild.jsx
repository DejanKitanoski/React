const Grandchildren = ({name,hobby})=>{
    return(
        <div className="grand">
            <p>
                <strong>{name}</strong> | Hobby:{hobby}
            </p>

        </div>
    )
}

export default Grandchildren