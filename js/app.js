/************************************************************
 *
 * Simple Javascript Calculator
 * developed by Subrata Sarker
 * on April 14, 2018 and updated with React
 * on August 04, 2019 in an attempt to complete
 * Free Code Camp's Front End Libraries Project
 *
 ***********************************************************/
const Header = () => (
  <div className='row no-gutters'>
    <div className='col-12'>
      <h3 className='title'>FreeCodeCamp Calculator</h3>
      <p className='description'>A simple calculator powered by Javascript</p>
    </div>
  </div>
);

const Display = props => (
  <div className='calculator-display'>
    <div className='display'>
      <p className='display-all'>
        {props.displayAll}
        <span className='blink'>_</span>
      </p>
    </div>
    <div id='display' className='display'>
      <p className='display-text'>{props.displayText}</p>
    </div>
  </div>
);

const KeyPad = () => (
  <div className='row'>
    <div className='col-12'>
      <div className='calculator-buttons'>
        <div className='row'>
          <div id='clear' className='col-6'>
            <button className='btn ctrl ac'>AC</button>
          </div>
          <div className='col-3'>
            <button className='btn ctrl ce'>CE</button>
          </div>
          <div id='equals' className='col-3'>
            <button className='btn result'>=</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-9'>
            <div className='row'>
              <div id='seven' className='col-4'>
                <button className='btn dgt seven'>7</button>
              </div>
              <div id='eight' className='col-4'>
                <button className='btn dgt eight'>8</button>
              </div>
              <div id='nine' className='col-4'>
                <button className='btn dgt nine'>9</button>
              </div>
              <div id='four' className='col-4'>
                <button className='btn dgt four'>4</button>
              </div>
              <div id='five' className='col-4'>
                <button className='btn dgt five'>5</button>
              </div>
              <div id='six' className='col-4'>
                <button className='btn dgt six'>6</button>
              </div>
              <div id='one' className='col-4'>
                <button className='btn dgt one'>1</button>
              </div>
              <div id='two' className='col-4'>
                <button className='btn dgt two'>2</button>
              </div>
              <div id='three' className='col-4'>
                <button className='btn dgt three'>3</button>
              </div>
              <div id='negate' className='col-4'>
                <button className='btn soptr' value='+/-'>
                  +/-
                </button>
              </div>
              <div id='zero' className='col-4'>
                <button className='btn dgt zero'>0</button>
              </div>
              <div id='decimal' className='col-4'>
                <button className='btn dot'>.</button>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='row'>
              <div id='divide' className='col-12'>
                <button className='btn optr obelus' value='/'>
                  &divide;
                </button>
              </div>
              <div id='multiply' className='col-12'>
                <button className='btn optr times' value='*'>
                  &times;
                </button>
              </div>
              <div id='subtract' className='col-12'>
                <button className='btn optr minus' value='-'>
                  -
                </button>
              </div>
              <div id='add' className='col-12'>
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
);

const Footer = () => (
  <div className='container'>
    <div className='footer'>
      <small>
        Designed and Coded by <span className='developer'>Subrata Sarker</span>
      </small>
    </div>
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAll: [],
      displayText: '0'
    };
  }

  render() {
    return (
      <div className='container'>
        <div className='calculator-body'>
          <Header />
          <Display
            displayAll={this.state.displayAll.join()}
            displayText={this.state.displayText}
          />
          <KeyPad />
        </div>
      </div>
    );
  }
}

const App = () => (
  <React.Fragment>
    <Calculator />
    <Footer />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('app'));
