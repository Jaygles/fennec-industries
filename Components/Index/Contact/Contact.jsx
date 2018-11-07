import * as React from 'react';
import * as HTTP from '../../../common/http';
import styled from 'react-emotion';

const ContactHeading = styled('h2')`
  padding-bottom: 3rem;
  font-size: 3.75em !important;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.07);
  font-family: 'gothambold';
`;

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isNameDanger: false,
    isEmailDanger: false,
    isMessageDanger: false,
    messageLoading: false,
    messageSuccess: false,
  };
  _handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.name.trim() &&
      this.state.email.trim() &&
      this.state.message.trim()
    ) {
      const data = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        subject: this.state.subject,
        message: this.state.message,
      };
      this.setState({ messageLoading: true });
      HTTP.submitForm(data).then((response) => {
        console.log(response);
        if (response.status === 200) {
          // Clear forms
          this.setState({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            isNameDanger: false,
            isEmailDanger: false,
            isMessageDanger: false,
            messageLoading: false,
            messageSuccess: true,
          });
        }
      });
    } else {
      if (!this.state.name.trim()) {
        this.setState({ isNameDanger: true });
      }
      if (!this.state.email.trim()) {
        this.setState({ isEmailDanger: true });
      }
      if (!this.state.message.trim()) {
        this.setState({ isMessageDanger: true });
      }
    }
  };
  _handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <section className="section" id="contact">
        <div className="container content">
          <ContactHeading className="has-text-centered">
            Drop us a line
          </ContactHeading>
          <div className="columns">
            <div className="column is-4 has-text-centered">
              <h3>We would love to hear from you</h3>
              <p>Fill out the form to get started!</p>
            </div>
            <div className="column is-8">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">From</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left">
                      <input
                        value={this.state.name}
                        onChange={(event) => this._handleInputChange(event)}
                        className={`input ${
                          this.state.isNameDanger ? `is-danger` : null
                        }`}
                        type="text"
                        name="name"
                        placeholder="Name"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user" />
                      </span>
                    </p>
                    {this.state.isNameDanger ? (
                      <p className="help is-danger">
                        Please enter a valid name
                      </p>
                    ) : null}
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <input
                        className={`input ${
                          this.state.isEmailDanger ? `is-danger` : null
                        }`}
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={(event) => this._handleInputChange(event)}
                        name="email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope" />
                      </span>
                    </p>
                    {this.state.isEmailDanger ? (
                      <p className="help is-danger">
                        Please enter a valid email
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field is-expanded">
                    <div className="field">
                      <p className="control is-expanded">
                        <input
                          className="input"
                          type="tel"
                          placeholder="Phone(optional)"
                          value={this.state.phone}
                          onChange={(event) => this._handleInputChange(event)}
                          name="phone"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Subject</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g. Would like to start a conversation!"
                        value={this.state.subject}
                        onChange={(event) => this._handleInputChange(event)}
                        name="subject"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Question</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <textarea
                        className={`textarea ${
                          this.state.isMessageDanger ? `is-danger` : null
                        }`}
                        placeholder="What are you looking for?"
                        onChange={(event) => this._handleInputChange(event)}
                        value={this.state.message}
                        name="message"
                      />
                    </div>
                    {this.state.isMessageDanger ? (
                      <p className="help is-danger">Please enter a message</p>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label" />
                <div className="field-body">
                  <div className="field">
                    <div className="control">
                      <button
                        onClick={(event) => this._handleFormSubmit(event)}
                        className="button is-primary is-outlined"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered content">
              {this.state.messageLoading ? (
                <div>
                  <i className="fas fa-spinner fa-pulse fa-2x" />
                </div>
              ) : null}
              {this.state.messageSuccess ? (
                <h2 className="is-info">
                  Thank you for your message, we'll get back to you as soon as
                  possible!
                </h2>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
