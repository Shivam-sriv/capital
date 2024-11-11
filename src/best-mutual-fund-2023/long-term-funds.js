function LongTermFunds() {
  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-heading pb-4">
              <h2>Best Mutual Funds for the Long Term</h2>
              <div className="pageTitleBorder"></div>
            </div>
            <div className="text-description">
              <p>
                Mentioned below are some plans that are being touted as the
                “best” Mutual Fund schemes for long-term investment. We,
                however, would like to make clear that there are no unanimously
                beneficial schemes. Investors should note that each individual’s
                needs are unique. Therefore, their investment options should be
                shortlisted individually. Please get in touch with our experts
                to figure out the schemes that match you best.
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
                          Flexi Cap
                        </span>
                      </th>
                      <td>Canara Robeco Flexi Cap Fund</td>
                      <td rowSpan={2}>
                        <span className="mutual-fund-scheme-category-year">
                          7 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Parag Parikh Flexi Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={3}>
                        <span className="mutual-fund-scheme-category">
                          Mid Cap
                        </span>
                      </th>
                      <td>SBI Magnum Mid Cap Fund</td>
                      <td rowSpan={3}>
                        <span className="mutual-fund-scheme-category-year">
                          8 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Edelweiss Mid Cap Fund</td>
                    </tr>
                    <tr>
                      <td>Kotak Emerging Equity Fund</td>
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

export default LongTermFunds;
