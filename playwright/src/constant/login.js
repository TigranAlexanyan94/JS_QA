const selectors = {
    newCustomer: "#content > .row > .col-lg-6 > .card > .card-body > h2>>nth=0",
    returnCustomer: "#content > .row > .col-lg-6 > .card > .card-body > h2>>nth=1",
    email: "#input-email",
    password: "#input-password",
    loginBtn: ".btn-primary>>nth=2",
    alertDanger: ".alert-danger"
}

module.exports = selectors;
