

export const PersonCard = ( props ) => {

    return (
        <>
            <h1>{ props.lastName }, { props.firstName } </h1>
            <p> Age: { props.age } </p>
            <p> HairColor: { props.hairColor } </p>
        </>
    )



}

