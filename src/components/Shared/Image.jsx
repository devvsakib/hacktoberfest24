const Image = () => {
    return <div className='relative h-full p-1 group' key={book.name}>
        <div className='gradientBorderBox h-full overflow-hidden'>
            <img className='featureImg group-hover:bg-orange-200' src={book.src} />
            <div className='z-40 absolute bg-gradient-to-t from-black text-white bottom-0 left-0 right-0 text-center py-10 opacity-0 h-0 group-hover:h-full group-hover:opacity-100 transition-all duration-300 grid place-content-center rounded-[10px]'>
                <h2 className='text-2xl break-words'>{book.name}</h2>
                <button
                    className='mt-1'
                    onClick={() => {
                        document.getElementById('my_modal_2').showModal()
                        setSelectedBook(book.name)
                    }}>কিনুন</button>
            </div>
        </div>
    </div>;
};

export default Image;
