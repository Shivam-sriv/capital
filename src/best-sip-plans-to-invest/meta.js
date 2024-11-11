import { Helmet } from "react-helmet";

function Meta() {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is SIP a good investment option ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, SIP is a good investment option, as it is ideal for compounding wealth over time and is quite pocket-friendly. It is considered one of the best investment options for mid to long-term wealth creation.",
        },
      },
      {
        "@type": "Question",
        name: "How much money is needed to start an SIP investment ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SIPs are one of the most convenient ways of investing in mutual funds. Investors can start investing in an SIP with a minimum monthly contribution of Rs.100.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum duration to invest in SIP ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Systematic Investment Plans (SIP) do not have any minimum duration.",
        },
      },
      {
        "@type": "Question",
        name: "Are SIPs taxable ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Long-term gains made through SIPs are taxable at 10 per cent if the gains breach the Rs. 1,00,000 ceiling. Gains made over the long-term, i.e. after one year, are long-term capital gains. Such gains, if less than Rs. 1,00,000, are tax exempted. Also, short-term capital gains made through SIPs are taxed at a flat 15 per cent, irrespective of the investor's income tax slab.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>
        Best SIP Plans to Invest : Top performing Mutual funds for SIP
      </title>
      <meta
        name="description"
        content="Start investing in Best SIP Plans. Systematic investment plans (SIPs) ensure that you make regular investments, which are small in value & bigger in return."
      />
      <meta
        name="keywords"
        content="best sip plans to invest,best sip to invest in 2024,top sip mutual funds,mutual funds sip returns,types of sip,sip return rate,best fund for sip,top mutual funds in india,top mutual funds for sip,best performing mutual funds india"
      />
      <link
        rel="canonical"
        href="https://bfccapital.com/best-sip-plans-to-invest"
      />
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