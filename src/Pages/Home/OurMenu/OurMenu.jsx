import './OurMenu.css'
import img1 from '../../../assets/home/featured.jpg'
import TitleSheard from '../../../Component/TitleSheard';

const OurMenu = () => {
  return (
    <section className='mb-16'>
        <TitleSheard subHeading="---Check it out---" heading="FROM OUR MENU"/>
        <div
      className="hero h-[700px] bg-img "
    >
        
      <div className="hero-overlay bg-opacity-60"></div>
      
      <div className=" grid grid-col-1 md:grid-cols-2 gap-4 text-center text-neutral-content">

    <div>
        <img className='w-[500px] ml-4' src={img1} alt="" />
    </div>

        <div className="max-w-md ml-8">
          <h1 className="mb-5 text-2xl text-left">Septembar 20, 2023</h1>
          <h1 className="mb-5 text-2xl text-left uppercase">WHERE CAN I GET SOME?</h1>
          <p className="mb-5 text-left">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className='text-left'>
          <button className="btn uppercase bg-opacity-0 hover:bg-opacity-0 text-white border-0 border-b-4">red more</button>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default OurMenu;
