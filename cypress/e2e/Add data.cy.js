import {faker} from "@faker-js/faker"

//// Sign Up Form data /////
const sign_up_email = faker.internet.email()                    //"Aziz@gmail.com"
const first_name = faker.name.firstName()                    // "Abdul"
const last_name =  faker.name.lastName()                     //"Aziz"
const user_type = "Seller"
///// Login Data ////
const user_email = "admin@gmail.com"
const user_password = "Carflys@123"
//// Wait ////
const millisecond = 1
const second = 1000
const minute = 60000
const x= user_email
                   ///// Sign Up //////
 export const signup = () => {
    cy.contains("Login").click()
    cy.contains("Register Here").click()
    cy.get('[placeholder="User Type"]').type(user_type, { force: true })
    cy.contains(user_type).click()
    cy.get('[placeholder="Enter First Name"]').type(first_name)
    cy.get('[placeholder="Enter Last Name"]').type(last_name)
    cy.get('[placeholder="Enter Cell Number"]').type("+1(372)-873-8728")
    cy.wait(3* second)
    cy.get('[placeholder="Enter Email"]').type(sign_up_email)
    cy.wait(3* second)
    cy.get('[placeholder="Enter Password"]').type("Carflys@123")
    cy.wait(3* second)
    cy.get('[placeholder="Confirm Password"]').type("Carflys@123")
    cy.contains('Sign up').click()
}
                                      ///// forget //////
export const forget= () =>{
    cy.contains('Forgot Password?').click()
    cy.get('[placeholder="Enter Email"]').type('usama@gmail.com')
    cy.contains('Continue').click()
}
                                           ///// login /////
export const login = () => {
   cy.wait(10* second)
// Email
    cy.get('[placeholder="Enter Email"]').type(sign_up_email)   
// Password
    cy.get('[placeholder="Enter Password"]').type(user_password)
    cy.get('[type="submit"]').click()
    cy.wait(3*second)
    cy.contains("Logout").click()

 }

 export const login2 = () => {
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type(x)    
 // Password
     cy.get('[placeholder="Enter Password"]').type(user_password)
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Dashboard")
     cy.contains("Login successful.").should("exist")        ///////Invalid Password
     cy.url().should('eq', 'https://carflys-frontend-new-dev.vercel.app/dashboard')
  }
  export const Invalidloginwithpass = () => {
    //cy.wait(10* second)
 // Email
     cy.get('[placeholder="Enter Email"]').type("usama@gmail.com")    
 // Password
     cy.get('[placeholder="Enter Password"]').type("Carflys@12345")
     cy.get('[type="submit"]').click()
     cy.wait(5*second)
     cy.contains("Invalid password.").should("not.exist")        ///////Invalid Password
     cy.url().should('eq', 'https://carflys-frontend-new-dev.vercel.app/auth/login')
  }

                                          ///////// 2.1 Add User ///////////
export const addUser = () => {

    cy.contains('2. User Management').click()
    cy.contains('2.1 Add Users').click()

    cy.get('[placeholder="Select User Type"]').click()
    cy.contains("Seller").click()
    // cy.get('[placeholder="Select Dealership"]').type('Test Dealership', { force: true } )
    // cy.contains("Test Dealership").click()
    cy.get('[placeholder="Enter First Name"]').type('Osama')
    cy.get('[placeholder="Enter Last Name"]').type('Abbasi')
    cy.get('[placeholder="Enter Email"]').type('osama@gmail.com')
    cy.get('[placeholder="Enter Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Confirm Password"]').type('Carflys@123')
    cy.get('[placeholder="Enter Cell Number"]').type('+1(738)-278-2373')
    cy.get('[placeholder="Select State Location"]').type('Washington', { force: true })
    cy.contains('Washington').click()
    cy.get('[placeholder="Enter Zip Code"]').type('46000')
    cy.get(".mantine-1avyp1d").contains("Drag and drop a file").attachFile('usama.jpg', { subjectType: 'drag-n-drop' })
    cy.get('[type="submit"]').click()

    ////////// View Users ///////
    cy.wait(10 * second)
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Filter by User"]').click()
    cy.contains("Seller").click()
    cy.get('[placeholder="Filter by Status"]').click()
    cy.contains("Active").click()
    cy.contains('2.2 View Users').click()
    cy.get('[placeholder="Search"]').type("osama@gmail.com")
}

                                    ////// 3.View Dealership /////////////
export const Viewdealership =() =>{
    cy.contains("3. View Dealerships").click()
// search field
    cy.get('[placeholder="Search"]').type("Test Dealership")
// Filters Dealer Type
    cy.get('[placeholder="Filter by Dealer Type"]').click()
       cy.contains("Whole Seller")
// Filters By Dealer Status
   cy.get('[placeholder="Filter by Status"]').click()
      cy.contains("Active").click()
// row selected on table and edit the data
cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click()

                        //// Edit Dealership ////
// Dealership Type
cy.get('[placeholder="Select Dealership Type"]').click()
   cy.contains("Whole Seller").click()
// Dealer Licence No 
cy.get ('[placeholder="Dealer License Number"]').clear().type("AD65156165")
// image cross
cy.get('.icon-tabler-x').click()
// Image Upload 
cy.get('[type="file"]').attachFile('dealershipImage1.jpg', { subjectType: 'drag-n-drop' })
// Next Step
cy.contains("Next step").click()
         ///// Sales and Tax Form ////
// sale and use tax field
cy.get('[placeholder="Enter Sales and Use Tax Number"]').clear().type("65168465")
// Trader Licenece field
cy.get('[placeholder="Enter Trader License Number"]').clear().type("46516231")
// files upload
//cy.get(".mantine-1ltm15n").find(".icon-tabler-x").click()
//cy.get(".mantine-Dropzone-inner").contains("Upload Sales and Use Tax in JPG/PNG/PDF format.").attachFile('jeep1.jpeg', { subjectType: 'drag-n-drop' })

// Next Step
cy.contains("Next step").click()
         ///// Dealership Information ///
// Name edit
cy.get('[placeholder="Enter Dealership Name"]').clear().type("Test Dealership")
// Dealership address
cy.get('[placeholder="Enter Dealership Address"]').clear().type("dealership@test.com")
// Dealership Zip Code
cy.get('[placeholder="Enter Dealership Zip Code"]').clear().type("54161")
// Dealership Phone #
cy.get('[placeholder="Enter Dealership Phone #"]').clear().type("+1 (651) 646-5165")
// Dealership Website 
cy.get('[placeholder="Enter Dealership Website"]').clear().type("www.dealership.com")
// Dealership Instagram Handle 
cy.get('[placeholder="Enter Dealership Instagram Handle"]').clear().type("www.instagram.com/dealership")
// Dealership Facebook Handle
cy.get('[placeholder="Enter Dealership Facebook Handle"]').clear().type("www.facebook.com/dealership")
// Dealership Logo
cy.get('.icon-tabler-x').click()
cy.get('[type="file"]').attachFile('dealership logo.png', { subjectType: 'drag-n-drop' })

}

                                        ////// 4.1 Add Vehicles /////
 export const addvehicle = () => {

    cy.contains("4. Vehicles").click()
    cy.contains("4.1 Add Vehicles").click()

    /////////// Add Vehicel Form ///////
    // Select Dealership
    cy.get('[placeholder="Select Dealership"]').type('Test Dealership', { force: true })
    cy.contains("Test Dealership").click()
    // VIN
    cy.get('[placeholder="Enter VIN"]').type("1C4HJXEG9MW851795", { force: true })
    // Decode VIN Button
    cy.get('.mantine-1swk166').click()
    // Retail price
    //cy.get('[placeholder="Enter Sale Price"]').clear().type('41000')
    cy.contains("Retail Price").parent().parent().find("input[type=number]").clear().type(45500)
    // cost price
    cy.get('[placeholder="Enter Cost Price"]').clear().type('39000')
    // Mileage
    cy.get('[placeholder="Enter Mileage"]').clear().type('19,400')
    //Add Vehicle button     
    cy.contains("Next step").click()

            ////////// Vehicle Description //////////
// Add Description
    cy.get('[class="ProseMirror"]').clear().type("This used car is a reliable and well-maintained vehicle that has been carefully inspected and serviced to ensure its optimal performance.")
// Next Step button    
    cy.contains("Next step").click()

// Photo Uploaded  
    cy.get(".mantine-1hss7nx").contains("Select images of vehicle (PNG, JPG, JPEG)").attachFile(['jeep1.jpeg','jeep2.jpeg'],{ subjectType: 'drag-n-drop'})
 cy.wait(5*second)
    cy.get(".mantine-1hss7nx").contains("Select 360 image of vehicle (PNG, JPG, JPEG)").attachFile('jeep1.jpeg',{ subjectType: 'drag-n-drop' })
//Added Vehicle Button//
    cy.contains("Submit").click()
    cy.wait(10 * second)
                                 ////// View Vehicle /////////
    cy.contains("4.2 View Vehicles").click()
// Serch field
    cy.get('[placeholder="Search"]').type("1C4HJXEG9MW851795")
// Filter by Status
    cy.get('[placeholder="Filter by Status"]').click()   
         cy.contains("Active").click()
// Filter by Phase
    cy.get('[placeholder="Filter by Phase"]').click()
         cy.contains("Available").click()
 }

                                     /////////// 5.View Services //////
export const ViewServices =() =>{

   cy.contains("5. View Services").click()
//edit data 
   cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-pencil").click() 
        //// enter Update service data/////
//service name
   cy.get('[placeholder="Enter Service Name"]').clear().type("Credit Disability")
//service typeqqqq
   cy.get('[placeholder="Select Service Type"]').click()
      cy.contains("Credit Disability").click()
//service enter price
    cy.get('[placeholder="Enter Price"]').clear().type("466")
//service enter validation period
    cy.get('[placeholder="Enter Validation Period"]').clear().type("12")
//service enter description  
    cy.get('[placeholder="Enter Service Description"]').clear().type("Service12")
//service update button
    cy.get('[type="submit"]').click()
}

                                //////////// 6.1 Add Waranty ///////////
export const addWaranty = () => {
    cy.contains('6. Warranty').click()
    cy.contains("6.1 Add Warranty").click()

    cy.get('[placeholder="Select Warranty Type"]').type("Silver", { force: true })
    cy.contains("Silver").click()

    cy.get('[placeholder="Enter Price"]').clear().type("2850")
    // In Monts
    cy.contains("Validation Period (Months)").parent().find("input[type='number']").clear().type(36)
   // In Miles
    cy.contains("Validation Period (Miles)").parent().find('input[type="number"]').clear().type(125000)

    cy.get('[placeholder="Enter Warranty Perks separated by Enter ↲"]').type("Powertrain components, such as the engine and transmission")
    cy.get('[type="submit"]').click()

    cy.wait(10 * second)
    ////////////////  View Waranty ///////////////
    cy.contains("6.2 View Warranty").click()
}

                                    //////////// 7.Orders //////////////////
export const vieworder =() => {
    cy.contains("7. Orders").click()
//search field
    cy.get('[placeholder="Search"]').type("")
//filters
    cy.get('[placeholder="Filter by Status"]').click()
       cy.contains("Pending")

//cy.wait(10*second)
// Clear filter button
    //cy.contains("Clear Filters").click()
}

                                   ////////////// 8.Leads //////////////
export const leads =()=>{
  cy.contains("8. Leads").click()
  cy.get('.rdt_TableBody').find("div").first().find(".icon-tabler-trash").click() 
  cy.contains("Cancel").click()
}
                                  ///////////// 9.Financial Institution //////////////
// export const financial=()=>{
//     cy.contains("9. Financial Institutes").click()
//     cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-settings").click()
//     cy.get('[name="recommendedCreditBureau.requirement"]').click()
// }

                                    //////////// 10.Payments ///////////////
export const payment =() =>{

     cy.contains("10. Payments").click()
// Search Field    
     cy.get('[placeholder="Search"]').type("")
// Filters
     cy.get('[placeholder="Filter by Status"]').click()
        cy.contains("Pending").click()
}

                                   //////  11.1 Add Revenue ////////
export const addRevenue= ()=>{
cy.contains("11. Accounting").click()
cy.contains("11.1 Add Revenue").click()

// Vehicle select
cy.get('[placeholder="Select Vehicle"]').click()
   cy.contains("2022 Jeep Wrangler Unlimited Willys").click()

// Reference type
cy.get('[placeholder="Enter Reference"]').type("Full Payment for 1C4HJXEG9MW851795 in Vehicle Order")        /// 1C4HJXDN7NW246787
// Reference Email 
cy.get('[placeholder="Enter Reference Email"]').type("admin@gmail.com")
// Reference Details 
cy.get('[placeholder="Enter Reference Details"]').type("Full Payment for 1C4HJXEG9MW851795 in Vehicle Order")
// Reference Date
cy.get('[placeholder="Pick Reference Date"]').type("October 25, 2023")
// Revenue Amount 
cy.get('[placeholder="Enter Revenue Amount"]').type("45,500")
// Revenue Details 
cy.get('[placeholder="Enter Revenue Details"]').type("Full Payment for 1C4HJXDN7NW246787")
// Add Revenue Button
cy.get('[type="submit"]').click()

cy.wait(10* second)
/////////////////  View Revenue //////////////
cy.contains("11.2 View Revenue").click()
cy.get('[placeholder="Search"]').type("1C4HJXDN7NW246787")
}

                                //////// 11.3 Add Expense  //////////////
export const addExpense=()=>{
cy.contains("11. Accounting").click()
cy.contains("11.3 Add Expense").click()

// select vehicle
cy.get('[placeholder="Select Vehicle"]').click()
   cy.contains("2022 Jeep Wrangler Unlimited Willys").click()

//Expense Type
cy.get('[placeholder="Enter Expense Type"]').click()
  cy.contains("Rent/Lease Payment").click()
// Reference Date
cy.get('[placeholder="Pick Reference Date"]').type("October 25, 2023")
// Expense Amount
cy.get('[placeholder="Enter Expense Amount"]').clear().type("39000")
// Expense Details
cy.get('[placeholder="Enter Expense Details"]').type("Vehicle Purchase: 1C4HJXDN7NW246787 - 2022 Jeep Wrangler Unlimited Willys")
// add Expense button
cy.get('[type="submit"]').click()
cy.wait(10* second)
              /////////// View Expense //////////////
cy.contains("11.4 View Expense").click()
cy.get('[placeholder="Search"]').type("1C4HJXDN7NW246787")
}
               /////////////// 13. Add Review /////////////////
export const addReview =() =>{
   cy.contains("13. Reviews").click()
   cy.contains("13.1 Add Review").click()

   cy.get('[placeholder="Select Order"]').click()
     cy.contains("2GNAXHEV7L6149334").click()
//  cy.contains("Service Quality Rating: ")

  cy.get('[placeholder="Enter Review"]').type("Good")
  cy.get('[type="submit"]').click()
  cy.wait(5*second)
   ////// View Review /////
   cy.contains("13. Reviews").click()
 cy.contains("13.2 View Reviews").click()
  cy.get('[placeholder="Search"]').type("Carflys")
  cy.get(".rdt_TableBody").find("div").first().find(".icon-tabler-eye").click() 
}
export const addcomplaint=()=>{
    cy.get('[placeholder="Select Order"]').click()
       cy.contains("1C4HJXDN7NW246787").click()
   cy.get('[placeholder="Enter Complaint Title"]').type("")
   cy.get('[placeholder="Enter Complaint"]').type("")
   cy.contains("Add").click
}
export const logout =()=>{

   cy.get(".mantine-1ukqe5l").click()
    cy.contains("Logout").click()
}
