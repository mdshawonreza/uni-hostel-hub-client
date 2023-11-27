
const Banner = () => {
    return (
        <div className="hero w-full h-[30vh] md:h-[90vh]" style={{ backgroundImage: 'url(https://i.ibb.co/QMRG7Wn/bannar.jpg)', }} >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl text-white">
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">Where Comfort Meets Community</h1>
                <p className="mb-5 text-sm md:text-base">Experience the perfect blend of comfort and camaraderie at UniHostelHub. Where every stay is a welcoming journey shared with fellow travelers.</p>
                <div className="form-control  ">
                    <div className="join">
                        <input type="text" placeholder="Search…" className="input input-bordered join-item text-orange-600 font-medium w-full" />
                        <button className="btn btn-square join-item bg-yellow-400 hover:bg-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;