import React, { useState } from "react";
//import { FiPlus, FiMinus } from 'react-icons/fi';
import {
  FooterContainer,
  FooterListContainer,
  FooterList,
  FooterListSocial,
  ListValues,
  EmailDiv,
  EmailBtnCon,
  Dropdown,
  Wrap,
} from "./footerStyle";
import { Data } from "./footerContent";
function Footer() {
  const [click, setClick] = useState(false);
  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <>
      <FooterContainer>
        <FooterListContainer>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <span>
                    {click === index ? (
                      <i className="fas fa-minus"></i>
                    ) : (
                      <i className="fas fa-plus"></i>
                    )}
                  </span>
                </Wrap>
                {click === index ? (
                  <Dropdown>
                    <FooterList>
                      <h1>{item.type}</h1>
                      <ListValues>{item.list1}</ListValues>
                      <ListValues>{item.list2}</ListValues>
                      <ListValues>{item.list3}</ListValues>
                      <ListValues>{item.list4}</ListValues>
                    </FooterList>

                    <FooterList>
                      <h1>{item.type1}</h1>
                      <ListValues>{item.gamingLap1}</ListValues>
                      <ListValues>{item.gamingLap2}</ListValues>
                      <ListValues>{item.gamingLap3}</ListValues>
                      <ListValues>{item.gamingLap4}</ListValues>
                    </FooterList>

                    <FooterList>
                      <h1>{item.type2}</h1>
                      <ListValues>{item.perip1}</ListValues>
                      <ListValues>{item.perip2}</ListValues>
                      <ListValues>{item.perip3}</ListValues>
                      <ListValues>{item.perip4}</ListValues>
                    </FooterList>

                    <FooterList>
                      <h1>{item.type3}</h1>
                      <ListValues>{item.sup1}</ListValues>
                      <ListValues>{item.sup2}</ListValues>
                      <ListValues>{item.sup3}</ListValues>
                      <ListValues>{item.sup4}</ListValues>
                    </FooterList>

                    <FooterList>
                      <h1>{item.type4}</h1>
                      <ListValues>{item.comp1}</ListValues>
                      <ListValues>{item.comp2}</ListValues>
                      <ListValues>{item.comp3}</ListValues>
                      <ListValues>{item.comp4}</ListValues>
                    </FooterList>

                    <FooterListSocial>
                      <ListValues>{item.soc1}</ListValues>
                      <ListValues>{item.soc2}</ListValues>
                      <ListValues>{item.soc3}</ListValues>
                      <ListValues>{item.soc4}</ListValues>
                    </FooterListSocial>
                    <EmailBtnCon>
                      <p>Recieve our Newsletter</p>
                      <EmailBtnCon>
                        <input
                          type="text"
                          placeholder="Email"
                          className="txt-email"
                        ></input>
                        <input
                          type="submit"
                          value="Submit"
                          className="btn-submit"
                        ></input>
                      </EmailBtnCon>
                    </EmailBtnCon>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </FooterListContainer>
      </FooterContainer>
    </>
  );
}
export default Footer;
