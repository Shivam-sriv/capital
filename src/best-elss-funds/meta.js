import { Helmet } from "react-helmet";

function Meta() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are ELSS Funds ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Equity-linked savings scheme (ELSS) is a mutual fund category that offers tax rebates to investors under Section 80C of the Income Tax Act. ELSS mutual funds are investor favourites due to their high return potential.",
        },
      },
      {
        "@type": "Question",
        name: "How are ELSS Funds different from regular Mutual Funds ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike other mutual funds, ELSS Funds are tax-saving mutual funds eligible for tax deduction under Section 80C of the Income Tax Act. Also, ELSS Funds have a mandatory three-year lock-in period.",
        },
      },
      {
        "@type": "Question",
        name: "How much tax can be saved by investing in ELSS Funds ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Investors can save up to Rs.46,800 (tax deduction of up to Rs. 1,50,000 under Section 80C of the Income Tax Act) yearly on taxes by investing in ELSS Funds.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum investment duration (Lock-in Period) for ELSS Funds ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ELSS Funds have a mandatory lock-in period of 3 years.",
        },
      },
      {
        "@type": "Question",
        name: "Can the money invested in ELSS Funds be withdrawn before 3 years ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, ELSS Funds do not offer investors the option to withdraw before the lock-in period, i.e. 3 years.",
        },
      },
      {
        "@type": "Question",
        name: "What are the options for investing in the Best ELSS funds ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `There are three types of ELSS mutual funds:

A. Growth Option- In the growth option, the investment grows simultaneously, and the investors do not earn dividends; they earn gains after redemption.

B. Dividend Option- The investor is entitled to receive timely dividends under this option.

C. Dividend Reinvestment Option- This option allows the investor to invest the dividends received back into the scheme.`,
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>
        Best ELSS Funds | Best ELSS Funds in 2024 | Tax Saving Funds
      </title>
      <meta
        name="description"
        content="Start investing in Best ELSS Funds. ELSS funds are managed professionally with the intent of maximising returns while minimizing risk & Tax-saving benefits."
      />
      <meta
        name="keywords"
        content="best elss mutual funds,ELSS,tax saving funds,best mutual funds,elss investment,tax saving mutual funds,elss growth mutual funds,top elss mutual funds in india,elss equity funds,elss funds in india,tax saving fund,equity linked savings scheme"
      />
      <link rel="canonical" href="https://bfccapital.com/best-elss-funds" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="All Financial Solutions - SIP |Mutual funds |Stocks |FD |Insurances "
      />
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
}

export default Meta