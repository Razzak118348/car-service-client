
const About = () => {
    return (
        <div>
<div className="hero  my-20">
  <div className=" hero-content flex flex-col lg:flex-row">
   <div className="lg:w-1/2 relative ">
   <img
      src="/assets/images/about_us/person.jpg"
      className="w-3/4 rounded-lg shadow-2xl" />
      <img src="/assets/images/about_us/parts.jpg"  className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-4  border-white" alt="" />
   </div>
    <div className="lg:w-1/2 mt-16 lg:mt-0 space-y-4">
      <h1 className="text-xl lg:text-2xl font-bold">About us</h1>
      <h1 className="text-xl font-bold lg:text-4xl">We are qualified & of experience in this field</h1>
      <p className="py-6">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
    </p>
    <p>
      The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
      </p>
      <button className="btn btn-secondary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;