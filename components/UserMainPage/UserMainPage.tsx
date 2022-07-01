import * as S from "./styled";
import DocumentPlus from "./DocumentPlus";
import Document from "./Document";
import SideBar from "./SideBar";

const UserMainPage = () => {
  return (
    <S.UserMainContainer>
      <SideBar />
      <S.DoucumentContainer>
        <S.TagLayout>
          <S.TagBox>
            <S.DocumentTitle>대표분야</S.DocumentTitle>
            <S.testTag />
          </S.TagBox>
          <S.TagBox>
            <S.DocumentTitle>내 태그</S.DocumentTitle>
            <S.TagAria>
              <S.testTag />
              <S.testTag />
              <S.testTag />
            </S.TagAria>
          </S.TagBox>
        </S.TagLayout>
        <S.DocumentTitle>내 문서</S.DocumentTitle>
        <S.DocumentText>로컬 문서</S.DocumentText>
        <S.DocumentsLayout>
          <DocumentPlus />
          <Document />
          <Document />
          <Document />
        </S.DocumentsLayout>
        <S.DocumentsLayout>
          <S.DocumentBox marginL="0px">
            <S.DocumentText>공개 요청 대기 문서</S.DocumentText>
            <Document />
          </S.DocumentBox>
          <S.DocumentBox marginL="17vw">
            <S.DocumentText>공개 요청 대기 문서</S.DocumentText>
            <Document />
          </S.DocumentBox>
        </S.DocumentsLayout>
      </S.DoucumentContainer>
    </S.UserMainContainer>
  );
};

export default UserMainPage;
