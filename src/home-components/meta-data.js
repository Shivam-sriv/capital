import { Helmet } from "react-helmet";

  const ldJson = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "BFC Capital",
    url: "https://bfccapital.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };



function MetaData() {
  return (
    <Helmet>
      <title>
        All Financial Solutions - SIP |Mutual funds |Stocks |FD |Insurances
      </title>
      <meta
        name="description"
        content="All Financial Solutions - BFC Capital is a pioneer in the wealth management space. We help you invest in a smart way. Stocks, FD, Insurance & Mutual Funds."
      />
      <meta
        name="keywords"
        content="Financial Solutions , FINANCIAL SERVICES , Mutual fund advisor, Investment advisor, Investment management, Personal financial planner, Financial planner, Certified wealth management, Financial management, Wealth management, Money management, Stock brokers in india"
      />

      <link rel="canonical" href="https://bfccapital.com/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="All Financial Solutions - SIP |Mutual funds |Stocks |FD |Insurances "
      />
      <meta property="og:url" content="https://bfccapital.com/" />
      <meta
        property="og:image"
        content="https://bfccapital.com/assets/img/logo/bfc-logo.webp"
      />
      <meta
        property="og:description"
        content="All Financial Solutions - BFC Capital is a pioneer in the wealth management space. We help you invest in a smart way. Stocks, FD, Insurance & Mutual Funds."
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BFCCapital" />
      <meta
        name="twitter:title"
        content="All Financial Solutions - SIP |Mutual funds |Stocks |FD |Insurances "
      />
      <meta
        name="twitter:description"
        content="All Financial Solutions - BFC Capital is a pioneer in the wealth management space. We help you invest in a smart way. Stocks, FD, Insurance & Mutual Funds."
      />
      <meta
        name="twitter:image"
        content="https://bfccapital.com/assets/img/logo/bfc-logo.webp"
      />

      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
}

export default MetaData