import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = Number(expenses.reduce(
      (acc, { value, exchangeRates, currency }) => acc
      + (value * exchangeRates[currency].ask),
      0,
    )).toFixed(2);

    return (
      <header className="Header">
        <div>
          <span
            data-testid="email-field"
          >
            { `Email: ${email}` }
          </span>
        </div>
        <h1>Trybe Wallet</h1>
        <div className="Total">
          <span
            data-testid="total-field"
          >
            {`Despesa total: R$ ${totalExpenses} `}
          </span>
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
