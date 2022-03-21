
import { AbstractControl, FormControl, ValidatorFn } from "@angular/forms";

export class MyValidator {

    static myValidation(fc: AbstractControl): any {
        if (fc.value == "suresh") {
            return { "SureshNotAllowed": true }
        } return null;
    }

}
export function confirmPasswordValidator(fc: AbstractControl): any {
    const password = fc.get("password");
    const confirmPassword = fc.get("confirmPassword");
    if (password?.value != confirmPassword?.value) {
        return { "passwordNotMatch": true }
    }
    return null;
}
export function blue(forbiden: string): ValidatorFn {
    return (fc: AbstractControl): { [key: string]: boolean } | null => {
        if (fc.value == forbiden) {
            return { "wrongColor": true }
        } return null;
    }
}
