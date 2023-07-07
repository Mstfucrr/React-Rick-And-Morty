import { BtnFilterIcon, BtnFilterStye } from "./FilterByStatusItem.styles"

export const FilterByStatusItem = (
    props: {
        status: {
            name: string,
            active: boolean,
            colorSet: {
                color: string,
                hoverColor: string,
                activeColor: string,
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
                    active={props.status.active}
                    color={props.status.colorSet.color}
                    hoverColor={props.status.colorSet.hoverColor}
                    activeColor={props.status.colorSet.activeColor}
                    border={props.status.colorSet.border}
                    href={`/characters?location=${props.location}${props.status.name.toLowerCase() === "all" ? "" : `&status=${props.status.name.toLowerCase()}`
                        }`}
                >
                    <BtnFilterIcon active={props.status.active}
                        status={props.status.name}
                    ></BtnFilterIcon>
                    {props.status.name}
                </BtnFilterStye>
            </div>
        </>
    )
}