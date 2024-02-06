const onInputChange = (e, value, setValue) => {
    setValue({...value, [e.target.name]:e.target.value})
}

export default onInputChange;