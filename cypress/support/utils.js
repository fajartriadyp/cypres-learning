export function clickIfExists(xpathSelector) {
    cy.xpath(xpathSelector)
      .then(($el) => {
        if ($el.length > 0) {
          cy.wrap($el).click();
        }
      });
  }
  