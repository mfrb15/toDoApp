import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, SetFormState] = useState(initialForm)


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        SetFormState({
            ...formState,
            [name]: value
        });
    }

const onResetForm = () => {
    SetFormState(initialForm);


}

    return {
        ...formState,
        formState, 
        onInputChange,
        onResetForm
    }

}
