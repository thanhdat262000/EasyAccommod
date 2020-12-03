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
          selections: [
            { id: 1, name: "Căn hộ mini" },
            { id: 2, name: "Căn hộ đầy đủ" },
            { id: 3, name: "Phòng trọ" },
            { id: 4, name: "Nhà dân" },
          ],
        },
        {
          type: "selection",
          criteria: "thành phố/tỉnh",
          selections: [
            { id: 1, name: "Hà Nội" },
            { id: 2, name: "Hồ Chí Minh" },
            { id: 3, name: "Bắc Giang" },
            { id: 4, name: "Thanh Hóa" },
          ],
        },
        {
          type: "selection",
          criteria: "quận/huyện",
          selections: [
            { id: 1, name: "Quận Cầu Giấy" },
            { id: 2, name: "Quận Hai Bà Trưng" },
            { id: 3, name: "Quận Thanh Xuân" },
            { id: 4, name: "Quận Long Biên" },
          ],
        },
        { type: "range", criteria: "Giá", unit: "triệu VNĐ" },
        { type: "range", criteria: "Kích thước", unit: "" },
        { type: "range", criteria: "Số phòng ngủ", unit: "" },
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
