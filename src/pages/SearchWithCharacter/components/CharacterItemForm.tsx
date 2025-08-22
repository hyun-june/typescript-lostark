const CharacterItemForm = ({ ...props }) => {
  // 어떤걸 보여줄까??
  // icon= 장비 이미지, name = 장비이름, tooltip = json.parse된 툴팁 데이터
  const { icon, name, tooltip } = props;
  console.log("🚀 ~ CharacterItemForm ~ tooltip:", tooltip);
  return (
    <div>
      <div>
        <img src={icon} alt="" />
      </div>

      {name}
    </div>
  );
};

export default CharacterItemForm;
