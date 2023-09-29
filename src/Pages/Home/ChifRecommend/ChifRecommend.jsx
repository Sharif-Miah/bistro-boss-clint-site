import TitleSheard from '../../../Component/TitleSheard';
import img1 from '../../../assets//menu/salad-bg.jpg'
import img2 from '../../../assets/menu/pizza-bg.jpg'
import img3 from '../../../assets/menu/soup-bg.jpg'

const ChifRecommend = () => {
  return (
    <section className='mb-16'>

    <TitleSheard subHeading="---Should Try---" heading="CHEF RECOMMENDS"/>

        <div className='grid md:grid-cols-3 gap-4 '>
      {/* Card 1  */}
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">add to card</button>
          </div>
        </div>
      </div>
      {/* Card 2  */}
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">add to card</button>
          </div>
        </div>
      </div>
    {/* Card 3  */}
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img
            src={img3}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">Caeser Salad</h2>
          <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-primary uppercase">add to card</button>
          </div>
        </div>
      </div>


    </div>
    </section>
  );
};

export default ChifRecommend;
