const CocktailItem = ( props ) => {
    console.log(props)
        return (
        <section className="wrapper">
            <div className="cocktailInfo">
                <div className="cocktailImageContainer"> 
                    <img className="cocktailImage" src= { props?.cocktailData?.strDrinkThumb } /> 
                </div>
                <div className="cocktailDetails">
                    <h2 className="cocktailName"> { props?.cocktailData?.strDrink } </h2>
                    <p className="cocktailInstructions"> { props?.cocktailData?.strInstructions }</p>
                </div>                
            </div>
        </section>
    )
}
export default CocktailItem;