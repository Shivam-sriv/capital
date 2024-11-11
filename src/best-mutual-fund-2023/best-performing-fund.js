function BestPerformingFund() {
  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-heading pb-4">
              <h2>Best Performing Mutual Funds to Invest in 2024 </h2>
              <div className="pageTitleBorder"></div>
            </div>
            <div className="text-description">
              <p>
                Listed below are the Mutual Fund schemes that are being
                considered the best investment options in 2024. However, we
                would like to clarify that there are no Mutual Fund plans that
                can be termed the “best” in absolute terms, because every
                investor’s needs are different. As a result, the schemes they
                invest in should be shortlisted individually. Please get in
                touch with us to figure out schemes that suit you best.
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
                      <th scope="row">
                        <span>Large Cap</span>
                      </th>
                      <td>Canara Robeco Bluechip Equity Fund</td>
                      <td>
                        <span>5 Years</span>
                      </td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row">
                        <span>Large & Mid Cap</span>
                      </th>
                      <td>Edelweiss Large & Mid Cap Fund</td>
                      <td>
                        <span>6 Years</span>
                      </td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}
                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row">
                        <span>Flexi Cap</span>
                      </th>
                      <td>Parag Parikh Flexi Cap Fund</td>
                      <td>
                        <span>7 Years</span>
                      </td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}
                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row">
                        <span>Mid Cap</span>
                      </th>
                      <td>Quant Mid Cap Fund</td>
                      <td>
                        <span>8 Years</span>
                      </td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}
                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row">
                        <span>Small Cap</span>
                      </th>
                      <td>Kotak Small Cap Fund</td>
                      <td>
                        <span>10 Years</span>
                      </td>
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

export default BestPerformingFund;