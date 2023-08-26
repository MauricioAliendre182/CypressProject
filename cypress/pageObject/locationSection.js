export class LocationSection {
    constructor() {
        this.locationLinks = {
            mega_location: "//img[contains(@src,'La_Paz_Mega' )]/parent::a",
            multicine_location: "//img[contains(@src,'multicinel' )]/parent::a",
            san_miguel_location: "//img[contains(@src,'sanmiguel' )]/parent::a",
            ventura_location: "//img[contains(@src,'Santa_cruz_ventura' )]/parent::a",
            los_cusis_location: "//img[contains(@src,'los cusis' )]/parent::a",
            pando_location: "//img[contains(@src,'cocha_pando' )]/parent::a"
        }
        this.locationGoogleMaps = "//span[contains(text(),'STORE')]"
    }

    goToLocation(store) {
        let location
        if (store == "Los Cusis") {
            location = store.toLowerCase()
        } else {
            location = store.replaceAll(" ", "").toLowerCase()
        }
        for (const key in this.locationLinks) {
            if (this.locationLinks.hasOwnProperty(key)) {
                const value = this.locationLinks[key];
                if (value.includes(location)) {
                    cy.xpath(value, {timeout:8000}).should('be.visible').click()
                }
                else if (value.includes(`La_Paz_${store}`)) {
                    const words = value.split("_");

                    for (let i = 0; i < words.length; i++) {
                        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
                    }

                    const newValue = words.join("_");
                    cy.xpath(newValue, {timeout:8000}).should('be.visible').click()
                }
            }
        }
    }

    validateLocation(store) {
        cy.origin('https://www.google.com.bo',
        { args: { store } }, 
        ({ store }) => {
            cy.get("h1[class='DUwDvf lfPIob']").contains(store)
        })
    }
}

export const locationSection = new LocationSection();