const dataFilter = ({ statuses: list = []} = {}) => {
  return list.map((item) => ({
    text: item.text,
    pic_ids: item.pic_ids,
    user: item.user,
    id: item.id,
    mid: item.mid,
    created_at: item.created_at,
    original_pic: item.original_pic,
  }));
};

module.exports = {
  dataFilter,
};
