import Select from 'react-select'

const partySizeOptions = Array.from({ length: 20 }, (_, index) => ({ value: index + 1, label: `${index + 1}` }));



function PartySizeDropDown ({selectedPartySize, onChange}) {

    return (
        <>
        <Select
        options={partySizeOptions}
        value={{ value: selectedPartySize, label: `${selectedPartySize}`}}
        onChange={onChange}
        placeHolder ="Select party size"
        />
        </>
    )
}

export default PartySizeDropDown
