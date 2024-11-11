
function BestMutualFundIn2023() {
  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-heading pb-4">
              <h2>Best ELSS Mutual Funds to invest in 2024 ?</h2>
              <div className="pageTitleBorder"></div>
            </div>
            <div className="text-description">
              <p>
                
                Listed below are some ELSS schemes that can be considered the
                "best" in the present scenario. However, we must remind
                investors that there are no universally compatible or beneficial
                ELSS schemes. Each investor's needs are different, and therefore
                the investments they make should be considered separately.
                Please get in touch with us to figure out schemes that meet your
                needs.
              </p>
              <div className="mutual-fund-scheme pt-3">
                <div class="table-responsive">
                  <table className="table table-bordered">
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
                        <th scope="row" rowSpan={5}>
                          
                          <span
                            className="mutual-fund-scheme-category"
                            style={{ top: "90px" }}
                          >
                            ELSS
                          </span>
                        </th>
                        <td>Bank of India Tax Advantage Fund - Eco - Growth</td>
                        <td rowSpan={5}>
                          
                          <span
                            className="mutual-fund-scheme-category-year"
                            style={{ top: "90px" }}
                          >
                            7 Years
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>DSP Tax Saver Fund - Growth</td>
                      </tr>
                      <tr>
                        <td>Franklin India Taxshield - Growth</td>
                      </tr>
                      <tr>
                        <td>HDFC Taxsaver - Growth</td>
                      </tr>
                      <tr>
                        <td>
                          Bandhan Tax Advantage (ELSS) Fund - Reg - Growth
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
      </div>
    </section>
  );
}

export default BestMutualFundIn2023;