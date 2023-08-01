import Select from 'react-select'

const partySizeOptions = Array.from({ length: 20 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }));



function partySizeDropDown ({selectedPartySize, onChange}) {

    return (
        <>
        <Select>
            options={partySizeDropDown}
            value={{ value: selectedPartySize, label: `${selectedPartySize}`}}
            onChange={onChange}
            placeHolder ="Select party size"
        </Select>

        </>
    )
}

export default partySizeDropDown
