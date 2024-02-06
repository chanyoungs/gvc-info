import Typography from "@mui/material/Typography";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { CustomLink } from "./CustomLink";

const contentsNoIndex = [
  {
    title: "시간",
    content: (
      <>
        <Typography variant="body1" align="center">
          매주 금요일 19:30~22:30
        </Typography>
        <Typography variant="body1" align="center">
          (매월 첫째주 금요일은 19:00~22:00 Castle Climbing 갑니다)
        </Typography>
      </>
    )
  },
  {
    title: "장소",
    content: (
      <>
        {[
          "Arch Climbing Wall: Building One +",
          "Tower Bridge Business",
          "Drummond Rd",
          "London",
          "SE16 4DG"
        ].map((line) => (
          <Typography variant="body1" align="center">
            {line}
          </Typography>
        ))}
        <Typography variant="body1" align="center">
          <CustomLink
            href="https://maps.app.goo.gl/3VjfvTayQYpNzvY4A"
            color="secondary"
          >
            Google Map Link
          </CustomLink>
        </Typography>
        <Typography variant="body1" align="center">
          (매월 첫째주 금요일은 19:00~22:00 Castle Climbing 갑니다)
        </Typography>
        {[
          "The Castle Climbing Centre",
          "Green Lanes, Stoke Newington",
          "Drummond Rd",
          "London",
          "N4 2HA"
        ].map((line) => (
          <Typography variant="body1" align="center">
            {line}
          </Typography>
        ))}
        <Typography variant="body1" align="center">
          <CustomLink
            href="https://goo.gl/maps/4XRArWQbRB3gxhGt6"
            color="secondary"
          >
            Google Map Link
          </CustomLink>
        </Typography>
      </>
    )
  },
  {
    title: "준비물",
    content: (
      <List>
        <ListItem alignItems="flex-start">
          <ListItemText
            primaryTypographyProps={{ align: "center" }}
            primary="편한 운동복"
            secondary="긴바지 있으시면 더 좋고요, 신발은 어차피 클라이밍 슈즈
                신으셔야해서 상관없습니다(유료 렌탈 가능)"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primaryTypographyProps={{ align: "center" }}
            primary="물병"
            secondary="정수기 있습니다"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primaryTypographyProps={{ align: "center" }}
            primary="개인 자물쇠(Optional)"
            secondary="자물쇠 가져오시면 당일 락커 사용 가능합니다"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem alignItems="flex-start">
          <ListItemText
            primaryTypographyProps={{ align: "center" }}
            primary="샤워 준비물(Optional)"
            secondary="샤워실 2개가 있어서 수건(유료 렌탈 가능), 갈아입을 옷, 세면도구(Body wash는 이미 샤워실에 있습니다) 갸져오시고 씻으셔도 됩니다"
          />
        </ListItem>
      </List>
    )
  },
  {
    title: "이용료",
    content: (
      <>
        <Typography variant="body1">
          밑에 링크 참고 하세요. 학생 할인도 있고(Concession rates)
          10회권(무기한), 정액권도(최소 2주 Freeze/Unfreeze Membership 가능)
          있으니까 참고 하시고 일일권은 시간당이 아니라 하루 이용권입니다. 한
          센터에 입장권이 있으시면 다른 Arch 센터들에서도 입장 가능합니다.
        </Typography>
        <Typography variant="body1" align="center">
          <CustomLink
            href="https://www.archclimbingwall.com/b1-centre-info"
            color="secondary"
          >
            Prices Info Link
          </CustomLink>
        </Typography>
      </>
    )
  },
  {
    title: "처음?",
    content: (
      <>
        <Typography variant="body1">
          Arch Climbing 처음 오시는분들은 안전교육 영상(3분)을 미리 숙지하시고 온라인 등록 하신후 카운터에서 등록 확인 및 안전교육 관련 확인 질문들 답해주시면 됩니다. 등록할때
          "Where have you bouldered before inside or outside?" 질문에 클라이밍
          처음이실 경우는 그냥 "First time" 이라고 적으시면 돼요.
        </Typography>
        <br />
        <Typography variant="body1">
          클라이밍 자체를 처음 해보시는 분은 클럽장에게
          미리 알려주시면 저희가 직접 인덕션 및 기본 코칭 해드릴수 있으니 미리 연락 주세요.
        </Typography>
        <Typography variant="body1" align="center">
          <CustomLink
            href="https://www.archclimbingwall.com/first-time"
            color="secondary"
          >
            Arch 'First Time?' Link
          </CustomLink>
        </Typography>
      </>
    )
  },
  {
    title: "자료들",
    content: (
      <>
        <Typography variant="body1" align="center">
          <CustomLink
            href="https://youtube.com/playlist?list=PL_Hmsjg2DetZaWcxrMDUD1fVeFErEecRA"
            color="secondary"
          >
            ClimbTourTV_클라임투어티비 - 클라이밍 기초 Youtube Playlist Link
          </CustomLink>
        </Typography>
        <Typography variant="body1">
          클라이밍 기본을 짧은 영상들로 알려주는 플레이리스트
        </Typography>
      </>
    )
  }
];

export const contents = contentsNoIndex.map((content, index) => ({
  ...content,
  index
}));
