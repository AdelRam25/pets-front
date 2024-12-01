export default () => {
    return (
        <>
        <div className="shadow-xl rounded border">
            <img src={pet.image}/>
            <div className="p-4">
                <h1 className="text-xl font-semibold line-clamp-1">{pet.name}</h1>
                <div className="flex text-center justify-between mt-1">
                    <h4 className="mt-2">{pet.price}$</h4>
                    
                </div>
            </div>
        </div>
        </>
    )
};
