import React from 'react'
import "./Faq.css"

const Faq = () => {
  return (
    <div className="faq-container">
      <p>1. What is Allotment in Progress and Allotment Closed?</p>
      <p>
        → We let traders hold the positions even before trading of share starts,
        trader can only buy positions during the ‘allotment in progress’ phase.
        Once allotment is closed, market starts after one minutes and trader can
        either hold their positions or buy/sell them.
      </p>
      <br />
      <p>2. Can I know my chances of getting shares during Allotment?</p>
      <p>
        → Yes, if you click on the option, we shows the price of shares at which
        chance of getting share is maximum.
      </p>
      <p>
        <br />
        3. Can I sell my shares/positions without waiting the final outcome?
      </p>
      <p>
        → Yes, you can sell your positions when ‘market is in progress’ in order
        to book profit or minimise the loss. Your sell request will be executed
        only if there are potential buyers at the price you are selling
      </p>
      <br />
      <p>4. How would I kow if my request will match or not?</p>
      <p>
        → We show number of buy/sell request available for different price
        range, you apply TakTik to get matched.{" "}
      </p>
      <br />
      <p>5. Where can I see my all investment and their status?</p>
      <p>
        → In the portfolio section you can see the summary, and for more details
        about a particular event yu can go inside that even by clicking on it,
        it will show the status, outcome and trade history.{" "}
      </p>
      <br />
      <p>6. When will I get my winnings/Refund?</p>
      <p>
        → You will get your refund right after allotment/market is closed, if
        your request is unmatched/not allotted. Your wimings will be credited to
        your wallet within 24 hours after the event is settled
      </p>
      <br />
      <p>7. Is there any charge on adding money to the wallet?</p>
      <p>
        → No, there is no charge on recharging your wallet. But the minimum
        amount which can be added is Rs 250
      </p>
      <br />
      <p>8 . What if transaction failed or in pending state?</p>
      <p>
        → If transaction failed or in pending state and money is deducted, the
        money will be credited back to the source account within 24 hours
      </p>
      <br />
      <p>9. Awesome !! How can i refer my friends to apply taktik together?</p>
      <p>
        → We love you and we have designed an unique approach to help you earn
        upto Rs. 2000 per referral. You can find the referral link with the code
        in the refer and earn section.
      </p>
      <br />
      <p>10. This is amazing, how can I earn upto Rs. 2000 per referral?</p>
      <p>
        → Yes, you are right. Every time you refer your friends you get Rs 10
        each when they make the first trade. And you will keep on getting 5% of
        their of their winnings. If you are TakTikal, this app is magical !!{" "}
      </p>
      <br />
      <p>11. Where can I see my referral earnings?</p>
      <p>
        → In the promotional section, you can see number invites and total
        earning from them.{" "}
      </p>
      <br />
      <p>12. How can I use promotional money?</p>
      <p>
        → You can directly transfer to your wallet or account, but can use for
        trading until you dont transfer it to your wallet.{" "}
      </p>
      <br />
      <p>13. Can I withdraw all the promotional money ?</p>
      <p>
        → No, you have to maintain a minimum of Rs 250 promotional balance. You
        can always withdraw 20% of the total amount after reaching Rs 500
      </p>
    </div>
  );
}

export default Faq