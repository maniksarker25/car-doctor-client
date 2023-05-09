import person from "../../../assets/images/about_us/person.jpg";
import perts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero lg:h-[600px] bg-base-200 mb-20">
      <div className="hero-content flex-col lg:flex-row gap-32 ">
        <div className="lg:w-1/2 relative">
          <img src={person} className="lg:w-3/4  rounded-lg shadow-2xl" />
          <img src={perts} className="lg:w-1/2  absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className="lg:w-1/2 ">
            <h3 className="text-3xl font-semibold text-red-500">About Us</h3>
          <h1 className="text-3xl lg:text-5xl mt-6 font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="bg-orange-600 px-4 py-2 rounded-md mr-5 text-white font-semibold">
                Get more info
              </button>
        </div>
      </div>
    </div>
  );
};

export default About;
