import React from 'react';
import Phone from './Phone';

const PhonesContainer = ({phones}) => {
    return (
        <div>
            <div className='p-5 md:pb-24  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    phones.map(phone => <Phone
                        key={phone.id}
                        phone={phone}
                    ></Phone>)
                }
            </div>
        </div>
    );
};

export default PhonesContainer;