import { BtnFilterIcon, BtnFilterStye } from "./FilterByStatusItem.styles"

export const FilterByStatusItem = (
    props: {
        status: {
            name: string,
            active: boolean,
            colorSet: {
                color: string,
                hovercolor: string,
                activecolor: string,
                border: string,
            },
        },
        location: string
    }
) => {

    return (
        <>
            <div className="filter_col">
                
                <BtnFilterStye
                    active={props.status.active ? 1 : 0}
                    color={props.status.colorSet.color}
                    hovercolor={props.status.colorSet.hovercolor}
                    activecolor={props.status.colorSet.activecolor}
                    border={props.status.colorSet.border}
                    href={`/characters?location=${props.location}${props.status.name.toLowerCase() === "all" ? "" : `&status=${props.status.name.toLowerCase()}`
                        }`}
                >
                    <BtnFilterIcon
                        status={props.status.name}
                        style={{
                            backgroundColor: props.status.active ? undefined : props.status.colorSet.activecolor,
                        }}
                    ></BtnFilterIcon>
                    {props.status.name}
                </BtnFilterStye>
            </div>
        </>
    )
}