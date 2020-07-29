import LoginPage from '../Pages/LoginPage';
import userJsons from  '../usersJsons';
import LoginPageSelectors from '../PagesSelectors/LoginPageSelectors';

const LoginTest = () => {
    const users = userJsons.Users;
    // random 0-3
    let numOfAcceptedUser = Math.floor(Math.random() * 4);
    
    let arrayOfUsers = [...users];
    
    const loginPage = new LoginPage();

    describe('Random Login Test', () => {
        it('Open Login page', () => {
            loginPage.visit();
        });
    
        it('Fill Fields', () => {
            loginPage.fillField(arrayOfUsers[numOfAcceptedUser].userName, LoginPageSelectors, "USER_NAME");
            loginPage.fillField(arrayOfUsers[numOfAcceptedUser].password, LoginPageSelectors, "PASSWORD");
            // loginPage.fillField('standard_user', LoginPageSelectors, 'USER_NAME');
            // loginPage.fillField('secret_sauce', LoginPageSelectors, 'PASSWORD');

            loginPage.loginButton();
        });    
        
        it('Assert Is Login Success', () => {
            let isFailed = loginPage.assertIfLogin();
                // if(isFailed) {    
                //     Cypress.runner.stop();
                // }
        });
    });
}
export default LoginTest;