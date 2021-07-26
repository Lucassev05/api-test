function request(method, url, objeto) {
  const bodyRequest = {
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cypress.env("TOKEN")}`,
    },
    ...objeto,
  };

  return cy.request(bodyRequest);
}

module.exports = { request };
