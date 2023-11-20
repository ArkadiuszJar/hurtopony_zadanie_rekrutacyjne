const TireResultsView = ({replaceable}: {replaceable: boolean}) => {
    return (
        <div>
            <p>{replaceable ? "Yes" : "No"}</p>
        </div>
    )
}

export default TireResultsView