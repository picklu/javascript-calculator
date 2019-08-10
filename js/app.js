/************************************************************
 *
 * Simple Javascript Calculator
 * developed by Subrata Sarker
 * on April 14, 2018 and updated with React
 * on August 04, 2019 in an attempt to complete
 * Free Code Camp's Front End Libraries Project
 *
 ***********************************************************/
const MAX_LIMIT = 16;
const OPERATORS = '+-*/';

const Header = () => (
  <div className='row no-gutters'>
    <div className='col-12'>
      <h3 className='title'>FreeCodeCamp Calculator</h3>
      <p className='description'>A simple calculator powered by Javascript</p>
    </div>
  </div>
);

const Display = props => {
  const allInput = props.displayAll.join('');
  const lastInput = allInput[allInput.length - 1] || '_';
  const otheInputs = allInput.slice(0, allInput.length - 1) || '';
  const displayText =
    props.displayText.length > MAX_LIMIT
      ? 'DIGIT LIMIT REACHED'
      : props.displayText || '0';

  return (
    <div className='calculator-display'>
      <div className='display'>
        <p className='display-all'>
          {otheInputs}
          <span className='blink'>{lastInput}</span>
        </p>
      </div>
      <div id='display' className='display'>
        <p className='display-text'>{displayText}</p>
      </div>
    </div>
  );
};

const ControlPad = props => {
  const handleClick = () => {
    props.handleClearAll();
  };

  return (
    <div className='row'>
      <div id='clear' className='col-6 clear'>
        <button className='btn ctrl ac' onClick={handleClick}>
          AC
        </button>
      </div>
      <div className='col-3'>
        <button className='btn ctrl ce'>CE</button>
      </div>
      <div id='equals' className='col-3'>
        <button className='btn result'>=</button>
      </div>
    </div>
  );
};

const DigitsPad = props => {
  const handleClick = event => {
    props.handleNumButtonClick(event);
  };

  return (
    <div className='row'>
      <div id='seven' className='col-4'>
        <button className='btn dgt seven' onClick={handleClick} value='7'>
          7
        </button>
      </div>
      <div id='eight' className='col-4'>
        <button className='btn dgt eight' onClick={handleClick} value='8'>
          8
        </button>
      </div>
      <div id='nine' className='col-4'>
        <button className='btn dgt nine' onClick={handleClick} value='9'>
          9
        </button>
      </div>
      <div id='four' className='col-4'>
        <button className='btn dgt four' onClick={handleClick} value='4'>
          4
        </button>
      </div>
      <div id='five' className='col-4'>
        <button className='btn dgt five' onClick={handleClick} value='5'>
          5
        </button>
      </div>
      <div id='six' className='col-4'>
        <button className='btn dgt six' onClick={handleClick} value='6'>
          6
        </button>
      </div>
      <div id='one' className='col-4'>
        <button className='btn dgt one' onClick={handleClick} value='1'>
          1
        </button>
      </div>
      <div id='two' className='col-4'>
        <button className='btn dgt two' onClick={handleClick} value='2'>
          2
        </button>
      </div>
      <div id='three' className='col-4'>
        <button className='btn dgt three' onClick={handleClick} value='3'>
          3
        </button>
      </div>
      <div id='negate' className='col-4'>
        <button
          className='btn soptr'
          value='+/-'
          onClick={handleClick}
          value='-'
        >
          +/-
        </button>
      </div>
      <div id='zero' className='col-4'>
        <button className='btn dgt zero' onClick={handleClick} value='0'>
          0
        </button>
      </div>
      <div id='decimal' className='col-4'>
        <button className='btn dot' onClick={handleClick} value='.'>
          .
        </button>
      </div>
    </div>
  );
};

const OperatorsPad = props => {
  const handleClick = event => {
    props.handleOpsButtonClick(event);
  };

  return (
    <div className='row'>
      <div id='divide' className='col-12'>
        <button className='btn optr obelus' value='/' onClick={handleClick}>
          &divide;
        </button>
      </div>
      <div id='multiply' className='col-12'>
        <button className='btn optr times' value='*' onClick={handleClick}>
          &times;
        </button>
      </div>
      <div id='subtract' className='col-12'>
        <button className='btn optr minus' value='-' onClick={handleClick}>
          -
        </button>
      </div>
      <div id='add' className='col-12'>
        <button className='btn optr plus' value='+' onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};

const KeyPad = props => (
  <div className='row'>
    <div className='col-12'>
      <div className='calculator-buttons'>
        <ControlPad {...props} />
        <div className='row'>
          <div className='col-9'>
            <DigitsPad {...props} />
          </div>
          <div className='col-3'>
            <OperatorsPad {...props} />
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
      displayText: ''
    };

    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleClearLast = this.handleClearLast.bind(this);
    this.handleOpsButtonClick = this.handleOpsButtonClick.bind(this);
    this.handleNumButtonClick = this.handleNumButtonClick.bind(this);
  }

  handleClearAll() {
    this.setState({ displayAll: [], displayText: '' });
  }

  handleClearLast() {
    let displayText = this.state.displayText;
    let displayAll = this.state.displayAll;
    const lastInput = displayAll.pop();

    if (displayText === lastInput) {
    }
  }

  handleOpsButtonClick(event) {
    const input = event.target.value;
    const displayText = this.state.displayText;
    let displayAll = [...this.state.displayAll];

    if (OPERATORS.split('').indexOf(displayText) > -1) {
      displayAll.splice(displayAll.length - 1, 1, input);
    } else {
      displayAll = [...displayAll, input];
    }

    this.setState({
      displayAll,
      displayText: input
    });
  }

  handleNumButtonClick(event) {
    let input = event.target.value;
    let displayText = this.state.displayText;
    let displayAll = [...this.state.displayAll];

    // If the input is dot
    if (input === '.') {
      // if there is a dot in the displayText
      if (displayText.indexOf(input) > -1) return;

      // update dot accordingly
      input = Number(displayText) ? input : '0.';
    }

    // if the number is within maximum digit length
    if (displayText.length <= MAX_LIMIT) {
      // if there is an operator in the display
      if (OPERATORS.split('').indexOf(displayText) > -1) {
        displayText = input;
      } else {
        displayAll.pop();
        displayText = displayText + input;
      }
      displayAll.push(displayText);
    }

    this.setState({ displayText, displayAll });
  }

  render() {
    return (
      <div className='container'>
        <div className='calculator-body'>
          <Header />
          <Display
            displayAll={this.state.displayAll}
            displayText={this.state.displayText}
          />
          <KeyPad
            handleClearAll={this.handleClearAll}
            handleOpsButtonClick={this.handleOpsButtonClick}
            handleNumButtonClick={this.handleNumButtonClick}
          />
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
