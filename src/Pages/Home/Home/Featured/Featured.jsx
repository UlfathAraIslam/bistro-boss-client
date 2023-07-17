import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featuredItem bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading='check it Out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36  ">
                <div>
                <img src={featuredImg}alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus placeat magnam corporis ipsum veritatis harum esse dolores labore, doloribus nesciunt, consequuntur amet exercitationem. Rem, nulla reiciendis cupiditate tempora odio quo minus id corporis, saepe atque consequuntur? Voluptatibus nesciunt corrupti quod temporibus tenetur, suscipit facere saepe ipsa laudantium minima ab inventore.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;