export interface CharacterInfo {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
}
[];

export interface CharacterProfileResponse {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: null;
  TownName: string;
  Title: string;
  GuildMemberGrade: string;
  GuildName: string;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: [
    {
      Type: string;
      Value: string;
      Tooltip: string[];
    }
  ];
  Tendencies: [
    {
      Type: string;
      Point: number;
      MaxPoint: number;
    }
  ];
  CombatPower: string;
  Decorations: {
    Symbol: string;
    Emblems: [string];
  };
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
}

export interface CustomProfile extends CharacterProfileResponse {
  note?: string;
  esther?: boolean;
}
