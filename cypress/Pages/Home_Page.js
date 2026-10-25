class Home_Page{
    visit(){
        cy.visit("https://jstestingacademy.co.in/qa-apps/medicare/index.html")
    }
    logo_nav_verification(){
        //checking the medicare logo 
        cy.get("#brand").should("contain"," MediCare Hospital");

        //checking the search bar
        cy.get("#search-input").should("exist");
        cy.get("button[data-testid='search-button']").should("exist");

        //checking the navigation bar
        cy.get("nav>a").then((elements)=>{
            cy.log(elements.length)

            cy.wrap(elements).each((ele)=>{
                cy.log(ele.text());
            })
        })

    }

    Specialityandbranch(){
        //Speciality 
        cy.get("label").contains("Speciality");
        cy.get("#quick-speciality>option").then((data)=>{
            cy.log("length of ",data.length);
            cy.wrap(data).each((el)=>{
                cy.log(el.text())
            })
        })

        //Branches
        cy.get("label").should("contain","Branch");
        cy.get("#quick-branch>option").then((branches)=>{
            cy.log("branches length",branches.length);

            cy.wrap(branches).each((branch)=>{
                cy.log(branch.text())
            })

        })


    }

    Slider(){
        cy.get("#banner-slides>div").then((sliders)=>{
            cy.log(sliders.length)
            let slid=0;
            
            cy.wrap(sliders).each((slider)=>{
                slid++;
               cy.log(`${slid} slider`)

               const eyebrow=slider.find(".banner-eyebrow").text();
               const heading=slider.find(".banner-head").text();
               const bannerline=slider.find(".banner-line").text();
               const bannercta=slider.find(".banner-cta").text();
              
               cy.log(eyebrow)
               cy.log(heading)
               cy.log(bannerline)
               cy.log(bannercta)



            })
        })
    }

    Specialities(){
        //verifying the specialities with name
        cy.get("h1").contains("Specialities");

        // list
        cy.get("#speciality-grid>a").then((datas)=>{
            // length of specialities
            cy.log("numbers of specialities",datas.length);
            
            cy.wrap(datas).each((data)=>{
                //type of speciality
                const typeofspeaciality= data.find("h3").text().trim();
                cy.log("type of speciality",typeofspeaciality);

                //anchro links
                const href= data.prop("href");
                cy.log(href);
                cy.request(href).its("status").should("eq",200)

            })


        })


    }
}

export default Home_Page;
