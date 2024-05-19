function Banner() {
    return (
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img
                    src="banner1.jpg"
                    alt="banner1"
                    className="img-fluid d-block w-100 banner"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="banner2.jpg"
                    alt="banner2"
                    className="img-fluid d-block w-100 banner"
                />
            </div>
            <div className="carousel-item">
                <img
                    src="banner3.jpg"
                    alt="banner3"
                    className="img-fluid d-block w-100 banner"
                />
            </div>
        </div>
    );
}

export default function Gallery() {
    return (
        <section>
            <Banner />
        </section>
    );
}
