export const isRequired = (value) => ({
    hasPassed: !!value,
    message: 'Please fill in the form'
})

export const charLimit = (limit) => (value) => ({
    hasPassed: value.length <= limit,
    message: 'You are over the limit'
})

export const emailValidation = (value) => ({
    hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
    message: 'Wrong email'
})

export const passwordValidation = (value) => ({
    hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(value),
    message: 'Password need include number and hight letter'
})
