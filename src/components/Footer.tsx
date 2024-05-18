const Footer = () => {
    return (
      <div className="bg-black py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight ml-10">
            foodie
          </span>
          <span className=" text-white tracking-tight flex gap-10 mr-16">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Us</span>
            <span>About Us</span>
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;