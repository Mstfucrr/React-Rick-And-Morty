
import { FilterByStatusItem } from "./FilterByStatusItem";
import { CharacterListFilterTitle } from "./FilterByStatusList.styles";

export const FilterByStatusList = (
    props: {
        status: {
            name: string,
            active: boolean,
            colorSet: {
                color: string,
                hovercolor: string,
                activecolor: string,
                border: string,
            }

        }[],
        location: string
    }

) => {




    return (
        <>
            <div className="d-flex flex-column w-100 pl-5 pt-5 overflow-auto">
                <CharacterListFilterTitle>
                    Filter by status:
                </CharacterListFilterTitle>

                <div className="row w-25 justify-content-start flex-nowrap" style={{ minWidth: '400px' }}>

                    {props.status.map((status) => {
                        return (
                            <FilterByStatusItem status={status} location={props.location} key={status.name} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}
