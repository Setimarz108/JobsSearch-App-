import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import JobResult from "./JobResult";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchJobs } from "../store/actions";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => ({
  fetchJobs: (baseEndpoint, query) => dispatch(fetchJobs(baseEndpoint, query)),
});

class MainSearch extends React.Component {
  state = {
    query: "",
    jobs: [],
  };

  baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.fetchJobs(this.baseEndpoint, this.state.query);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
          
            
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="what Job are you looking for?" style={{
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid gray",
                  borderRadius: "10px",
                  placeholderColor: "#fff",
                  boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px "
                }}
              />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.props.jobs.elements.map((jobData) => (
              <JobResult key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((s) => s, mapDispatchToProps)(MainSearch);
