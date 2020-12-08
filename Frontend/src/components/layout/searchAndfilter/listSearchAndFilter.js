import React, { Component } from "react";
import SearchRange from "./search-range";
import SearchSelection from "./search_selection";
import "../../../css/searchAndfilter/listSearch.css";
import Search from "../../../image/search.svg";
import SearchCheckbox from "./search-checkbox";

class ListSearchAndFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSearchAndFilter: [
        {
          type: "selection",
          criteria: "Loại phòng",
          selections: ["Căn hộ mini", "Căn hộ đầy đủ", "Phòng trọ", "Nhà dân"],
          name: "roomType",
        },
        {
          type: "selection",
          criteria: "thành phố/tỉnh",
          selections: ["Hà Nội", "Hồ Chí Minh", "Bắc Giang", "Thanh Hóa"],
          name: "city",
        },
        {
          type: "selection",
          criteria: "quận/huyện",
          selections: [
            "Quận Cầu Giấy",
            "Quận Hai Bà Trưng",
            "Quận Thanh Xuân",
            "Quận Long Biên",
          ],
          name: "district",
        },
        {
          type: "range",
          criteria: "Giá",
          unit: "triệu VNĐ",
          name: "priceRange",
        },
        {
          type: "range",
          criteria: "Kích thước",
          unit: "m2",
          name: "rangeSize",
        },
        {
          type: "range",
          criteria: "Số phòng ngủ",
          unit: "",
          name: "rangeBedRoom",
        },
        { type: "checkbox", criteria: "Nội thất", property: "facility" },
      ],
    };
  }
  render() {
    const { listSearchAndFilter } = this.state;
    return (
      <div className="list-searchAndFilter">
        <div className="search-title">
          <span>Thông tin phòng trọ</span>
        </div>
        {listSearchAndFilter.map((searchAndFilter, index) => {
          if (searchAndFilter.type === "selection")
            return <SearchSelection search={searchAndFilter} key={index} />;
          else if (searchAndFilter.type === "range")
            return <SearchRange search={searchAndFilter} key={index} />;
          else return <SearchCheckbox search={searchAndFilter} key={index} />;
        })}
        <div className="search-submit">
          <img src={Search} alt="search" width={20} height={20} />
          <span>Tìm kiếm</span>
        </div>
      </div>
    );
  }
}

export default ListSearchAndFilter;
