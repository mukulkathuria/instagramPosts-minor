import React from "react";
import {
  validateForm,
  changeErrors,
  errorsForm,
} from "./Validations/validateform";
import { Form, MainDiv ,Errors} from "./uploadalbum.style";

class AlbumUpload extends React.Component {
  constructor() {
    super();
    this.state = {
      file: "",
      desc: "",
      uploadPercentage: "",
      errors: {
        file: "",
        desc: "",
      },
    };
    this.PhotoInput = React.createRef();
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    let { errors } = this.state;
    changeErrors(errors, name, value, e.target);
    this.setState({ errors, [name]: value.trim() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(this.state)) {
      console.log(this.state.desc,this.PhotoInput);
    } else {
      const { errors } = this.state;
      errorsForm(this.state);
      this.setState({ errors });
    }
  };
  render() {
    const {errors} = this.state;

    return (
      <MainDiv>
        Please Upload Your Photo
        <Form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="file"
              type="file"
              ref={this.PhotoInput}
              accept="image/jpeg , image/png"
              onChange={this.handleChange}
            />
            {errors.file.length>0 && <Errors>{errors.file}</Errors>}
          </div>
          <div>
            <textarea
              type="text"
              name="desc"
              onChange={this.handleChange}
              value={this.state.desc}
              placeholder="Enter Caption.."
            />
          </div>
          {errors.desc.length>0 && <Errors>{errors.desc}</Errors>}
        </Form>
      </MainDiv>
    );
  }
}
export default AlbumUpload;
