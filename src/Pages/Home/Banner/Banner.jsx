import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mb-28 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl " />
        <div className="absolute rounded-xl flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-5xl font-bold text-white">
              Affordable  Price For Car  Servicing
            </h2>
            <p className="text-white my-4">
              There are many variations of passages of available, but  the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-5xl font-bold text-white">
              Affordable  Price For Car  Servicing
            </h2>
            <p className="text-white my-4">
              There are many variations of passages of available, but  the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-5xl font-bold text-white">
              Affordable  Price For Car  Servicing
            </h2>
            <p className="text-white my-4">
              There are many variations of passages of available, but  the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center lg:ps-12 ps-2 h-full   left-0 top-0 right- bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="lg:ps-8 ps-2 w-full lg:w-1/2">
            <h2 className="lg:text-7xl text-5xl font-bold text-white">
              Affordable  Price For Car  Servicing
            </h2>
            <p className="text-white my-4">
              There are many variations of passages of available, but  the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
                Discover More
              </button>
              <button className="outline outline-slate-100 border-1 text-white px-4 py-1 ">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
