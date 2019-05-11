import React from "react";

import { FooterPage, FooterPageTop, FooterPageBottom } from "./styles";

export default function Footer() {
  return (
    <FooterPage>
      <FooterPageTop />

      <FooterPageBottom>
        <h3>Feito por: Richardson Bruno</h3>

        <ul>
          <li>
            <a
              href="https://www.facebook.com/R%C3%A1dio-Vis%C3%A3o-FM-879-464423113943744/"
              target="_blank"
              rel="Facebook"
            >
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/visaofm/"
              target="_blank"
              rel="Instagram"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </FooterPageBottom>
    </FooterPage>
  );
}
