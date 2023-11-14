
import { signup } from "./Add data.cy"
import { forget } from "./Add data.cy"
import { login } from "./Add data.cy"
import { addUser } from "./Add data.cy"
import { Viewdealership } from "./Add data.cy"
import { addvehicle } from "./Add data.cy"
import { ViewServices } from "./Add data.cy"
import { addWaranty } from "./Add data.cy"
import { vieworder } from "./Add data.cy"
//import { financial } from "./Add data.cy"
import { leads } from "./Add data.cy"
import { payment } from "./Add data.cy"
import { addReview } from "./Add data.cy"
import { addcomplaint } from "./Add data.cy"
import { logout } from "./Add data.cy"
import { login2 } from "./Add data.cy"
import { Invalidloginwithpass } from "./Add data.cy"
                                    //////// Test Cases //////////////

describe('Carflys Website Test', function () {

    it('SignUp Page', () => {
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        signup()
        cy.wait(3000)
        login()
        cy.wait(3000)
        login2()
    })

    it('Seller Login', () => {
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        login()
    })
    it('Admin Login', () => {
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        login2()
    })
    it.only("Login With Invalid Password", ()=>{
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        Invalidloginwithpass()
    })
   
    it('Forget Button', () => {
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        forget()
    })

    it("2.1 Add User", () =>{
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        login2()
        addUser()
    })
    it("3. View Dealership", () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        Viewdealership()
    })

    it("4.1 Add Vehicle", () =>{
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        login()
        addvehicle()
    })

    it("5. View Services Check Editing Data", () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        ViewServices()
    })

    it("6.1 Add Warranty", () =>{
        cy.visit('https://carflys-frontend-new-dev.vercel.app/')
        cy.contains("Login").click()
        login()
        addWaranty()
    })
    it("7. View Order" , () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        vieworder()
    })
    it("8. Leads", () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        leads()
    })
    // it("9. financial Institute", () =>{
    //     cy.visit("https://carflys-frontend-new-dev.vercel.app/")
    //     cy.contains("Login").click()
    //     login()
    //     financial()
        
    // })
    it("10. Payment", () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        payment()
    })

    it("11.1Add Revenue " , () =>{
       cy.visit("https://carflys-frontend-new-dev.vercel.app/")
       cy.contains("Login").click()
       login()
       addRevenue()
       //cy.wait(10* second)
    })
    it("11.3 Add Expense " , () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        addExpense()
     })

     it("13.1 Add Review " , () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        addReview()
     })
     it("14.1 Add Complaint " , () =>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        addcomplaint()
     })
     
    it("Logout Button", ()=>{
        cy.visit("https://carflys-frontend-new-dev.vercel.app/")
        cy.contains("Login").click()
        login()
        logout() 

    })
})