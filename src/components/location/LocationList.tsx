import { LocationListStyle } from './LocationList.styles';


// companent

import { Location } from '../../Api/Schemas/location';
import { LocationElement } from './LocationElement';

export const LocationList = (props: { locations: Location[] }) => {
    return (
        <LocationListStyle>
            <div className='d-flex flex-wrap justify-content-center'>
                {
                    props.locations.map((location) => {
                        return (
                            <LocationElement location={location} key={location.id} />
                        )
                    })
                }
            </div>
        </LocationListStyle>
    )
}
