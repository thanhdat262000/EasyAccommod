import React, { Component } from "react";
import getFormData from "get-form-data";
import { Redirect, withRouter } from "react-router-dom";
import ListApartmentPostProperty from "./listApartmentPostProperty";
import "../../../css/screens/apartmentPost/apartmentPostBody.css";
import ApartmentPostImage from "./apartmentPostImage";
import ApartmentPostCheckDuplicate from "./apartmentPostCheckDuplicate";
import ApartmentPostExpiration from "./apartmentPostExpiration";
import { connect } from "react-redux";
import { getPrivilege } from "../../../redux/selector/selectors";
import { postApartment } from "../../../service/owner.service";
import { withFormik } from "formik";
import * as Yup from "yup";
import ApartmentPostSuccess from "./apartmentPostSuccess";

class ApartmentPostBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        {
          name: "Nhập dữ liệu phòng",
          description: "Nhập dữ liệu cơ bản",
          isChosen: true,
        },
        {
          name: "Tải lên ảnh",
          description: "Tải ảnh và quản lý ảnh",
          isChosen: false,
        },

        {
          name: "Kiểm tra trùng lặp",
          description: "Kiểm tra đồng thời",
          isChosen: false,
        },
        {
          name: "Thời gian đăng bài",
          description: "Thời gian hiển thị bài",
          isChosen: false,
        },
      ],
      postData: {},
      isPosted: false,
    };
  }
  OnNext = () => {
    let form = document.querySelector("#apartment-post-form");
    let data = getFormData(form);
    const { listTitles, postData } = this.state;
    const [title] = listTitles.filter((title) => title.isChosen === true);
    const index = listTitles.indexOf(title);
    if (index < 3)
      this.setState({
        listTitles: [
          ...listTitles.slice(0, index),
          { ...title, isChosen: false },
          { ...listTitles[index + 1], isChosen: true },
          ...listTitles.slice(index + 2),
        ],
        postData: { ...postData, ...data },
      });
    else
      this.setState(
        {
          postData: { ...postData, ...data },
          isPosted: true,
        },
        () => {
          const formdata = new FormData();
          for (let key in this.state.postData) {
            formdata.append(key, this.state.postData[key]);
          }
          if (index === 3) {
            postApartment(formdata).then((status) => {
              if (status === 200) {
                console.log(formdata);
                console.log(status);
                // this.props.history.push("/apartment-management");
              }
            });
          }
        }
      );
  };
  OnBack = () => {
    const { listTitles } = this.state;
    const [title] = listTitles.filter((title) => title.isChosen === true);
    const index = listTitles.indexOf(title);
    console.log(index);
    this.setState({
      listTitles: [
        ...listTitles.slice(0, index - 1),
        { ...listTitles[index - 1], isChosen: true },
        { ...title, isChosen: false },

        ...listTitles.slice(index + 1),
      ],
    });
  };
  nextButton = () => {
    const [state] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (state.name) {
      case "Nhập dữ liệu phòng":
      case "Tải lên ảnh":
      case "Kiểm tra trùng lặp":
        return (
          <button
            type="button"
            className="apartment-post-continue"
            onClick={this.OnNext}
          >
            Tiếp theo
          </button>
        );
      case "Thời gian đăng bài":
        return (
          <button
            type="button"
            className="apartment-post-end"
            onClick={this.OnNext}
          >
            Đăng bài
          </button>
        );
      default:
        return null;
    }
  };
  previousButton = () => {
    const [state] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (state.name) {
      case "Tải lên ảnh":
      case "Kiểm tra trùng lặp":
      case "Thời gian đăng bài":
        return (
          <button
            type="button"
            className="apartment-post-previous"
            onClick={this.OnBack}
          >
            Trở lại
          </button>
        );
      default:
        return null;
    }
  };
  render() {
    const { privilege } = this.props;
    if (privilege === "user" || !privilege) return <Redirect to="/" />;
    const { values, handleChange, errors, handleBlur, touched } = this.props;
    let apartmentPostBody;
    const { listTitles } = this.state;
    const [state] = listTitles.filter((title) => title.isChosen === true);
    switch (state.name) {
      case "Nhập dữ liệu phòng":
        apartmentPostBody = (
          <ListApartmentPostProperty
            values={values}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors}
            touched={touched}
          />
        );
        break;
      case "Tải lên ảnh":
        apartmentPostBody = (
          <ApartmentPostImage
            disPlay={this.disPlay}
            onDeleteImage={this.onDeleteImage}
            listImages={this.state.postData.images}
          />
        );
        break;
      case "Kiểm tra trùng lặp":
        apartmentPostBody = <ApartmentPostCheckDuplicate />;
        break;
      case "Thời gian đăng bài":
        apartmentPostBody = <ApartmentPostExpiration />;
        break;
      default:
        break;
      // return <Redirect to="/apartment-management" />;
    }
    return (
      <div className="apartment-post-main-body">
        <div className="apartment-post-body">
          <div className="apartment-post-list-titles">
            {listTitles.map((title, index) => (
              <div
                key={index}
                className="apartment-post-title"
                style={{
                  backgroundColor: title.isChosen
                    ? "#4694DC"
                    : "rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    color: title.isChosen ? "white" : "black",
                  }}
                >
                  {index + 1}
                </span>
                <div>
                  <span
                    id="name"
                    style={{
                      color: title.isChosen ? "white" : "black",
                    }}
                  >
                    {title.name}
                  </span>
                  <span id="description">{title.description}</span>
                </div>
              </div>
            ))}
          </div>
          <form
            name="apartment-post-form"
            id="apartment-post-form"
            encType="multipart/form"
          >
            {" "}
            {apartmentPostBody}
            <div className="apartment-post-form-buttons">
              {" "}
              {this.nextButton()}
              {this.previousButton()}
            </div>
          </form>
        </div>
        {this.state.isPosted ? (
          <ApartmentPostSuccess
            onClick={() => {
              this.props.history.push("/apartment-management");
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    privilege: getPrivilege(state),
  }),
  null
)(
  withRouter(
    withFormik({
      mapPropsToValues() {
        return {
          addressDescription: "",
          square: "",
          price: "",
        };
      },
      validationSchema: Yup.object().shape({
        addressDescription: Yup.string().required("Hãy nhập địa chỉ"),
        square: Yup.number()
          .typeError("Nhập chưa đúng")
          .required("Hãy nhập diện tích"),
        price: Yup.number()
          .typeError("Nhập chưa đúng")
          .required("Hãy nhập giá"),
      }),
    })(ApartmentPostBody)
  )
);
