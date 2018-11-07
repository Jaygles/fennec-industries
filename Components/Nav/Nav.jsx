import * as React from 'react';
import { css } from 'react-emotion';
import Link from 'next/link';

const navStyles = css`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.06);
`;

const navLogoAStyles = css`
  padding: 0;
  img {
    padding-left: 20px;
    min-height: 38px;
  }
`;

const activeDropdown = `navbar-item has-dropdown is-active`;
const inactiveDropdown = `navbar-item has-dropdown`;

class Nav extends React.Component {
  state = {
    burger: `navbar-burger burger`,
    burgerMenu: `navbar-menu`,
  };
  _handleBurger = () => {
    if (this.state.burger === `navbar-burger burger`) {
      this.setState({
        burger: `navbar-burger burger is-active`,
        burgerMenu: `navbar-menu is-active`,
      });
    } else {
      this.setState({
        burger: `navbar-burger burger`,
        burgerMenu: `navbar-menu`,
      });
    }
  };
  _handleDropdownToggle = (e) => {
    if (e.currentTarget.className === inactiveDropdown) {
      e.currentTarget.className = activeDropdown;
    } else {
      e.currentTarget.className = inactiveDropdown;
    }
  };
  render() {
    return (
      <div className="hero-head">
        <nav className={`navbar is-fixed-top ${navStyles}`}>
          <div className="container">
            <div className="navbar-brand">
              <Link href="/">
                <a className={`navbar-item ${navLogoAStyles}`}>
                  <img
                    src="/static/logo/fennec_logo_512_no_border.png"
                    alt="Logo"
                  />
                </a>
              </Link>
              <span
                onClick={() => this._handleBurger()}
                className={this.state.burger}
                data-target="navbarMenuHeroA"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroA" className={this.state.burgerMenu}>
              <div className="navbar-end">
                <Link prefetch href="/work">
                  <a className="navbar-item">Our Work</a>
                </Link>
                <div
                  onMouseEnter={(event) => this._handleDropdownToggle(event)}
                  onMouseLeave={(event) => this._handleDropdownToggle(event)}
                  className={inactiveDropdown}
                >
                  <a className="navbar-link">Services</a>
                  <div className="navbar-dropdown">
                    <Link prefetch href="/services/development">
                      <a className="navbar-item">
                        Professional Web Design & Development
                      </a>
                    </Link>
                    <Link prefetch href="/services/seo">
                      <a className="navbar-item">Search Engine Optimization</a>
                    </Link>
                    <Link prefetch href="/services/social">
                      <a className="navbar-item">Social Media Marketing</a>
                    </Link>
                    <Link prefetch href="/services/video">
                      <a className="navbar-item">Video Marketing</a>
                    </Link>
                  </div>
                </div>
                <div
                  onMouseEnter={(event) => this._handleDropdownToggle(event)}
                  onMouseLeave={(event) => this._handleDropdownToggle(event)}
                  className={inactiveDropdown}
                >
                  <a className="navbar-link">About Us</a>
                  <div className="navbar-dropdown">
                    <Link prefetch href="/about/location">
                      <a className="navbar-item">Location</a>
                    </Link>
                    <Link prefetch href="/about/team">
                      <a className="navbar-item">Our Team</a>
                    </Link>
                  </div>
                </div>
                <a href="/#testimonials" className="navbar-item">
                  Testimonials
                </a>
                <a href="/#contact" className="navbar-item">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
