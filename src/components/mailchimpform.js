
import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class MailChimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      message: " ",
    }
  }
  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ message: "Thanks for subscribing🎉🚀" })
    addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
    this.setState({ email: "" })
  }

  //   handleSubmit = e => {
  //     e.preventDefault()
  //   //const result = await addToMailchimp(this.state.email)
  //     this.setState({message: 'Thanks for subcribing'})
  //     addToMailchimp(this.state.email)
  //     console.log(e)

  //   }
  // handleChange = event => {
  //     this.setState({ email: event.target.value })
  //   }

  render() {
    return (
      <div className="sidebar-emails">
        <h1>{this.state.message}</h1>
        <h4>Get the Latest tech news from merklepal</h4>
        <p>
          If you've found any of our articles useful, subscribe to be notified
          of more quality articles as soon as they're published.
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.changeEmailHandler}
            id="email"
            aria-label="email"
            required
          />
          <input type="submit" value="Subscribe" aria-label="subscribe" />{" "}
        </form>
        <span>We won't send you spam and you can unsubscribe at any time</span>
      </div>
    )
  }
}

{/* <h1>{this.state.message}</h1> */}