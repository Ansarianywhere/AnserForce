class Verification{

    get choose_plan(){ return $("(//*[@class='btn btn-fill full-btn'])[1]"); }

    get s_company_Name(){ return $("#companyName");}

    get s_conatct_Name(){ return $("#contactName");}

    get s_email (){return $("#email"); }
   
    get s_phone (){return $("#phone"); }

   
    async verify_Allfield(){
        
         var companyName = (await this.s_company_Name).getText();
         var contactName=(await this.s_conatct_Name).getText();
         var  email= (await this.s_email).getText();
         var phone = (await this.s_phone).getText();

         console.log('This values are given in registration field ' +`${companyName}  ${contactName}  ${email} ${phone}` );
        
    }


}

export default new Verification();