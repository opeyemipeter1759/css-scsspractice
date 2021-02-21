import React from "react";
import plus from "./assests/plus.svg";
import minus from "./assests/minus.svg";

function FAQ() {
  return (
    <div className="faqBody">
      <p className="text-head">QUESTIONS FREQUENTLY ASKED BY OUR VISITORS</p>
      <h1 className="title">FAQ</h1>
      <p className="text">
        <span className="plus">
          <img src={plus} alt="" />
        </span>
        What stocks and ETFs can I give?
      </p>
      <p className="text">
        <span className="plus">
          <img src={minus} alt="" />
        </span>
        What amounts can I give?
      </p>
      <p className="text-detail">
        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit.
      </p>
      <p className="text">
        <span className="plus">
          <img src={plus} alt="" />
        </span>
        How much does it cost?
      </p>
      <p className="text">
        <span className="plus">
          <img src={plus} alt="" />
        </span>
        When does my gift start fluctuating with the market?
      </p>
      <p className="text">
        <span className="plus">
          <img src={plus} alt="" />
        </span>
        What if my recipient wants a different stock instead of the one I gave?
      </p>
      <p className="text">
        <span className="plus">
          <img src={plus} alt="" />
        </span>
        Is Chaka a brokerage?
      </p>
    </div>
  );
}

export default FAQ;
