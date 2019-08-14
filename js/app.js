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

const Display = ({ staged, inputs, result, ...props }) => {
  let allInput;
  if (!!result) {
    allInput = result;
  } else {
    allInput = inputs.concat(staged).join('');
  }
  const lastInput = allInput[allInput.length - 1] || '_';
  const otherInputs = allInput.slice(0, allInput.length - 1) || '';
  const displayStaged =
    staged.length > MAX_LIMIT
      ? 'DIGIT LIMIT REACHED'
      : staged.slice(0, MAX_LIMIT) || '0';

  return (
    <div className='calculator-display'>
      <div className='display'>
        <p className='display-all'>
          {otherInputs}
          <span className='blink'>{lastInput}</span>
        </p>
      </div>
      <div className='display'>
        <p id='display' className='display-text'>
          {displayStaged}
        </p>
      </div>
    </div>
  );
};

const ControlPad = props => {
  const handleClick = event => {
    if (event.target.id === 'clear') {
      props.handleClearAll();
    }
    if (event.target.id === 'clear-each') {
      props.handleClearLast();
    }
    if (event.target.id === 'equals') {
      props.handleResult();
    }
  };

  return (
    <div className='row'>
      <div className='col-6 clear'>
        <button id='clear' className='btn ctrl ac' onClick={handleClick}>
          AC
        </button>
      </div>
      <div className='col-3'>
        <button id='clear-each' className='btn ctrl ce' onClick={handleClick}>
          CE
        </button>
      </div>
      <div className='col-3'>
        <button id='equals' className='btn result' onClick={handleClick}>
          =
        </button>
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
        <button className='btn soptr' value='+-' onClick={handleClick}>
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
      inputs: [],
      result: '',
      staged: ''
    };

    this.handleClearAll = this.handleClearAll.bind(this);
    this.handleClearLast = this.handleClearLast.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleOpsButtonClick = this.handleOpsButtonClick.bind(this);
    this.handleNumButtonClick = this.handleNumButtonClick.bind(this);
  }

  commitInput(input, partial = false) {
    if (partial) {
      this.setState({
        staged: input,
        result: ''
      });
    } else {
      this.setState({
        staged: input,
        result: '',
        inputs: [...this.state.inputs, this.state.staged]
      });
    }
  }

  handleClearAll() {
    this.setState({ inputs: [], result: '', staged: '' });
  }

  handleClearLast() {
    let staged = this.state.staged;
    let inputs = [...this.state.inputs];
    const result = this.state.result;
    if (!!result) {
      this.handleClearAll();
    }

    // Remove the immediate last chunk of input
    if (staged.length > 0) {
      if (staged.length === 1) {
        staged = inputs.pop() || '';
      }
      if (staged.length > 1) {
        staged = staged.slice(0, staged.length - 1);
      }
      this.setState({ staged, inputs });
    }
  }

  handleResult() {
    const input = '=';
    const staged = this.state.staged || '0';
    let equation;
    if (OPERATORS.split('').indexOf(staged) > -1) {
      equation = this.state.inputs.join('');
    } else {
      equation = this.state.inputs.concat(staged).join('');
    }
    let result = eval(equation);

    if (parseFloat(result) != parseInt(result)) {
      result = Number(numeral(result).format('0.0000'));
    }

    this.setState({
      staged: result.toString(),
      result: equation + input + result,
      inputs: []
    });
  }

  handleOpsButtonClick(event) {
    const input = event.target.value;
    const staged = this.state.staged;

    if (OPERATORS.split('').indexOf(staged) > -1) {
      this.commitInput(input, true);
    } else {
      this.commitInput(input);
    }
  }

  handleNumButtonClick(event) {
    let input = event.target.value;
    let staged = this.state.staged;
    const inputs = [...this.state.inputs];

    // If the input is dot
    if (input === '.') {
      // If there is a dot in the staged
      if (staged.indexOf(input) > -1) return;

      // update dot accordingly
      input = Number(staged) ? input : '0.';
    }

    if (input === '+-') {
      staged =
        inputs.length === 0 && Number(staged)
          ? staged[0] === '-'
            ? staged.slice(1, staged.length)
            : '-' + staged
          : staged;
      this.commitInput(staged, true);
      return;
    }

    // if the number is within maximum digit length
    if (staged.length <= MAX_LIMIT) {
      // if there is an operator in the display
      if (OPERATORS.split('').indexOf(staged) > -1) {
        if (input === '0') return;
        this.commitInput(input);
      } else {
        if (input === '0' && staged === '') return;
        this.commitInput(staged + input, true);
      }
    }
  }

  render() {
    return (
      <div className='container calculator-body'>
        <Header />
        <Display
          inputs={this.state.inputs}
          staged={this.state.staged}
          result={this.state.result}
        />
        <KeyPad
          handleClearAll={this.handleClearAll}
          handleClearLast={this.handleClearLast}
          handleResult={this.handleResult}
          handleOpsButtonClick={this.handleOpsButtonClick}
          handleNumButtonClick={this.handleNumButtonClick}
        />
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
