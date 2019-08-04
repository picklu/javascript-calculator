/************************************************************
 *
 * Simple Javascript Calculator
 * developed by Subrata Sarker
 * on April 14, 2018 and updated with React
 * on August 04, 2019 in an attempt to complete
 * Free Code Camp's Front End Libraries Project
 *
 ***********************************************************/
const Footer = () => (
  <div className='container'>
    <div className='footer'>
      <small>
        Designed and Coded by <span className='developer'>Subrata Sarker</span>
      </small>
    </div>
  </div>
);

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='calculator-body'>
                <div className='row no-gutters'>
                  <div className='col-12'>
                    <h3 className='title'>FreeCodeCamp Calculator</h3>
                    <p className='description'>
                      A simple calculator powered by Javascript
                    </p>
                    <div className='calculator-display'>
                      <div id='display' className='display'>
                        <p className='display-text' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <div className='calculator-buttons'>
                      <div className='row'>
                        <div id='clear' className='col-3'>
                          <button className='btn ctrl ac'>AC</button>
                        </div>
                        <div className='col-3'>
                          <button className='btn ctrl ce'>CE</button>
                        </div>
                        <div className='col-3'>
                          <button className='btn soptr percent' value='%'>
                            %
                          </button>
                        </div>
                        <div id='divide' className='col-3'>
                          <button className='btn optr obelus' value='/'>
                            &divide;
                          </button>
                        </div>
                        <div id='seven' className='col-3'>
                          <button className='btn dgt seven'>7</button>
                        </div>
                        <div id='eight' className='col-3'>
                          <button className='btn dgt eight'>8</button>
                        </div>
                        <div id='nine' className='col-3'>
                          <button className='btn dgt nine'>9</button>
                        </div>
                        <div id='multiply' className='col-3'>
                          <button className='btn optr times' value='*'>
                            &times;
                          </button>
                        </div>
                        <div id='four' className='col-3'>
                          <button className='btn dgt four'>4</button>
                        </div>
                        <div id='five' className='col-3'>
                          <button className='btn dgt five'>5</button>
                        </div>
                        <div id='six' className='col-3'>
                          <button className='btn dgt six'>6</button>
                        </div>
                        <div id='subtract' className='col-3'>
                          <button className='btn optr minus' value='-'>
                            -
                          </button>
                        </div>
                        <div className='col-12'>
                          <div className='row'>
                            <div className='col-9'>
                              <div className='row'>
                                <div id='one' className='col-4'>
                                  <button className='btn dgt one'>1</button>
                                </div>
                                <div id='two' className='col-4'>
                                  <button className='btn dgt two'>2</button>
                                </div>
                                <div id='three' className='col-4'>
                                  <button className='btn dgt three'>3</button>
                                </div>
                                <div id='zero' className='col-4'>
                                  <button className='btn dgt zero'>0</button>
                                </div>
                                <div id='decimal' className='col-4'>
                                  <button className='btn dot'>.</button>
                                </div>
                                <div id='equals' className='col-4'>
                                  <button className='btn result'>=</button>
                                </div>
                              </div>
                            </div>
                            <div id='add' className='col-3'>
                              <button className='btn optr plus' value='+'>
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
