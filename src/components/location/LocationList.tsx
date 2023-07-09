import { LocationListStyle } from './LocationList.styles';


// companent

import { Location } from '../../Api/Schemas/location';
import { LocationElement } from './LocationElement';
import { SkeletonLoading } from '../SkeletonLoading';
import { useEffect, useState } from 'react';

export const LocationList = (props: { locations: Location[] }) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const skeletonDuration = 400;
        // Hata tetikleme süresi (örneğin 5 saniye)
        const errorDuration = 3000;

        const skeletonTimer = setTimeout(() => {
            setLoading(props.locations.length > 0 ? false : true);
        }, skeletonDuration);

        const errorTimer = setTimeout(() => {
            setLoading(false);
            setError(props.locations.length > 0 ? false : true);
        }, errorDuration);

        return () => {
            clearTimeout(skeletonTimer);
            clearTimeout(errorTimer);
        };
    }, [props.locations]);


    return (
        <>
            {error &&
                <div className="container p-5">
                    <div className="alert alert-danger" role="alert">
                        Error loading locations
                    </div>
                </div>

            }

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
                                    key={index}
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
        </>
    )
}
