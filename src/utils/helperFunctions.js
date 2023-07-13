const selectFilter = (dataList, filterValue) => {
  if (filterValue.select === "both") {
    return dataList;
  }

  return filterValue.select === "Offline"
    ? dataList.filter(({ eventType }) => eventType === "Offline")
    : dataList.filter(({ eventType }) => eventType === "Online");
};

const searchFilter = (dataList, filterValue) => {
  return filterValue.search > 0
    ? dataList.filter((meet) => {
        return (
          meet.title
            .toLowerCase()
            .includes(filterValue.search.trim().toLowerCase()) ||
          meet.eventTags.includes(filterValue.search.trim().toLowerCase())
        );
      })
    : dataList;
};

const filterArr = [selectFilter, searchFilter];

export function getFilteredData(filterValue, dataList) {
  return filterArr.reduce(
    (acc, currFunc) => currFunc(acc, filterValue),
    dataList
  );
}
