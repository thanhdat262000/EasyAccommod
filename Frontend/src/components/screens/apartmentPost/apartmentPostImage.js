import React, { Component } from "react";
import Upload from "../../../image/upload.svg";
import "../../../css/screens/apartmentPost/apartmentPostImage.css";
import Cancel from "../../../image/cancel.svg";
class ApartmentPostImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listImages: [],
    };
  }
  display = (e) => {
    console.log(e.target.files);
    const images = [...e.target.files].map((file) => URL.createObjectURL(file));
    this.setState({
      listImages: [...this.state.listImages, ...images],
    });
  };
  onDeleteImage = (index) => {
    const { listImages } = this.state;
    this.setState({
      listImages: [
        ...listImages.slice(0, index),
        ...listImages.slice(index + 1),
      ],
    });
  };
  render() {
    const { listImages } = this.state;
    return (
      <div className="apartment-post-image">
        <div className="apartment-post-image-custom-button">
          <label for="apartment-post-image-button">
            {" "}
            <span>Chọn ảnh và tải lên</span>
            <img src={Upload} alt="upload" width={20} height={20} />
          </label>
          <input
            onChange={this.display}
            type="file"
            accept="image/*"
            id="apartment-post-image-button"
            name="image"
          ></input>
        </div>
        <div className="apartment-post-image-description">
          <p>
            Nhấn vào nút “Chọn ảnh tải lên” để chọn và tải nhiều ảnh lên cùng
            lúc.
          </p>
          <p>Dung lượng tối đa 2MB cho từng ảnh.</p>
          <h4>{`ẢNH ĐÃ TẢI LÊN (${listImages.length}/5)`}</h4>
        </div>
        <div className="apartment-post-image-review">
          {listImages.map((image, index) => (
            <div className="image-review" key={index}>
              {" "}
              <img
                src={image}
                alt={`review-${index}`}
                width="100%"
                height="80%"
              />
              <div
                className="image-review-delete"
                onClick={() => this.onDeleteImage(index)}
              >
                <img src={Cancel} alt="review-cancel" width={20} height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ApartmentPostImage;
