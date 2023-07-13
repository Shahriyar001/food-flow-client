import React, { useEffect, useState } from 'react';
import SpecialRacipeCard from './SpecialRacipeCard';
import img from "../../../assets/images/underline1.png";
import { useQuery } from 'react-query';
import FoosModal from './FoodModal/FoosModal';

const SpecialRacipe = () => {
    const [singpro, setSingpro] = useState(null);
    console.log(singpro)

    const { data: products = [] } = useQuery({
        queryKey: ['dishes'],
        queryFn: () => fetch('https://food-flow-server.vercel.app/dishes')
            .then(res => res.json())
    })

    // const [products, setProducts] = useState();
    // useEffect(() => {
    //     fetch('Dishes.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])
    // console.log(products)

    // https://food-flow-server.vercel.app/dishes
    return (
        <div className='mt-10 ml-16'>
            <div>
                <p className='text-xl italic my-2 text-red-600 font-semibold'>Special Recipes</p>
                <h1 className='text-3xl my-2 font-bold'>TEAST OF PRECIOUS</h1>
                <img className='w-80 mt-2 mb-6 opacity-60' src={img} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    products?.map(product => <SpecialRacipeCard
                        key={product._id}
                        product={product}
                        setSingpro={setSingpro}
                    ></SpecialRacipeCard>)
                }
            </div>
            {
                singpro &&
                <FoosModal
                    singpro={singpro}
                    setSingpro={setSingpro}
                ></FoosModal>
            }
        </div>
    );
};

export default SpecialRacipe;