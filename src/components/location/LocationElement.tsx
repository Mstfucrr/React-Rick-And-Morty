// companent

import { Location } from '../../Api/Schemas/location';
import { LocationItem, LocationItemName, ColInfo, ColTitle } from './locationElement.styles';


export const LocationElement = (props: { location: Location }) => {
    return (
        <LocationItem className="p-4 d-block" href={`/characters?location=${props.location.id}`}>

            <LocationItemName>
                {props.location.name}
            </LocationItemName>
            <div className='row'>
                <ColTitle className='col-4'>
                    <div>
                        Type
                    </div>
                    <div>
                        Dimension
                    </div>
                    <div>
                        Resident Count
                    </div>

                </ColTitle>
                <ColInfo className='col-8'>
                    <div>
                        : {props.location.type}
                    </div>
                    <div>
                        : {props.location.dimension !== "unknown" ? props.location.dimension : "-"}
                    </div>
                    <div>
                        : {props.location.residents.length}
                    </div>
                </ColInfo>
            </div>
        </LocationItem>
    )
}