
class HomePage{

     openHomePage (){
            browser.maximizeWindow();
            browser.url("https://tesing-answerforcewebsite.appspot.com/");
            console.log("navigate is sucessful");
    
    }
        //webelements

       get btnSeePrices(){ return $("(//*[@class='btn btn-fill btn-lg mr-8'])") }


}

export default new HomePage();


