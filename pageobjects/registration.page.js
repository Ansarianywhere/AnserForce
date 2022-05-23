import { RerunFormatter } from "@cucumber/cucumber";

class Registration {

    get reName(){ return $('#name'); }

    get reEmail(){ return $('#email'); }

    get rePhone(){ return $('#phone'); }

    get reCompanyName(){ return $('#company');}

    get btnshowPlans(){ return $('#register');}

    async registrationData (Name,Email,Phone,CompanyName){

        
        (await this.reName).setValue(Name)
        await this.reEmail.setValue(Email);
        await this.rePhone.setValue(Phone);
        await this.reCompanyName.setValue(CompanyName);

    }

    async clcik_ShowPlansBtn(){

        await (await this.btnshowPlans).click();

    }
}

export default new Registration();