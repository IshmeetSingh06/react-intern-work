import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "What is Allotment in Progress and Allotment Closed?",
      content: (
        <p>
          We let traders hold the positions even before trading of share starts,
          trader can only buy positions during the ‘allotment in progress’
          phase. Once allotment is closed, market starts after one minutes and
          trader can either hold their positions or buy/sell them.
        </p>
      ),
    },
    {
      title: "Can I know my chances of getting shares during Allotment?",
      content: (
        <p>
          Yes, if you click on the option, we shows the price of shares at which
          chance of getting share is maximum.
        </p>
      ),
    },
    {
      title:
        "Can I sell my shares/positions without waiting the final outcome?",
      content: (
        <p>
          Yes, you can sell your positions when ‘market is in progress’ in order
          to book profit or minimise the loss. Your sell request will be
          executed only if there are potential buyers at the price you are
          selling
        </p>
      ),
    },
    {
      title: "How would I kow if my request will match or not?",
      content: (
        <p>
          We show number of buy/sell request available for different price
          range, you apply TakTik to get matched.{" "}
        </p>
      ),
    },
    {
      title: (
        "Where can I see my all investment and their status?"
      ),
      content: (
        <p>
          In the portfolio section you can see the summary, and for more details
          about a particular event yu can go inside that even by clicking on it,
          it will show the status, outcome and trade history.
        </p>
      ),
    },
  ],
};

const styles = {
  bgColor: "clear",
  titleTextColor: "rgba(255, 255, 255, 0.75)",
  rowTitleColor: " rgba(255, 255, 255, 0.75)",
  rowContentTextSize: "16px",
  rowContentColor: "grey",
  arrowColor: "rgba(15, 194, 126, 1)",
};

const config = {
  animate: true,
  arrowIcon: ">",
  tabFocus: true,
  expandIcon: ">",
  collapseIcon: "^",
};
const Faq1 = () => {
  return (
    <Faq
      className="faq-style-wrapper"
      data={data}
      styles={styles}
      config={config}
    />
  );
};

export default Faq1;
