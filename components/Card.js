
const Card = ({ imageUrl, description }) => {
    return (
            <div className="overflow-hidden shadow-lg rounded-lg h-auto w-80 md:w-80 p-4 hover:shadow-2xl bg-secondary">
                <div href="#" className="w-full block h-full">
                    <lord-icon
                        src={imageUrl}
                        trigger="loop"
                        colors="primary:#121331,secondary:#08a88a"
                        style={{width: '100%', height: '50rem', maxHeight: '15rem', objectFit: 'cover'}}
                        // class="max-h-60 w-full object-cover"
                        >
                    </lord-icon>
                    <div className="w-full">
                        <p className="text-indigo-500 text-center text-md font-medium break-all">
                            {description} 
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Card;