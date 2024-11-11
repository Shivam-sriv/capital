function LumbsumInvestment() {
  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-heading pb-4">
              <h2>Best Mutual Fund Schemes for Lumpsum investment</h2>
              <div className="pageTitleBorder"></div>
            </div>
            <div className="text-description">
              <p>
                For our investors’ convenience, we have listed below Mutual Fund
                schemes that are being considered the “best” for Lumpsum
                Investment in the current scenario. We, however, would like to
                reiterate that there are no universally beneficial Mutual Funds
                for Lumpsum Investments, because each investor’s needs are
                different. Therefore, their investment options should be
                shortlisted accordingly. Please reach out to us to figure out
                schemes that will complement your needs.
              </p>

              <div className="mutual-fund-scheme pt-3">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Category</th>
                      <th scope="col">Fund</th>
                      <th scope="col">Ideal Investment Horizon</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                        <span className="mutual-fund-scheme-category">
                          Large Cap
                        </span>
                      </th>
                      <td>Nippon India Large Cap Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          5 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>HDFC Top 100 Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                        <span className="mutual-fund-scheme-category">
                          Large & Mid Cap Fund
                        </span>
                      </th>
                      <td>ICICI Prudential Large & Mid Cap Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          6 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Tata Large & Mid Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                        <span className="mutual-fund-scheme-category">
                          Flexi/Multi Cap Fund
                        </span>
                      </th>
                      <td>Nippon India Multi Cap Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          7 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>HDFC Flexi Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                        <span className="mutual-fund-scheme-category">
                          Mid Cap Fund
                        </span>
                      </th>
                      <td>Kotak Emerging Equity Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          8 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Edelweiss Mid Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                        <span className="mutual-fund-scheme-category">
                          Small Cap
                        </span>
                      </th>
                      <td>Canara Robeco Small Cap Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          10 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nippon India Small Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LumbsumInvestment;
