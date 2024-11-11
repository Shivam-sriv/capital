import react from "react"

function SystematicInvestment() {
  return (
    <section className="pt-40 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-heading pb-4">
              <h2>Best Mutual Funds for Systematic Investment Plan</h2>
              <div className="pageTitleBorder"></div>
            </div>
            <div className="text-description">
              <p>
                Although we have populated the section below with what could be
                termed the "best" Mutual Fund schemes for SIP investments, we
                urge all investors to note that there are no one-size-fits-all
                plans. Every investor's needs are unique, so the SIPs they
                invest in should be identified individually. Please reach out to
                identify and invest in plans that fit your scheme of things.
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
                      <td>ICICI Prudential Large Cap Fund</td>
                      <td rowSpan={2}>
                      
                        <span className="mutual-fund-scheme-category-year">
                          5 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Kotak Bluechip Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                    
                        <span className="mutual-fund-scheme-category">
                          Large & Mid Cap Fund
                        </span>
                      </th>
                      <td>SBI Large & Mid Cap Fund</td>
                      <td rowSpan={2}>
                   
                        <span className="mutual-fund-scheme-category-year">
                          6 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Edelweiss Large & Mid Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                       
                        <span className="mutual-fund-scheme-category">
                          Flexi/Multi Cap Fund
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
                      <td>Kotak Flexi Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
                       
                        <span className="mutual-fund-scheme-category">
                          Mid Cap Fund
                        </span>
                      </th>
                      <td>PGIM India Mid Cap Opportunity Fund</td>
                      <td rowSpan={2}>
                    
                        <span className="mutual-fund-scheme-category-year">
                          8 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Mirae Asset Mid Cap Fund</td>
                    </tr>
                    {/* ------------------- scheme-item-emd -------------- */}

                    {/* ------------------- scheme-item -------------- */}
                    <tr>
                      <th scope="row" rowSpan={2}>
               
                        <span className="mutual-fund-scheme-category">
                          Small Cap
                        </span>
                      </th>
                      <td>Edelweiss Small Cap Fund</td>
                      <td rowSpan={2}>
                     
                        <span className="mutual-fund-scheme-category-year">
                          10 Years
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>SBI Small Cap Fund</td>
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

export default SystematicInvestment;