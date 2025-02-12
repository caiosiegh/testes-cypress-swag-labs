/// <reference types="cypress" />

describe("Testando o Site Swag Labs", ()=> {

    it("Fazer Login com sucesso", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it("Fazer Login com usuário incorreto", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('siegh_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it("Fazer Login com senha incorreta", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('not_secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    })

    it("Verificar se continuo logado após refresh da página", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.reload()
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-menu').should('contain.text', 'Logout')
    })

    it("Adicionar itens no carrinho e verificar se continuam nele após refresh", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_badge').click()
        cy.get('.cart_list').should('contain.text', 'Sauce Labs Backpack')
        cy.reload()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    })

    it("Adicionar e remover um item repetidamente", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('not.exist')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('not.exist')
    })

    it("Comprar sem adicionar itens ao carrinho", ()=> {
        cy.visit("https://www.saucedemo.com")
        cy.get(".login_logo").should('contain.text', 'Swag Labs')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('.title').should('have.text', 'Your Cart')
        cy.get('#checkout').click()
        cy.get('.title').should('have.text', 'Checkout: Your Information')
        cy.get('#first-name').type('Caio')
        cy.get('#last-name').type('Gusmão')
        cy.get('#postal-code').type('31886-980')
        cy.get('#continue').click()
        cy.get('.summary_info').should('contain.text', 'Payment Information')
        cy.get('#finish').click()
        cy.get('.title').should('have.text', 'Checkout: Complete!')
        cy.get('#back-to-products').click()
        cy.get('.title').should('contain.text', 'Products')
    })

})