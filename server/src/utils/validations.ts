export function ValidateFormRegister(data: any) {

    let errors: any = {};
    let message: string = "This field is required!"

    if (!data) {
        errors.path = ["username", "fullname", "email", "password"];
        errors.message = message
    }

    if (!data.username) {
        errors.path = ["username"]
        errors.message = message
    }

    if (!data.fullname) {
        errors.path = ["fullname"]
        errors.message = message
    }

    if (!data.email) {
        errors.path = ["email"]
        errors.message = message
    } else if (!checkEmail(data.email)) {
        errors.path = ["email"]
        errors.message = "Ivalid Email"
    }

    if (!data.password) {
        errors.path = ["password"]
        errors.message = message
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}

export function ValidateFormLogin(data: any) {
    let errors: any = {}
    let message = "This field is required";
    if (!data) {
        errors.path = ["email", "password"]
        errors.message = message
    }

    if (!data.email) {
        errors.path = ["email"]
        errors.message = message
    } else if (!checkEmail(data.email)) {
        errors.path = ["email"]
        errors.message = "Ivalid Email"
    }

    if (!data.password) {
        errors.path = ["password"]
        errors.message = message;
    } else if (!validatePassword(data.password)) {
        errors.path = ["password"]
        errors.message = "Password must be eight characters or longer"
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    };
}

export function checkEmail(email: string) {

    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    if (!validEmail) return false

    return true

}

export function validatePassword(password: string) {
    const valid = /(?=.{8,})/.test(password);
    return valid
}