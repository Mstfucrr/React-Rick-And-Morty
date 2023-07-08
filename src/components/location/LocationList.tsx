import { LocationListStyle } from './LocationList.styles';


// companent

import { Location } from '../../Api/Schemas/location';
import { LocationElement } from './LocationElement';
import { SkeletonLoading } from '../SkeletonLoading';
import { useEffect, useState } from 'react';

export const LocationList = (props: { locations: Location[] }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(props.locations.length === 0);
    }, [props.locations]);


    return (
        <LocationListStyle>
            <div className='d-flex flex-wrap justify-content-center'>
                {loading ? (
                    <>
                        {Array.from(Array(20).keys()).map((_, index) => (
                            <SkeletonLoading
                                width={440}
                                height={140}
                                style={{
                                    borderRadius: '15px'
                                }}
                                className="p-4 m-2"
                            />

                        ))}
                    </>
                ) : (
                    props.locations.map((location) => (

                        <LocationElement location={location} key={location.id} />
                    ))
                )}
            </div>
        </LocationListStyle>
    )
}
