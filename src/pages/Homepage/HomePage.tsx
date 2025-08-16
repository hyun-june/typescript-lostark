import CharProfileBox from "../../common/components/CharProfileBox";
import FirstClearRunCard from "../../common/components/FirstClearRunCard";
import { useGetCharactersProfiles } from "../../hooks/useGetCharacter";
import { useGetCharactersList } from "../../hooks/useGetCharactersList";
import { useGetRoster } from "../../hooks/useGetRoster";
import { Button, Typography } from "@mui/material";
import { CustomProfile } from "../../models/Character";
import LoadingSpinner from "../../common/components/LoadingSpinner";

const FirstClearRunTeam = {
  로네다: [
    { name: "소녀양점순", note: "카멘더헉", esther: true },
    { name: "필례", note: "카멘 The TOP10", esther: true },
    { name: "편지", note: "카멘더헉", esther: true },
    { name: "돌세공하고싶어서만든캐릭", esther: true },
    { name: "노돌리", note: "카멘 The TOP10", esther: true },
    { name: "봉킹", note: "카멘더헉" },
    { name: "챙뱌" },
    { name: "베르앤도" },
  ],
  로사단: [
    { name: "후L1", note: "카멘 The 1st", esther: true },
    { name: "짹키창", note: "카멘 The 1st", esther: true },
    { name: "태경", note: "카멘 The 1st", esther: true },
    { name: "착해진쫀지", note: "카멘더헉", esther: true },
    { name: "방울토마토라면", note: "카멘 The 1st", esther: true },
    { name: "김뚜띠", note: "카멘 The 1st", esther: true },
    { name: "홀리은가비", note: "카멘 The 1st" },
    { name: "쁘허", note: "카멘 The 1st" },
  ],
  로코코: [
    { name: "김시끄", esther: true },
    { name: "빙수아", note: "카멘더헉", esther: true },
    { name: "조울증" },
    { name: "알빵" },
    { name: "학신" },
    { name: "인사하면곤란함" },
    { name: "햬나" },
    { name: "애기토현" },
  ],
  로조쿠: [
    { name: "랜스", esther: true },
    { name: "인끼", esther: true },
    { name: "쭈르야", esther: true },
    { name: "Dorist" },
    { name: "리퍼는지켜줘야해" },
    { name: "강원기의원기옥" },
    { name: "코룰라", note: "카멘더헉" },
    { name: "리니링" },
  ],
  카라댄: [
    { name: "보라냥이집사8", esther: true },
    { name: "썰고있잖아", esther: true },
    { name: "다시", esther: true },
    { name: "율탱커", esther: true },
    { name: "풍산개" },
    { name: "쭈니마로", esther: true },
    { name: "좋냥" },
    { name: "풀씨", note: "카멘 The 3rd" },
  ],
  로병단: [
    { name: "우웅", note: "카멘더헉", esther: true },
    { name: "일혜", note: "카멘 The 3rd", esther: true },
    { name: "블가루", note: "카멘 The 3rd" },
    { name: "블서떡상기원", note: "카멘 The 2nd" },
    { name: "빙르카나", note: "카멘 The 3rd" },
    { name: "오닉쮸", note: "카멘 The 2nd" },
    { name: "베비썬", note: "카멘더헉" },
    { name: "세빙", note: "카멘 The 2nd" },
  ],
  로하이: [
    { name: "꾀물", esther: true },
    { name: "김배마" },
    { name: "피즈커" },
    { name: "해부의미학", esther: true },
    { name: "엄마항상사랑해요" },
    { name: "피이잉포옹" },
    { name: "로즈프와브레" },
    { name: "별채화", esther: true },
  ],
  로아레인저: [
    { name: "슬레두르" },
    { name: "김주선" },
    { name: "로아섹시디바" },
    { name: "띵매니저" },
    { name: "성연" },
    { name: "사능" },
    { name: "히후히후", esther: true },
    { name: "카마부리" },
  ],
  로망단: [
    { name: "미호밍", esther: true },
    { name: "토옥토옥" },
    { name: "겜태평" },
    { name: "요내" },
    { name: "존섹율" },
    { name: "떼잉" },
    { name: "논문요정", esther: true },
    { name: "홀키키" },
  ],
  로덕단: [
    { name: "자영구", esther: true },
    { name: "우준돌" },
    { name: "이루비새" },
    { name: "므린아" },
    { name: "민초두리안" },
    { name: "히스래저" },
    { name: "혁웅" },
    { name: "늘냥냥" },
  ],
  로타쿠: [
    { name: "겐시유", esther: true },
    { name: "준박스" },
    { name: "민트롤" },
    { name: "현블e" },
    { name: "비슈누" },
    { name: "악마의삼겹살" },
    { name: "타쿠" },
    { name: "빛강선타" },
  ],
  로아헌터스: [
    { name: "낀현동" },
    { name: "발구미", note: "카멘 The 2nd" },
    { name: "문설", note: "카멘 The 2nd" },
    { name: "cadlez" },
    { name: "청룡진", note: "카멘 The 3rd" },
    { name: "힘찬" },
    { name: "생각해볼게" },
    { name: "윤노랑" },
  ],
  로투사: [
    { name: "송파대로삼사오" },
    { name: "플협지" },
    { name: "장골브레이커" },
    { name: "김호씨입니다" },
    { name: "예나어린이" },
    { name: "디트히포" },
    { name: "알아서물약드세요" },
    { name: "Wineholy" },
  ],
  로구빛: [
    { name: "나는김호빵" },
    { name: "카드신용대출" },
    { name: "주원이는싱글벙글" },
    { name: "천하제일고수" },
    { name: "수컬러" },
    { name: "이끠" },
    { name: "별연" },
    { name: "송송파송송" },
  ],
  로아정: [
    { name: "타요", esther: true },
    { name: "무유우", esther: true },
    { name: "조토진", esther: true },
    { name: "연지", esther: true },
    { name: "박준수라" },
    { name: "섬누리" },
    { name: "파라딩딩이" },
    { name: "수야" },
  ],
  알약단: [
    { name: "슬레근도" },
    { name: "데니풀" },
    { name: "다빈치" },
    { name: "칠도대왕" },
    { name: "jarvan4se" },
    { name: "에겐돈" },
    { name: "바드소아" },
    { name: "로드오브홀나" },
  ],
  로가다: [
    { name: "썸퓨리" },
    { name: "잠깐잠깐방금껀진짜억까임", note: "카멘더헉" },
    { name: "숫여우유튜브" },
    { name: "핸떠기" },
    { name: "무관이순신" },
    { name: "쩡니예" },
    { name: "찌모모코" },
    { name: "도레미랑" },
  ],
};

const HomePage = () => {
  // const { data: rosterData } = useGetRoster("피엇음");
  // const { data: profileData } = useGetCharactersProfiles("피엇음");
  // const { data } = useGetCharactersList(testData);
  // console.log("🚀 ~ HomePage ~ data:", data);

  const allMembers = Object.values(FirstClearRunTeam).flat();
  const allNicknames = allMembers.map((member) => member.name);

  // const { data: characters, isLoading } = useGetCharactersList(allNicknames);
  const { data: characters, isLoading } = useGetCharactersList(allNicknames);

  if (isLoading || !characters) {
    return <LoadingSpinner isLoading={isLoading} />;
  }

  const teamData = Object.fromEntries(
    Object.entries(FirstClearRunTeam).map(([teamName, members]) => [
      teamName,
      members
        .map((member) => {
          const charData = characters.find(
            (char) => char?.CharacterName === member.name
          );
          if (!charData) return null;
          return {
            ...charData,
            note: member.note,
            esther: member.esther,
          };
        })
        .filter(Boolean),
    ])
  );

  return (
    <div>
      <Typography variant="h1" sx={{ marginBottom: "1em" }}>
        카제로스 4막 퍼클런 공격대
      </Typography>
      {Object.entries(teamData).map(([teamName, members]) => (
        <FirstClearRunCard
          teamName={teamName}
          members={members}
          key={teamName}
        />
      ))}

      {/* <Button variant="contained" color="secondary" size="small">
        더보기
      </Button> */}
    </div>
  );
};
export default HomePage;
