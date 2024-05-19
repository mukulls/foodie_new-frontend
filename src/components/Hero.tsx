import home2 from "../assets/home2.png";
const Hero=()=>{
  
    return(
        <div>
        <div className="flex justify-between items-center bg-black text-white h-34 ">
      <div className="text-left ml-20 ">
        <h1 className="text-7xl text-green-600 font-bold mr-64">Tasty food in your neighbourhood</h1>
        <p className="text-3xl mt-4">Order from your favorite restaurant now</p>
      </div>
      <div className="flex-shrink-0">
        <img src={home2} alt="Image" className="w-full h-full object-fit transform scale-125 -ml-16 mt-10" />
      </div>
    </div>
    </div>
    );
};
export default Hero;