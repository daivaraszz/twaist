import React from "react"
import './App.css';
import ReactDOM from 'react-dom'


class ColorSwitcher extends React.Component {


  render() {


    return (
      <div className="container">
        <div className="box">
          <h2>Labas!</h2>
          <p>
            Nori turėti savo svetaine?
          </p>
          <p>
         Mes tai galime padaryti nemokamai, įvesk savo el. pašta ir susisieksime per 24h.
          </p>
          <br />
          <form name="contact" data-netlify="true" netlify>
          <input
            type="email" name="email" placeholder={'El. Paštas'}
          />
          <button type="submit" className="btn btn-primary d-flex align-items-middle" style={{textAlign: 'center', alignSelf: 'stretch'}}>Siusti</button>
          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <small>
            Twistas Administracija ♥ {''}
            <a href="https://www.paypal.com/invoice/p/#T7ECAJVG9HL8SVSW">
               PayPal
            </a>
          </small>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
    <ColorSwitcher />,
    document.getElementById('root')
)
