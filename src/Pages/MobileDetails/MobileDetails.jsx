import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Button from '../../Components/Ui/Button';
import { FaCartPlus } from 'react-icons/fa';
import { MdBookmarkAdd } from 'react-icons/md';

const MobileDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();    
    const singleMobileData = data.find(mobile => mobile.id === parseInt(id));
    const {name, model, image, description, camera_info, brand, price, storage} = singleMobileData;
    
    return (
        <div className='py-10 px-8'>
            <img src={image} className="w-full mx-auto md:w-auto" alt="" />
            {/* Title */}
            <div className='my-6 flex justify-between'>
                <h1 className='text-5xl'>{name}</h1>
                <div className='flex gap-4'>
                    <Button text={<FaCartPlus />}></Button>
                    <Button text={<MdBookmarkAdd />}></Button>
                </div>
            </div>
            {/* Description */}
            <div>
                <h2 className='text-4xl'>Details:</h2>
                <h4 className='my-3'><span className='text-xl font-semibold'>Brand: </span>{brand}</h4>
                <h4 className='my-3'><span className='text-xl font-semibold'>Model: </span>{model}</h4>
                <h4 className='my-3 flex gap-2 items-top'><span className='text-xl font-semibold'>Storage:</span><span>{
                    storage.map(s => <p key={s}>{s}</p>)
                }</span></h4>
                <h4 className='my-3 flex gap-2'><span className='text-xl font-semibold'>
                        Price: </span>
                        <span>
                            <p>256GB {price['256GB']}</p>
                            <p>256GB {price['256GB']}</p>
                        </span>
                </h4>
                <h4 className='my-3'><span className='text-xl font-semibold'>Camera Info: </span>{camera_info}</h4>
                <h4 className='my-3'><span className='text-xl font-semibold'>Description: </span>{description}</h4>
            </div>
        </div>
    );
};

export default MobileDetails;