import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-96 ">
        <img
          src="/assets/images/banner/1.jpg"
          className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5  ">
          <div className="text-white space-y-4 w-1/2 mb-8 mt-auto">
            <h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-y-4 md:space-x-4">

<Link to={'/Services'}><button className="btn btn-secondary "> Discover More</button></Link>
             <Link to={'/blog'}>
             <button className="btn btn-secondary btn-outline">Latest Project</button>
             </Link>

            </div>
          </div>
          <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide6" className="btn btn-circle bg-pink-500 ">❮</a>
            <a href="#slide2" className="btn btn-circle bg-pink-500 ">❯</a>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-96">
        <img
          src="/assets/images/banner/2.jpg"
          className="w-full rounded-xl" />
        <div className="absolute rounded-xl  h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5">
          <div className="text-white space-y-4 w-1/2 mt-auto mb-5">
            <h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-y-4 md:space-x-4">

              <button className="btn btn-secondary "> Discover More</button>
              <button className="btn btn-secondary btn-outline">Latest Project</button>

            </div>
          </div>
          <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide1" className="btn btn-circle bg-pink-500">❮</a>
            <a href="#slide3" className="btn btn-circle bg-pink-500">❯</a>
          </div>

        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-96">
        <img
          src="/assets/images/banner/3.jpg"
          className="w-full rounded-xl" />
        <div className="absolute rounded-xl  h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5">
          <div className="text-white space-y-4 w-1/2 mb-8 mt-auto">
            <h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="space-y-4 md:space-x-4"><button className="btn btn-secondary "> Discover More</button>
              <button className="btn btn-secondary btn-outline">Latest Project</button>
            </div>
          </div>
          <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide2" className="btn btn-circle bg-pink-500 ">❮</a>
            <a href="#slide4" className="btn btn-circle bg-pink-500 ">❯</a>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-96">
        <img
          src="/assets/images/banner/4.jpg"
          className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5">
            <div className="text-white space-y-4 w-1/2 mb-8 mt-auto">
<h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-y-4 md:space-x-4 "><button className="btn btn-secondary "> Discover More</button>
<button className="btn btn-secondary btn-outline">Latest Project</button>
</div>
            </div>
            <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide3" className="btn btn-circle bg-pink-500 ">❮</a>
            <a href="#slide5" className="btn btn-circle bg-pink-500 ">❯</a>
            </div>
          </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full h-96">
        <img
          src="/assets/images/banner/5.jpg"
          className="w-full rounded-xl" />
      <div className="absolute rounded-xl h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5">
            <div className="text-white space-y-4 w-1/2 mb-8 mt-auto">
<h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-y-4 md:space-x-4"><button className="btn btn-secondary "> Discover More</button>
<button className="btn btn-secondary btn-outline">Latest Project</button>
</div>
            </div>
            <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide4" className="btn btn-circle bg-pink-500 ">❮</a>
            <a href="#slide6" className="btn btn-circle bg-pink-500 ">❯</a>
            </div>
          </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full h-96">
        <img
          src="/assets/images/banner/6.jpg"
          className="w-full rounded-xl" />
       <div className="absolute rounded-xl  h-full   flex  bottom-0 space-x-4 justify-between bg-gradient-to-r from-[#272626] to-[#1b1c1c17] w-full px-5">
            <div className="text-white space-y-4 w-1/2 mb-8 mt-auto">
<h2 className=" text-xl font-bold lg:text-5xl">Affordable Price For Car Servicing</h2>
<p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
<div className="space-y-4 md:space-x-4"><button className="btn btn-secondary "> Discover More</button>
<button className="btn btn-secondary btn-outline">Latest Project</button>
</div>
            </div>
            <div className="flex translate-y-1/2 transform bottom-0 space-x-3 mt-auto mb-10">
            <a href="#slide5" className="btn btn-circle bg-pink-500 ">❮</a>
            <a href="#slide1" className="btn btn-circle bg-pink-500 ">❯</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Banner;